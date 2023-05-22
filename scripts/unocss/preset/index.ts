import { presetColors } from '../base/color'

export const presetSafelist = [
  ...presetColors.map(c => `text-${c}-500`),
  ...presetColors.map(c => `bg-${c}-500`),
  ...presetColors.map(c => `hover:bg-${c}-700`),
]
