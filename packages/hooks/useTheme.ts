import { useEffect, useState } from 'react'

export function useTheme(theme: 'light' | 'dark') {
  const [themeMode, setThemeMode] = useState<
    'light' | 'dark'
  >(theme)

  useEffect(() => {
    if (themeMode === 'light') {
      const lightTheme = {
        '--primary-color': '#3498db',
        '--text-color': '#2c3e50',
        '--border-color': '#bdc3c7',
      }
      Object.entries(lightTheme).forEach(([key, value]) => {
        document.documentElement.style.setProperty(
          key,
          value
        )
      })
    } else if (themeMode === 'dark') {
      const darkTheme = {
        '--primary-color': '#2c3e50',
        '--text-color': '#ecf0f1',
        '--border-color': '#34495e',
      }
      Object.entries(darkTheme).forEach(([key, value]) => {
        document.documentElement.style.setProperty(
          key,
          value
        )
      })
    }
  }, [themeMode])

  return [themeMode, setThemeMode] as const
}
