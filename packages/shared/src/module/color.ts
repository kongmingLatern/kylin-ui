export const presetColorOption: any = ['color', 'hover', 'bg']

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
