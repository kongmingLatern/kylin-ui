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
  safelist: [
    // FLAG: 根据 开发者传入的 preset 进行 safelist 的配置
    ...dynamicSafelistPlugin(),
  ],
})
