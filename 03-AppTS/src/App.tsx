import { useEffect, useRef, useState } from 'react'
import './App.css'
import List from './components/List'
import Form from './components/Form'
import { Sub, SubsApiResponse } from './types'

// puedo crear un estado de aplicacion con una interfaz para mapear los tipos de datos
interface AppState {
	subs: Sub[]
	newSubsNumber: number
}

const INITIAL_SUBS: Sub[] = [
	{
		nick: 'Pitz',
		subMonths: 12,
		avatar: 'https://i.pravatar.cc/150?u=pitz',
		desc: 'I am a developer'
	},
	{
		nick: 'Manu',
		subMonths: 13,
		avatar: 'https://i.pravatar.cc/150?u=manu',
		desc: 'I am a developer'
	},
	{
		nick: 'Carli',
		subMonths: 104,
		avatar: 'https://i.pravatar.cc/150?u=carli',
		desc: 'i am a developer'
	}
]

function App() {
	// aqui jalo el estado creado
	const [subs, setsubs] = useState<AppState['subs']>([])
	// const [newSubsNumber, setnewSubsNumber] = useState<AppState['newSubsNumber']>(0)
	const divRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		// setsubs(INITIAL_SUBS)

		// recuperamos del servidor
		const fetchSubs = async (): Promise<SubsApiResponse> => {
			return fetch('https://api.escuelajs.co/api/v1/users?limit=10').then(
				(response) => response.json()
			)
		}

		// mapeamos las interfaces de la api local con la del API
		const mapFromApiResponseToSub = (apiResponse: SubsApiResponse): Sub[] => {
			return apiResponse.map((apiSubs) => {
				const { name: nick, id: subMonths, avatar, role: desc } = apiSubs

				return {
					nick,
					subMonths,
					avatar,
					desc
				}
			})
		}

		// tranformamos y seteamos
		fetchSubs().then((subs) => {
			const initSubs = mapFromApiResponseToSub(subs)
			setsubs(initSubs)
		})
	}, [])

	const handleNewSub = (newSub: Sub) => {
		setsubs((subs) => [...subs, newSub])
	}

	return (
		<div ref={divRef} className='App'>
			<h1> Pitz Subs Project</h1>
			<List subs={subs} />
			<Form onNewSub={handleNewSub} />
		</div>
	)
}

export default App
