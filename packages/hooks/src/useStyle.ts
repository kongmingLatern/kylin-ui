import {
  registerColorModule,
  registerMarginModule,
  registerPaddingModule,
  registerPseudoModule,
} from '@kylin-ui/preset'
export type styleName = 'base' | 'medium' | 'large'

export function useStyle(name: styleName, options) {
  if (name === 'base') {
    return registerBasePreset(options)
  }
}

function registerBasePreset(options: any) {
  return {
    ...registerColorModule(options),
    ...registerPaddingModule(options),
    ...registerMarginModule(options),
    ...registerPseudoModule(options),
  }
}
