import type { ApiSearchResponse, Data } from '../types'
import { API_HOST } from '../../config'

export const searchData = async (search: string): Promise<[Error?, Data?]> => {
	try {
		const response = await fetch(`${API_HOST}/api/users?q=${search}`)
		if (!response.ok)
			return [new Error(`Error uploading file: ${response.status}`)]
		const json = (await response.json()) as ApiSearchResponse
		return [undefined, json.data]
	} catch (error) {
		if (error instanceof Error) return [error]
	}

	return [new Error('Something went wrong')]
}
