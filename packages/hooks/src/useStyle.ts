import {
  registerColorModule,
  registerMarginModule,
  registerPaddingModule,
  registerPseudoModule,
} from '@kylin-ui/preset'

import type { presetMode } from '@kylin-ui/shared'

export function useStyle(name: presetMode, options) {
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
