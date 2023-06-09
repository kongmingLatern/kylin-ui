export const presetPaddingOption: any = [
  'p',
  'pl',
  'py',
  'pr',
  'px',
]

export function registerPaddingModule({ p, pl, py, pr, px }) {
  return {
    [`p-${p}`]: p,
    [`pl-${pl}`]: pl,
    [`pr-${pr}`]: pr,
    [`px-${px}`]: px,
    [`py-${py}`]: py,
  }
}
