export function camel2kebab(obj: Record<string, any>) {
	const result = {}
	Object.keys(obj).forEach(key => {
		const prop = key
			.replace(/([A-Z])/g, '-$1')
			.toLowerCase()
		result[prop] = obj[key]
	})

	return result
}

export function camel2kebab_string(str: string) {
	return str.replace(/([A-Z])/g, '-$1').toLowerCase()
}
