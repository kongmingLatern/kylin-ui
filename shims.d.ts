import type { AttributifyAttributes } from '@unocss/preset-attributify'
declare module 'react' {
	interface HTMLAttributes<T>
		extends AttributifyAttributes {}
}

declare module '@unocss/preset-attributify' {
	interface AttributifyAttributes
		extends AttributifyAttributes {}
}
