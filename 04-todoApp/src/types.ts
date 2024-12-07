import { TODOFILTERS } from './const'

export interface Todo {
	id: string
	title: string
	completed: boolean
}

export interface TodosProps {
	todos: Todo[]
	onRemoveTodo: (id: string) => void
	onCompleteTodo: (id: string) => void
}

export type FilterValue = (typeof TODOFILTERS)[keyof typeof TODOFILTERS]
