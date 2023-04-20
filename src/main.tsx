import React from 'react'
import ReactDOM from 'react-dom/client'
import ButtonType from '../packages/components/button/demo/button-type'
import '@unocss/reset/normalize.css'
import 'uno.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ButtonType />
	</React.StrictMode>
)
