import { mediumSafelist } from './medium'
import { presetSafelist } from './preset'

type presetType = 'preset' | 'medium' | 'custom'

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
