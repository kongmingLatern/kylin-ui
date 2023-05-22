import { presetColors } from '../base/color'

const colorModule = [
  ...presetColors.map(c => `text-${c}-500`),
  ...presetColors.map(c => `bg-${c}-500`),
  ...presetColors.map(c => `hover:bg-${c}-700`),
]

const paddingOrMarginModule = generatePaddingOrMargin('p')
  .concat(generatePaddingOrMargin('pl'))
  .concat(generatePaddingOrMargin('pr'))
  .concat(generatePaddingOrMargin('m'))
  .concat(generatePaddingOrMargin('ml'))
  .concat(generatePaddingOrMargin('mr'))

export const presetSafelist = [
  ...colorModule,
  ...paddingOrMarginModule,
]
function generatePaddingOrMargin(target): string[] {
  return Array.from({ length: 10 }, (_, i) => i + 1).map(
    item => `${target}-${item}`
  )
}
