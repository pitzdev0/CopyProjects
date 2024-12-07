import { FilterValue } from '../types'
import Filters from './Filters'

interface FooterProps {
	activeCount: number
	completedCount: number
	filterSelected: FilterValue
	onClearCompleted: () => void
	handleFilterChange: (filter: FilterValue) => void
}

const Footer: React.FC<FooterProps> = ({
	activeCount = 0,
	completedCount = 0,
	filterSelected,
	handleFilterChange,
	onClearCompleted
}) => {
	return (
		<footer className='footer'>
			<span className='todo-count'>
				<strong> {activeCount} </strong> pendientes
			</span>

			<Filters
				filterSelected={filterSelected}
				onFilterChange={handleFilterChange}
			/>
			{completedCount > 0 && (
				<button
					type='button'
					className='clear-completed'
					onClick={onClearCompleted}>
					Borrar Completados
				</button>
			)}
		</footer>
	)
}

export default Footer
