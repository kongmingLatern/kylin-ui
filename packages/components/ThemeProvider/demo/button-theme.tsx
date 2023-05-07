import { useState } from 'react'
import Button from '../../button/button'
import { ThemeProvider } from '../theme-provider'
import { useTheme } from '../../../hooks'

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
        bg: 'purple-500',
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
      {/* <ThemeProvider themeConfig={theme}>
        <Button
          type="primary"
          className="font-bold"
          color="blue"
        >
          123123
        </Button>
        <Button
          type="secondary"
          color="black"
          px={10}
          py={20}
        >
          Blue
        </Button>
        <ThemeProvider themeConfig={theme_secondary}>
          <Button type="custmer">123123</Button>
          <Button type="secondary">123123</Button>
        </ThemeProvider>
      </ThemeProvider> */}
      {/* <ThemeProvider> */}
      <Button
        type="primary"
        className="font-bold"
        color="blue"
        onClick={() =>
          setThemeMode(
            themeMode === 'light' ? 'dark' : 'light'
          )
        }
      >
        123123
      </Button>
      {/* </ThemeProvider> */}
    </>
  )
}

export default ButtonType
