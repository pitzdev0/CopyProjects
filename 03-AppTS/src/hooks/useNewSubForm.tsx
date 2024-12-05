import { useReducer } from 'react'
import { Sub } from '../types'

interface FormData {
	inputValues: Sub
}

const INITIAL_STATE = {
	nick: '',
	subMonths: 0,
	avatar: '',
	desc: ''
}

type FormReducerAction =
	| {
			type: 'change_value'
			payload: { name: string; value: string }
	  }
	| {
			type: 'clear'
	  }

const formReducer = (
	state: FormData['inputValues'],
	action: FormReducerAction
) => {
	switch (action.type) {
		case 'change_value':
			const { name, value } = action.payload
			return {
				...state,
				[name]: value
			}
		case 'clear':
			return INITIAL_STATE
	}
}

const useNewSubForm = () => {
	return useReducer(formReducer, INITIAL_STATE)
}

export default useNewSubForm
