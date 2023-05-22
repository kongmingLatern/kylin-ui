import {
  defineConfig,
  presetUno,
  presetIcons,
  presetAttributify,
} from 'unocss'
import { dynamicSafelistPlugin } from './scripts/unocss/dynamicSafelistPlugin'

console.log(dynamicSafelistPlugin())

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify(),
  ] as any,
  rules: [
    [
      /^m-(\d+)$/,
      ([, d]) => ({ margin: `${d / 4}rem` }),
    ] as any,
    [
      /^p-(\d+)$/,
      match => ({ padding: `${match[1] / 4}rem` }),
    ] as any,
  ],
  safelist: [
    // TODO: 根据 开发者传入的 preset 进行 safelist 的配置
    ...dynamicSafelistPlugin('medium'),
  ],
})
