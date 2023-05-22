export const presetMarginOption: any = [
  'm',
  'ml',
  'my',
  'mr',
  'mx',
]
export function marginModule({
  m,
  ml,
  my,
  mr,
  mx,
}: Partial<any>) {
  return {
    m,
    ml,
    my,
    mr,
    mx,
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
