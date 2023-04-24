import ThemeButton from '../packages/components/theme-provider/demo/button-theme'
import CommonButton from '../packages/components/button/demo/button-type'

const App = () => {
	return (
		<div>
			<h1>Type Button</h1>
			<CommonButton />
			<h1>Theme Button</h1>
			<br />
			<ThemeButton />
		</div>
	)
}

export default App
