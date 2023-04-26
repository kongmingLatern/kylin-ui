import {
	defineConfig,
	presetUno,
	presetIcons,
	presetAttributify,
} from 'unocss'

export default defineConfig({
	presets: [
		presetUno(),
		presetIcons(),
		presetAttributify(),
	],
	safelist: [
		'bg-purple-500',
		'bg-red-500',
		'color-green',
		'px-2',
		'py-2',
	],
})
