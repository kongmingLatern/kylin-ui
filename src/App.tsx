import ThemeButton from '@packages/components/ThemeProvider/demo/button-theme'
import CommonButton from '@components/Button/demo/button'
import { ButtonGroupDemo } from '@components/Button/demo/button-group'
import { TitleDemo } from '@components/Typography/demo/Title'

const App = () => {
	return (
		<>
			<TitleDemo />
			<br />
			<CommonButton />
			<br />
			<ButtonGroupDemo />
			<br />
			<ThemeButton />
			<br />
		</>
	)
}

export default App
