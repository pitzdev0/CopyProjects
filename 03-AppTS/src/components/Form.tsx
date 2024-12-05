// import { useReducer, useState } from 'react'
import { Sub } from '../types'
import useNewSubForm from '../hooks/useNewSubForm'
import '../App.css'

interface FormProps {
	// este recibe la funcion para actualizar el estado, que es un
	// dispatch por defecto .
	// onNewSub: React.Dispatch<React.SetStateAction<Sub[]>>

	// este aproach es mejor porque no necesito pasar el dispatch
	// y la logica queda fuera del formulario.
	onNewSub: (newSub: Sub) => void
}

const Form = ({ onNewSub }: FormProps) => {
	// const [formData, setFormData] =
	// 	useState<FormData['inputValues']>(INITIAL_STATE)

	const [formData, dispatch] = useNewSubForm()

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		onNewSub(formData)
		handleClear()
	}

	const handleClear = () => {
		// setFormData(INITIAL_STATE)
		// ---> en lugar de usar el estado, se puede usar el reducer con las acciones configuradas
		dispatch({ type: 'clear' })
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target

		// ---> en lugar de usar el estado, se puede usar el reducer con las acciones configuradas
		dispatch({ type: 'change_value', payload: { name, value } })

		// setFormData({
		// 	...formData,
		// 	[e.target.name]: e.target.value
		// })
	}

	return (
		<form onSubmit={handleSubmit} className='form'>
			<input
				onChange={handleChange}
				value={formData.nick}
				type='text'
				name='nick'
				placeholder='Nick'
			/>
			<input
				onChange={handleChange}
				value={formData.subMonths}
				type='number'
				name='subMonths'
				placeholder='18'
			/>
			<input
				onChange={handleChange}
				value={formData.avatar}
				type='text'
				name='avatar'
				placeholder='my avatar'
			/>
			<input
				onChange={handleChange}
				value={formData.desc}
				type='text'
				name='desc'
				placeholder='im a pro'
			/>
			<button type='submit'>Save me! </button>
			<button type='button' onClick={handleClear}>
				Clear
			</button>
		</form>
	)
}

export default Form
