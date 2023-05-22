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

export function dealPaddingModule({ p, pl, py, pr, px }) {
  return {
    [`p-${p}`]: p,
    [`pl-${pl}`]: pl,
    [`pr-${pr}`]: pr,
    [`px-${px}`]: px,
    [`py-${py}`]: py,
  }
}

export function dealMarginModule({ m, ml, my, mr, mx }) {
  return {
    [`m-${m}`]: m,
    [`ml-${ml}`]: ml,
    [`mr-${mr}`]: mr,
    [`mx-${mx}`]: mx,
    [`my-${my}`]: my,
  }
}
