import { useState } from 'react'
import { ThemeProvider } from '../theme-provider'
import { useTheme } from '../../../hooks'
import { Button } from '@components/Button'

const theme = {
  button: {
    common: {
      px: 2,
      py: 2,
    },
    primary: {
      bg: 'green-500',
      color: '#fff',
      hover: {
        bg: 'blue-500',
      },
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
  const [themeMode, setThemeMode] = useTheme()

  return (
    <>
      <h1>ThemeProvider</h1>
      {/* <ThemeProvider themeConfig={theme}> */}
      {/* <Button
        type="primary"
        className="font-bold"
        color="blue"
      >
        123123
      </Button>
      <Button
        type="secondary"
        bg="blue-300"
        px={10}
        py={20}
      >
        Blue
      </Button>
      <ThemeProvider themeConfig={theme_secondary}>
        <Button type="custmer">123123</Button>
        <Button type="secondary">123123</Button>
      </ThemeProvider> */}
      {/* </ThemeProvider> */}
      {/* <ThemeProvider> */}
      <Button
        type="primary"
        className="font-bold"
        onClick={() =>
          setThemeMode(
            themeMode === 'light' ? 'dark' : 'light'
          )
        }
      >
        SetTheme
      </Button>
      {/* </ThemeProvider> */}
    </>
  )
}

export default ButtonType
