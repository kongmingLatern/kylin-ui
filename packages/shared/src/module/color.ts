export const presetColorOption: any = ['color', 'bg']

export function colorModule({ color, bg }: Partial<any>) {
  return {
    color,
    bg,
  }
}

export function dealColorModule({ color, bg }) {
  return {
    [`text-${color}-500`]: color,
    [`bg-${bg}-500`]: bg,
  }
}
