import {
  defineConfig,
  presetUno,
  presetIcons,
  presetAttributify
} from 'unocss'
import { themeConfig } from './theme.config'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify()
  ],
  theme: {
    ...themeConfig
  }
})
