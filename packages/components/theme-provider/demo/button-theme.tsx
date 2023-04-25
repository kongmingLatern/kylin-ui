import Button from '../../button/button'
import { ThemeProvider } from '../theme-provider'

const theme = {
	button: {
		primary: {
			bg: 'purple-500',
			color: '#fff',
		},
		secondary: {
			bg: 'red-500',
			color: '#fff',
		},
	},
}
const theme_secondary = {
	button: {
		secondary: {
			bg: 'pink-500',
			color: '#fff',
		},
	},
}

const ButtonType = () => {
	return (
		<>
			<ThemeProvider themeConfig={theme}>
				<Button type="primary">123123</Button>
				<ThemeProvider themeConfig={theme_secondary}>
					<Button type="primary">123123</Button>
					<Button type="secondary">123123</Button>
				</ThemeProvider>
			</ThemeProvider>
		</>
	)
}

export default ButtonType
