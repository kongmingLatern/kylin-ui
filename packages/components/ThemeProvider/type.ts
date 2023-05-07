import { Dispatch, SetStateAction } from 'react'

export interface ThemeContextProps {
  theme: Record<string, any> | undefined
  setTheme: Dispatch<
    SetStateAction<ThemeProviderProps['themeConfig']>
  >
}

export interface ThemeProviderProps {
  themeConfig: ThemeContextProps['theme']
  children: any
}
