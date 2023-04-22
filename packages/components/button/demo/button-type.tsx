import { ThemeProvider } from '../../theme-provider/theme-provider'
import Button from '../button'

const ButtonType = () => {
	return (
		<ThemeProvider>
			<Button type="primary">123123</Button>
		</ThemeProvider>
	)
}

export default ButtonType
