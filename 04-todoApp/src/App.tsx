import { useState } from 'react'

import Todos from './components/Todos'
import Footer from './components/Footer'

import { TODOFILTERS } from './const'
import { FilterValue, Todo } from './types'
import Header from './components/Header'

const mockTodo = [
	{
		id: '1',
		title: 'Buy Milk',
		completed: false
	},
	{
		id: '2',
		title: 'Buy Eggs',
		completed: true
	},
	{
		id: '3',
		title: 'Buy Bread',
		completed: false
	}
]

// tambien podria ser un React.FC
function App(): JSX.Element {
	const [todos, setTodos] = useState(mockTodo)
	const [filterSelected, setFilterSelected] = useState<FilterValue>(
		TODOFILTERS.ALL
	)

	const handleRemove = (id: string) => {
		const newTodos = todos.filter((todo) => todo.id !== id)
		setTodos(newTodos)
	}

	const handleCompleted = (id: string) => {
		const updatedTodo = todos.find((todo) => todo.id === id)
		if (updatedTodo) {
			updatedTodo.completed = !updatedTodo.completed
			setTodos([...todos])
		}
	}

	const handleFilterChange = (filter: FilterValue): void => {
		setFilterSelected(filter)
	}

	const handleRemoveCompleted = (): void => {
		const newTodos = todos.filter((todo) => !todo.completed)
		setTodos(newTodos)
	}

	const handleAddTodo = ({ title }: Pick<Todo, 'title'>): void => {
		const newTodo = {
			id: crypto.randomUUID(),
			title,
			completed: false
		}
		setTodos([...todos, newTodo])
	}

	const filteredTodos = todos.filter((todo) => {
		switch (filterSelected) {
			case TODOFILTERS.ACTIVE:
				return !todo.completed
			case TODOFILTERS.COMPLETED:
				return todo.completed
			default:
				return todo
		}
	})

	const activeCount = todos.filter((todo) => !todo.completed).length

	const completedCount = todos.filter((todo) => todo.completed).length

	return (
		<div className='todoapp'>
			<Header onAddTodo={handleAddTodo} />
			<Todos
				todos={filteredTodos}
				onRemoveTodo={handleRemove}
				onCompleteTodo={handleCompleted}
			/>
			<Footer
				activeCount={activeCount}
				completedCount={completedCount}
				filterSelected={filterSelected}
				handleFilterChange={handleFilterChange}
				onClearCompleted={handleRemoveCompleted}
			/>
		</div>
	)
}

export default App
