import {
	createContext,
	useCallback,
	useContext,
	useState,
} from 'react'
import type {
	ThemeContextProps,
	ThemeProviderProps,
} from './type'

export const ThemeContext =
	createContext<ThemeContextProps>({} as ThemeContextProps)

export const ThemeProvider = ({
	theme,
	children,
}: Partial<ThemeProviderProps>) => {
	const [th, setTh] = useState(theme)

	// 主题切换
	const haneleThemeChange = useCallback(
		theme => {
			if (theme === 'light') {
				document.documentElement.style.setProperty(
					'--primary-color',
					'#1890ff'
				)
				document.documentElement.style.setProperty(
					'--secondary-color',
					'#6c757d'
				)
				document.documentElement.style.setProperty(
					'--text-color',
					'#000'
				)
			} else {
				document.documentElement.style.setProperty(
					'--primary-color',
					'#343a40'
				)
				document.documentElement.style.setProperty(
					'--secondary-color',
					'#495057'
				)
			}
		},
		[theme]
	)

	return (
		<ThemeContext.Provider
			value={{ th, setTh, haneleThemeChange }}
		>
			{children}
		</ThemeContext.Provider>
	)
}

export const useTheme = () => useContext(ThemeContext)
