type styleName = 'preset' | 'medium' | 'large'
export function useStyle(name: styleName, options) {
  if (name === 'preset') {
    const {
      color,
      bg,
      hover,
      p,
      pl,
      pr,
      m,
      ml,
      mr,
      mx,
      my,
      py,
      px,
    } = options
    return {
      [`text-${color}-500`]: color,
      [`bg-${bg}-500`]: bg,
      [`hover:bg-${hover}-700`]: hover,
      [`p-${p}`]: p,
      [`pl-${pl}`]: pl,
      [`pr-${pr}`]: pr,
      [`px-${px}`]: px,
      [`py-${py}`]: py,
      [`m-${m}`]: m,
      [`ml-${ml}`]: ml,
      [`mr-${mr}`]: mr,
      [`mx-${mx}`]: mx,
      [`my-${my}`]: my,
    }
  }
}
