import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import 'todomvc-app-css/index.css' // styles for the TodoMVC app

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
)
