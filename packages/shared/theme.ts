//@unocss-include
export function extractThemeConfig(
	themeConfig,
	componentName,
	themeType
) {
	let str = ''
	const res = {
		...extractValueByType('common'),
		...extractValueByType(themeType),
	}
	function extractValueByType(type: string) {
		// const result: string[] = []
		const result = {}
		if (
			componentName in themeConfig &&
			themeConfig[componentName][type]
		) {
			for (const [key, value] of Object.entries(
				themeConfig[componentName][type]
			)) {
				// result.push(`${key}="${value}"`)
				result[key] = value
			}
		} else {
			console.warn(
				`type ${type} not exists in ${componentName}, please check your themeConfig`
			)
		}
		return result
	}

	Object.entries(res).forEach(([key, value]) => {
		str += `${key}-${value} `
	})

	return str.trim()
}
