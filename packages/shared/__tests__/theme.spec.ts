import { extractThemeConfig } from '..'

describe('test themeConfig', () => {
  it('shoule support extract primary button', () => {
    const themeConfig = {
      button: {
        common: {
          color: '#fff',
          px: '2',
        },
        primary: {
          bg: '#180234',
        },
      },
    }
    expect(
      extractThemeConfig(themeConfig, 'button', 'primary')
    ).toMatchInlineSnapshot('"color-#fff px-2 bg-#180234"')
  })
  it('shoule support extract secondary button', () => {
    const themeConfig = {
      button: {
        common: {
          color: '#fff',
          px: '2',
        },
        primary: {
          bg: '#180234',
        },
      },
    }
    expect(
      extractThemeConfig(themeConfig, 'button', 'secondary')
    ).toMatchInlineSnapshot('"color-#fff px-2"')
  })
  it('shoule support extract special class', () => {
    const themeConfig = {
      button: {
        common: {
          color: '#fff',
          px: '2',
          hover: {
            color: '#000',
          },
        },
        primary: {
          bg: '#180234',
        },
      },
    }
    expect(
      extractThemeConfig(themeConfig, 'button', 'primary')
    ).toMatchInlineSnapshot(
      '"color-#fff px-2 hover:color-#000 bg-#180234"'
    )
  })
  it('shoule support extract special class with some props', () => {
    const themeConfig = {
      button: {
        common: {
          color: '#fff',
          px: '2',
          hover: {
            color: '#000',
            px: '3',
          },
        },
        primary: {
          bg: '#180234',
        },
      },
    }
    expect(
      extractThemeConfig(themeConfig, 'button', 'primary')
    ).toMatchInlineSnapshot(
      '"color-#fff px-2 hover:color-#000 hover:px-3 bg-#180234"'
    )
  })
})
