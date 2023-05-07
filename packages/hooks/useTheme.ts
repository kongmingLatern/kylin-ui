import { useEffect, useState } from 'react'

export function useTheme(
  theme: 'light' | 'dark' = 'light'
) {
  const [themeMode, setThemeMode] = useState<
    'light' | 'dark'
  >(
    (localStorage.getItem('theme') as 'light' | 'dark') ??
      theme
  )

  // Change theme mode
  useEffect(() => {
    // Setup theme mode
    localStorage.setItem('theme', themeMode)
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
