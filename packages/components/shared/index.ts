// 将驼峰写法转为烤肉串写法
export function camel2kebab(str: Record<string, any>) {
	const result = {}
	// for (const key in Object) {
	// if (Object.prototype.hasOwnProperty.call(str, key)) {
	// console.log('key', Object.keys(str))

	Object.keys(str).forEach(key => {
		const newKey = key
			.replace(/([A-Z])/g, '-$1')
			.toLowerCase()
		result[newKey] = str[key]
	})

	return result
	// }
	// }
}
