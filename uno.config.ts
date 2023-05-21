import {
  defineConfig,
  presetUno,
  presetIcons,
  presetAttributify,
} from 'unocss'

const colors = [
  'green',
  'red',
  'purple',
  'yellow',
  'blue',
  'indigo',
  'pink',
  'gray',
  'black',
  'white',
]

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify(),
  ] as any,
  safelist: [
    ...colors.map(c => `text-${c}-500`),
    ...colors.map(c => `bg-${c}-500`),
    ...colors.map(c => `hover:bg-${c}-700`),
  ],
})
