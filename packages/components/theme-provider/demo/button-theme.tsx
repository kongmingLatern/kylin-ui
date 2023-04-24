import Button from '../../button/button'
import { theme } from '../../theme-provider/theme'
import { ThemeProvider } from '../../theme-provider/theme-provider'

const ButtonType = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Button type="primary">123123</Button>
				<Button type="secondary">123123</Button>
			</ThemeProvider>
		</>
	)
}

export default ButtonType
