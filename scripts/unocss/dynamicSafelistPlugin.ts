import { UserConfig } from '../../packages/shared/'
import { mediumSafelist } from './medium'
import { presetSafelist } from './preset/base'

// TODO: 提供三种预设的动态白名单
// 开发者可以导入其中一种，也可以自定义
// import '@kylin/preset-safelist'
export function dynamicSafelistPlugin(config: UserConfig) {
  const { preset } = config as UserConfig

  if (preset === 'base') {
    return presetSafelist
  } else if (preset === 'medium') {
    return mediumSafelist
  }
  return []
}
