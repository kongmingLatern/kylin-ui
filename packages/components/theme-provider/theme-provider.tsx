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
	themeConfig,
	children,
}: Partial<ThemeProviderProps>) => {
	const [theme, setTheme] = useState(themeConfig)
	// 1. 读取用户传递的配置

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export const useTheme = () => useContext(ThemeContext)
