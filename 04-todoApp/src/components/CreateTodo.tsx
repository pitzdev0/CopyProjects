import { useState } from 'react'
import { Todo } from '../types'

interface CreateTodoProps {
	saveTodo: ({ title }: Pick<Todo, 'title'>) => void
}

const CreateTodo: React.FC<CreateTodoProps> = ({ saveTodo }) => {
	const [inputValue, setInputValue] = useState('')

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		saveTodo({ title: inputValue })
		setInputValue('')
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='What needs to be done?'
				className='new-todo'
				value={inputValue}
				onChange={handleInputChange}
				autoFocus
			/>
		</form>
	)
}

export default CreateTodo
