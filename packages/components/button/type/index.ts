import { AnchorButtonProps } from './AnchorButtonProps'
import { NativeButtonProps } from './NativeButtonProps'
import { AttributifyAttributes } from '@unocss/preset-attributify'

const ButtonTypes = [
	'default',
	'primary',
	'secondary',
	'ghost',
	'dashed',
	'link',
	'text',
] as const
export type ButtonType = (typeof ButtonTypes)[number]

const ButtonHTMLTypes = [
	'submit',
	'button',
	'reset',
] as const
export type ButtonHTMLType =
	(typeof ButtonHTMLTypes)[number]

export type ButtonProps = Partial<
	AnchorButtonProps & NativeButtonProps
>

export type CompoundedComponent =
	React.ForwardRefExoticComponent<
		ButtonProps &
			React.RefAttributes<HTMLElement> &
			AttributifyAttributes
	> & {
		/** @internal */
		__KYLIN_BUTTON: boolean
	}
