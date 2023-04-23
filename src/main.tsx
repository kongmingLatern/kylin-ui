import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@unocss/reset/normalize.css'
// import '../packages/theme/src/common/global.css'
import '../packages/theme/src/style/index.scss'
import 'uno.css'

ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
