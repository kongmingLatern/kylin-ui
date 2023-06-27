import type { AttributifyAttributes } from '@unocss/preset-attributify'
declare module 'react' {
  type HTMLAttributes<T> = AttributifyAttributes
}

declare module '@unocss/preset-attributify' {
  interface AttributifyAttributes
    extends AttributifyAttributes {}
}
