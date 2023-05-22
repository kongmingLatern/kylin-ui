import {
  dealColorModule,
  dealMarginModule,
  dealPaddingModule,
} from '@kylin-ui/shared'
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
      ...dealColorModule({ color, bg, hover }),
      ...dealPaddingModule({ p, pl, py, pr, px }),
      ...dealMarginModule({ m, ml, my, mr, mx }),
    }
  }
}
