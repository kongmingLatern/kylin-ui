export const presetColorOption: any = [
  'color',
  'hover',
  'bg',
]

export function colorModule({
  color,
  hover,
  bg,
}: Partial<any>) {
  return {
    color,
    hover,
    bg,
  }
}

export function dealColorModule({ color, hover, bg }) {
  return {
    [`text-${color}-500`]: color,
    [`bg-${bg}-500`]: bg,
    [`hover:bg-${hover}-700`]: hover,
  }
}
