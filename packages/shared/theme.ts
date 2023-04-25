export function extractThemeConfig(
	themeConfig,
	componentName,
	themeType
) {
	return {
		[componentName]: {
			...extractValueByType('common'),
			...extractValueByType(themeType),
		},
	}

	function extractValueByType(type: string) {
		const result = {}
		if (themeConfig[componentName][type]) {
			for (const [key, value] of Object.entries(
				themeConfig[componentName][type]
			)) {
				result[`${key}`] = value
			}
		} else {
			console.warn(
				`type ${type} not exists in ${componentName}, please check your themeConfig`
			)
		}
		return result
	}
}
