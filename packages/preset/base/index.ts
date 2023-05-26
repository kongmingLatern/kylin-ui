// FLAG: Neet to move to packages/preset
import { presetColors } from './color'
import { generatePaddingOrMargin } from '../helpers'

const colorModule = [
  ...presetColors.map(c => `text-${c}-500`),
  ...presetColors.map(c => `bg-${c}-500`),
  ...presetColors.map(c => `hover:bg-${c}-700`),
]

const paddingOrMarginModule = generatePaddingOrMargin('p')
  .concat(generatePaddingOrMargin('pl'))
  .concat(generatePaddingOrMargin('px'))
  .concat(generatePaddingOrMargin('py'))
  .concat(generatePaddingOrMargin('pr'))
  .concat(generatePaddingOrMargin('m'))
  .concat(generatePaddingOrMargin('ml'))
  .concat(generatePaddingOrMargin('mr'))
  .concat(generatePaddingOrMargin('mx'))
  .concat(generatePaddingOrMargin('my'))

export * from '../common'

export const presetSafelist = [
  ...colorModule,
  ...paddingOrMarginModule,
]
