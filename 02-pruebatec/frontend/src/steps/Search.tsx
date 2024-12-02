import { useEffect, useState } from 'react'
import { Data } from '../types'
import { toast } from 'sonner'
import { searchData } from '../services/search'
import { useDebounce } from '@uidotdev/usehooks'

const Search = ({ initData }: { initData: Data }) => {
	const [data, setData] = useState<Data>(initData)
	const [search, setSearch] = useState<string>('')

	const debouncedSearch = useDebounce(search, 350)

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value)
	}

	// actualizamos los parametros al cambiar la búsqueda
	useEffect(() => {
		if (debouncedSearch === '') {
			window.history.pushState({}, 'Shawarma Challenge', '/')
			return
		}

		window.history.pushState(
			{},
			'Shawarma Challenge',
			`/search?q=${debouncedSearch}`
		)
	}, [debouncedSearch])

	// llamada a la api con datos filtrados
	useEffect(() => {
		if (search === '') {
			setData(initData)
			return
		}

		if (debouncedSearch) {
			searchData(debouncedSearch).then((res) => {
				const [error, newData] = res
				if (error) {
					toast.error(error.message)
					return
				}
				if (newData) {
					toast.success('Data loaded successfully')
					setData(newData)
				}
			})
		}
	}, [debouncedSearch, initData])

	return (
		<>
			<h3>Search</h3>
			<form>
				<input type='text' placeholder='Search...' onChange={handleSearch} />
			</form>

			{data.length > 0 && (
				<div>
					<h3>Results</h3>
					<ul>
						{data.map((row) => (
							<li key={row.id}>
								{Object.entries(row).map(([key, value]) => (
									<p key={key}>
										<strong>{key}</strong>: {value}
									</p>
								))}
							</li>
						))}
					</ul>
				</div>
			)}
		</>
	)
}

export default Search
