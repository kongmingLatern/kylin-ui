import { createContext, useContext, useState } from 'react'

interface ThemeContextProps {
	theme: string
	setTheme: (theme: string) => void
}

const ThemeContext = createContext<ThemeContextProps>(
	{} as ThemeContextProps
)

export const ThemeProvider = ({ children }: any) => {
	const [theme, setTheme] = useState('default')

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export const useTheme = () => useContext(ThemeContext)
