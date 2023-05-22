import { mediumSafelist } from './medium'
import { presetSafelist } from './preset'

type presetType = 'preset' | 'medium' | 'custom'

// TODO: 提供三种预设的动态白名单
// 开发者可以导入其中一种，也可以自定义
// import '@kylin/preset-safelist'
export function dynamicSafelistPlugin(
  preset: presetType = 'preset'
) {
  if (preset === 'preset') {
    return presetSafelist
  } else if (preset === 'medium') {
    return mediumSafelist
  }
  return []
}
