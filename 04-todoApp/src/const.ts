export const TODOFILTERS = {
	ALL: 'all',
	COMPLETED: 'completed',
	ACTIVE: 'active'
} as const // --> AS CONST: lo convierte a solo lectura

// diccionario de objetos filtro
export const FILTERS_BUTTONS = {
	[TODOFILTERS.ALL]: {
		literal: 'Todos',
		value: TODOFILTERS.ALL,
		href: `/?filter=${TODOFILTERS.ALL}`
	},
	[TODOFILTERS.COMPLETED]: {
		literal: 'Completados',
		value: TODOFILTERS.ALL,
		href: `/?filter=${TODOFILTERS.COMPLETED}`
	},
	[TODOFILTERS.ACTIVE]: {
		literal: 'Activos',
		value: TODOFILTERS.ALL,
		href: `/?filter=${TODOFILTERS.ACTIVE}`
	}
} as const
