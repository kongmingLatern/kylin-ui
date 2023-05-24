export const presetColorOption: any = ['color', 'bg']

export function registerColorModule({ color, bg }) {
  return {
    [`text-${color}-500`]: color,
    [`bg-${bg}-500`]: bg,
  }
}
