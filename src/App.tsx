import ThemeButton from '@packages/components/ThemeProvider/demo/button-theme'
import CommonButton from '@packages/components/button/demo/type'

const App = () => {
	return (
		<div>
			<h1>Type Button</h1>
			<CommonButton />
			<h1>Theme Button</h1>
			<br />
			<ThemeButton />
			<br />
		</div>
	)
}

export default App
