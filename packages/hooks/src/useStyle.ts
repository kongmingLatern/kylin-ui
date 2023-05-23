import {
  registerColorModule,
  registerMarginModule,
  registerPaddingModule,
  registerPseudoModule,
} from '@kylin-ui/preset'
type styleName = 'preset' | 'medium' | 'large'
export function useStyle(name: styleName, options) {
  if (name === 'preset') {
    return {
      ...registerColorModule(options),
      ...registerPaddingModule(options),
      ...registerMarginModule(options),
      ...registerPseudoModule(options),
    }
  }
}
