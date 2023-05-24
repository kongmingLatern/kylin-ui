export const presetMarginOption: any = [
  'm',
  'ml',
  'my',
  'mr',
  'mx',
]
export function registerMarginModule({ m, ml, my, mr, mx }) {
  return {
    [`m-${m}`]: m,
    [`ml-${ml}`]: ml,
    [`mr-${mr}`]: mr,
    [`mx-${mx}`]: mx,
    [`my-${my}`]: my,
  }
}
