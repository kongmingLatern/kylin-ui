import { useEffect, useState } from 'react'
import { darkTheme, lightTheme } from '../../theme/src'

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
      updateThemeMode(lightTheme)
    } else if (themeMode === 'dark') {
      updateThemeMode(darkTheme)
    }
  }, [themeMode])

  return [themeMode, setThemeMode] as const
}
function updateThemeMode(lightTheme: {
  '--primary-color': string
  '--text-color': string
  '--border-color': string
}) {
  Object.entries(lightTheme).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value)
  })
}
