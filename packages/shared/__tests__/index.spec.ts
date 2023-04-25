import { camel2kebab, camel2kebab_string } from '..'
import { describe, it, expect } from 'vitest'
describe('camel2kebab_string', () => {
	it('camel2kebab', () => {
		const str = 'primaryColor'

		expect(camel2kebab_string(str)).toBe('primary-color')
	})
})

describe('camel2kebab_object', () => {
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
