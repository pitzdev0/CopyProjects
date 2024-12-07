import { TodosProps } from '../types'
import Todo from './Todo'

// v1: const Todos = ({ todos }: { todos: Todo[] }): JSX.Element => {

// v2: utilizando los props de la funcion
//const Todos = ({ todos }: TodosProps): JSX.Element => {

// v3: utilizando react.fc + <props>
const Todos: React.FC<TodosProps> = ({
	todos,
	onRemoveTodo,
	onCompleteTodo
}) => {
	return (
		<ul className='todo-list'>
			{todos.map((todo) => (
				<li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
					<Todo
						key={todo.id}
						id={todo.id}
						title={todo.title}
						completed={todo.completed}
						onRemoveTodo={onRemoveTodo}
						onCompleteTodo={onCompleteTodo}
					/>
				</li>
			))}
		</ul>
	)
}

export default Todos
