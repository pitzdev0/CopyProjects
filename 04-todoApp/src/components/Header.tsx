import { Todo } from '../types'
import CreateTodo from './CreateTodo'

interface HeaderProps {
	onAddTodo: ({ title }: Pick<Todo, 'title'>) => void
}

const Header: React.FC<HeaderProps> = ({ onAddTodo }) => {
	return (
		<header className='header'>
			<h1>
				Todo
				<img
					height={60}
					width={60}
					src='https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'
					alt='ts logo'
				/>
			</h1>

			<CreateTodo saveTodo={onAddTodo} />
		</header>
	)
}

export default Header
