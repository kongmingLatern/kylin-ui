import { useCallback } from 'react'

export default function useTheme(theme: string) {
	// TODO: 用户可以自定义主题（light，dark, ...）
	// 主题切换
	const haneleThemeChange = useCallback(
		theme => {
			if (theme === 'light') {
				document.documentElement.style.setProperty(
					'--primary-color',
					'#1890ff'
				)
				document.documentElement.style.setProperty(
					'--secondary-color',
					'#6c757d'
				)
				document.documentElement.style.setProperty(
					'--text-color',
					'#000'
				)
			} else {
				document.documentElement.style.setProperty(
					'--primary-color',
					'#343a40'
				)
				document.documentElement.style.setProperty(
					'--secondary-color',
					'#495057'
				)
			}
		},
		[theme]
	)
}
