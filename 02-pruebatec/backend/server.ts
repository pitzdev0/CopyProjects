import express from 'express'
import cors from 'cors'
import multer from 'multer'
import csvToJson from 'convert-csv-to-json'

const app = express()
const port = process.env.PORT || 3000

// el middleware de multer es responsable de almacenar los archivos subidos
const storage = multer.memoryStorage()
const upload = multer({ storage })

let userData: Record<string, string>[] = []

// enable cors
app.use(cors())

app.get('/api/users', (req, res) => {
	// extraer parametros de la petición
	const { q } = req.query

	// validacion param
	if (!q || Array.isArray(q)) {
		res.status(500).json({ message: 'No query parameter provided' })
		return
	}

	// filter
	const search = q.toString().toLowerCase()
	const filteredData = userData.filter((row) => {
		return Object.values(row).some((value) =>
			value.toString().toLowerCase().includes(search)
		)
	})

	// return
	res.status(200).json({ data: filteredData, message: 'Users found' })
})

app.post('/api/files', upload.single('file'), async (req, res) => {
	// extraer datos de la petición
	const { file } = req
	// validaciones
	if (!file) {
		res.status(500).json({ message: 'No file provided' })
		return
	}

	// mymetype
	if (file.mimetype !== 'text/csv') {
		res.status(500).json({ message: 'Only csv files are allowed' })
		return
	}

	// transformar datos (buffer) => por defecto es estan en binario
	let json: Record<string, string>[] = []
	try {
		const rawCSV = Buffer.from(file.buffer).toString('utf-8')
		console.log(rawCSV)
		// tranform string to JSON
		json = csvToJson.fieldDelimiter(',').csvStringToJson(rawCSV)
		userData = json
	} catch (error) {
		res.status(500).json({ message: 'Error parsing file' })
		return
	}

	// save json to db
	userData = json

	// return 200
	res
		.status(200)
		.json({ data: userData, message: 'File uploaded successfully' })
})

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`)
})
