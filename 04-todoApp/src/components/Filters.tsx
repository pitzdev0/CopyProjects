import { FILTERS_BUTTONS } from '../const'
import { FilterValue } from '../types'

interface FiltersProps {
	// utiliza una delas key del diccionario
	filterSelected: FilterValue
	onFilterChange: (filter: FilterValue) => void
}

const Filters: React.FC<FiltersProps> = ({
	filterSelected,
	onFilterChange
}) => {
	const handleFilterChange =
		(filter: FilterValue) => (e: React.MouseEvent<HTMLAnchorElement>) => {
			console.log(filter)
			e.preventDefault()
			onFilterChange(filter)
		}

	return (
		<ul className='filters'>
			{Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
				const className = filterSelected === key ? 'selected' : ''

				return (
					<li key={key}>
						<a
							href={href}
							className={className}
							onClick={handleFilterChange(key as FilterValue)}>
							{literal}
						</a>
					</li>
				)
			})}
		</ul>
	)
}

export default Filters
