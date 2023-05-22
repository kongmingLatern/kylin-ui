export const presetPaddingOrMarginOption: any = [
  'mx',
  'ml',
  'my',
  'm',
  'mr',
  'p',
  'pl',
  'py',
  'pr',
  'px',
]
export function paddingOrMarginModule({
  mx,
  ml,
  my,
  m,
  mr,
  p,
  pl,
  py,
  pr,
  px,
}: Partial<any>) {
  return {
    mx,
    ml,
    my,
    m,
    mr,
    p,
    pl,
    py,
    pr,
    px,
  }
}
