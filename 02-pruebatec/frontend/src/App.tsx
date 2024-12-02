import './App.css'
import { useState } from 'react'
import { uploadFile } from './services/upload'
import { Toaster, toast } from 'sonner'
import { Data } from './types'
import Search from './steps/Search'

const APP_STATUS = {
	IDLE: 'IDLE',
	READY_FOR_UPLOAD: 'READY_FOR_UPLOAD',
	UPLOADING: 'UPLOADING',
	READY_FOR_USAGE: 'READY_FOR_USAGE',
	ERROR: 'ERROR'
} as const

type APP_STATUS = (typeof APP_STATUS)[keyof typeof APP_STATUS]

function App() {
	const [appStatus, setAppStatus] = useState<APP_STATUS>(APP_STATUS.IDLE)
	const [data, setData] = useState<Data>([])
	const [file, setFile] = useState<File | null>(null)

	const showButton =
		appStatus === APP_STATUS.UPLOADING ||
		appStatus === APP_STATUS.READY_FOR_UPLOAD

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const [file] = event.target.files ?? []
		if (file) {
			setFile(file)
			setAppStatus(APP_STATUS.READY_FOR_UPLOAD)
		}
	}

	const handleUpload = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (appStatus !== APP_STATUS.READY_FOR_UPLOAD || file === null) return

		setAppStatus(APP_STATUS.UPLOADING)

		const [error, newData] = await uploadFile(file)

		console.log(newData)
		if (error) {
			toast.error(error.message)
			setAppStatus(APP_STATUS.ERROR)
			return
		}

		if (newData) {
			setData(newData)
			setAppStatus(APP_STATUS.READY_FOR_USAGE)
			toast.success('File uploaded successfully')
		}
	}

	return (
		<>
			<h3> Shawarma Challenge</h3>
			<Toaster />
			{appStatus !== APP_STATUS.READY_FOR_USAGE && (
				<form onSubmit={handleUpload}>
					<label htmlFor='file-input'></label>
					<input
						disabled={showButton}
						name='file'
						type='file'
						id='file-input'
						accept='.csv'
						aria-label='file-input'
						onChange={handleInputChange}
					/>
					{appStatus === APP_STATUS.READY_FOR_UPLOAD && (
						<button type='submit'>Upload</button>
					)}
				</form>
			)}

			{appStatus === APP_STATUS.READY_FOR_USAGE && <Search initData={data} />}
		</>
	)
}

export default App
