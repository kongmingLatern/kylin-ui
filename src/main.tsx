import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import '@unocss/reset/normalize.css'
import '../packages/theme/src/style/index.scss'
import Button from '../dist/index.es'
import 'uno.css'

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
	<React.StrictMode>
		<Button type="primary" bg="purple-500" color="red">
      123123
		</Button>
	</React.StrictMode>
)
