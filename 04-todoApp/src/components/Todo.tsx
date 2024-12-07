import { Todo as TodoType } from '../types'

interface TodoProps extends TodoType {
	onRemoveTodo: (id: string) => void
	onCompleteTodo: (id: string) => void
}

const Todo: React.FC<TodoProps> = ({
	id,
	title,
	completed,
	onRemoveTodo,
	onCompleteTodo
}) => {
	return (
		<div className='view'>
			<input
				className='toggle'
				name='completed'
				type='checkbox'
				checked={completed}
				aria-label='Completed'
				onChange={() => onCompleteTodo(id)}
			/>
			<label>{title}</label>
			<button
				type='button'
				onClick={() => onRemoveTodo(id)}
				className='destroy'>
				{''}
			</button>
		</div>
	)
}

export default Todo
