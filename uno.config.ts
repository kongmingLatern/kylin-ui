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
  ] as any,
  safelist: [
    'bg-purple-500',
    'bg-red-500',
    'bg-green-500',
    'color-green',
    'px-2',
    'py-2',
    'hover:bg-purple-500',
    'hover:color-green',
  ],
})
