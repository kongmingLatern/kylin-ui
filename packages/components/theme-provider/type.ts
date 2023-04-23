import { Dispatch, SetStateAction } from 'react'

export interface ThemeContextProps {
	th: Record<string, any> | undefined
	setTh: Dispatch<
		SetStateAction<ThemeProviderProps['theme']>
	>
	haneleThemeChange: (theme: string) => any
}

export interface ThemeProviderProps {
	theme: Record<string, any> | undefined
	children: any
}
