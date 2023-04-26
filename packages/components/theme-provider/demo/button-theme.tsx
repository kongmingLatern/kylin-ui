import Button from '../../button/button'
import { ThemeProvider } from '../theme-provider'

const theme = {
	button: {
		common: {
			px: 2,
			py: 2,
		},
		primary: {
			bg: 'purple-500',
			color: '#fff',
		},
		secondary: {
			bg: 'green-500',
			color: '#fff',
		},
	},
}
const theme_secondary = {
	button: {
		common: {
			px: 2,
			py: 2,
		},
		secondary: {
			bg: 'purple-500',
			color: '#fff',
		},
		custmer: {
			bg: 'red-500',
			color: 'green',
		},
	},
}

const ButtonType = () => {
	return (
		<>
			<ThemeProvider themeConfig={theme}>
				<Button
					type="primary"
					className="font-bold bg-purple-300"
					bg="red-500"
					color="blue"
				>
					123123
				</Button>
				<Button
					type="secondary"
					color="black"
					px={10}
					py={20}
				>
					Blue
				</Button>
				<ThemeProvider themeConfig={theme_secondary}>
					<Button type="custmer">123123</Button>
					<Button type="secondary">123123</Button>
				</ThemeProvider>
			</ThemeProvider>
		</>
	)
}

export default ButtonType
