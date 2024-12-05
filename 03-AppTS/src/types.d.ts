export interface Sub {
	nick: string
	subMonths: number
	avatar: string
	desc?: string
}

export type SubsApiResponse = {
	id: number
	email: string
	password: string
	name: string
	role: string
	avatar: string
	created_at: string
	updated_at: string
}[]
