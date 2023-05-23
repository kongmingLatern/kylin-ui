import { presetColors } from '../base/color'

export const mediumSafelist = [
  ...presetColors.map(c => `text-${c}-500`),
  ...presetColors.map(c => `bg-${c}-500`),
]
