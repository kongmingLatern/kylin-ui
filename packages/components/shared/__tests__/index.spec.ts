import { describe, it, expect } from 'vitest'
import { camel2kebab } from '..'
describe('camel2kebab', () => {
	it('camel2kebab', () => {
		const obj = {
			primaryColor: '#333',
		}
		expect(camel2kebab(obj)).toEqual({
			'primary-color': '#333',
		})
	})
	it('camel2kebab', () => {
		const obj = {
			primaryColor: '#333',
			secondaryColor: '#666',
		}
		expect(camel2kebab(obj)).toEqual({
			'primary-color': '#333',
			'secondary-color': '#666',
		})
	})
})
