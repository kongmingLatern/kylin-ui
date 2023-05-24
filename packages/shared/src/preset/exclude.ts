import {
  presetColorOption,
  presetMarginOption,
  presetPaddingOption,
  presetPseudoOption,
} from '@kylin-ui/preset'
import { presetMode } from '../type'

export function excludePreset(name: presetMode) {
  if (name === 'base') {
    return [
      ...presetPaddingOption,
      ...presetMarginOption,
      ...presetColorOption,
      ...presetPseudoOption,
    ]
  }

  return [
    ...presetPaddingOption,
    ...presetMarginOption,
    ...presetColorOption,
    ...presetPseudoOption,
  ]
}
