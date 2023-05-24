import { presetMode } from '@packages/shared'
import {
  presetPaddingOption,
  presetMarginOption,
  presetColorOption,
  presetPseudoOption,
} from '../common'

export function generatePaddingOrMargin(target): string[] {
  return Array.from({ length: 10 }, (_, i) => i + 1).map(
    item => `${target}-${item}`
  )
}
