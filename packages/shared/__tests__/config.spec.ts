import { extractThemeConfig } from '..'

describe('test themeConfig', () => {
	it('extract primary button', () => {
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
		).toEqual({
			button: {
				color: '#fff',
				px: '2',
				bg: '#180234',
			},
		})
	})
	it('extract secondary button', () => {
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
		).toEqual({
			button: {
				color: '#fff',
				px: '2',
			},
		})
	})
})
