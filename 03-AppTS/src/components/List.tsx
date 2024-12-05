import '../App.css'
import { Sub } from '../types'

interface Props {
	subs: Array<Sub>
}

// una forma de tipar la funcion para tener acceso a propiedades como CHILDREN
// const List: React.FC<Props> = ({ subs }) => {

const List = ({ subs }: Props) => (
	<div className='cardContainer'>
		{subs.map((sub, index) => {
			return (
				<div key={index} className='card'>
					<img src={sub.avatar} alt={sub.nick} />
					<h4>{sub.nick}</h4>
					<p>{sub.subMonths} months</p>
					<p>{sub.desc}</p>
				</div>
			)
		})}
	</div>
)

export default List
