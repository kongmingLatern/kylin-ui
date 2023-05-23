import {
  dealColorModule,
  dealMarginModule,
  dealPaddingModule,
  dealPseudoModule,
} from '@kylin-ui/shared'
type styleName = 'preset' | 'medium' | 'large'
export function useStyle(name: styleName, options) {
  if (name === 'preset') {
    return {
      ...dealColorModule(options),
      ...dealPaddingModule(options),
      ...dealMarginModule(options),
      ...dealPseudoModule(options),
    }
  }
}
