import { render } from '@testing-library/react'
import Button from '../../button/button'
import { ThemeProvider } from '../theme-provider'

describe('themeProvider', () => {
  let theme = {}
  beforeEach(() => {
    theme = {
      button: {
        common: {
          px: 2,
          py: 2,
        },
        primary: {
          bg: 'purple-500',
          color: '#fff',
        },
      },
    }
  })
  it('should be render', () => {
    const { container } = render(
      <ThemeProvider themeConfig={theme}>
        <Button type="primary">123</Button>
      </ThemeProvider>
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
			<button
			  class="kylin-btn-primary px-2 py-2 bg-purple-500 color-#fff"
			  type="button"
			>
			  123
			</button>
		`)
  })
})
