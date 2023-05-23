import React from 'react'
import ReactDOM from 'react-dom/client'
import '@unocss/reset/normalize.css'
import '../packages/theme/src/style/index.scss'
import 'uno.css'
import App from './App'
ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
