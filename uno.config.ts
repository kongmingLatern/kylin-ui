// import {
//   defineConfig,
//   presetUno,
//   presetIcons,
//   presetAttributify,
// } from 'unocss'
// import { dynamicSafelistPlugin } from './scripts/unocss/dynamicSafelistPlugin'
// import { loadKylinConfig } from './scripts/config'

// export default async () => {
//   const kylinConfig = await loadKylinConfig()
//   return await defineConfig({
//     presets: [
//       presetUno(),
//       presetIcons(),
//       presetAttributify(),
//     ] as any,
//     safelist: [
//       // FLAG: 根据 开发者传入的 preset 进行 safelist 的配置
//       // kylinConfig,
//       ...dynamicSafelistPlugin(kylinConfig),
//     ],
//   })
// }
