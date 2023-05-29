import { AnchorButtonProps } from './AnchorButtonProps'
import { NativeButtonProps } from './NativeButtonProps'
import { AttributifyAttributes } from '@unocss/preset-attributify'

const ButtonTypes = [
  'default',
  'primary',
  'secondary',
  'success',
  'info',
  'error',
  'ghost',
  'dashed',
  'link',
  'text',
] as const
export type ButtonType = (typeof ButtonTypes)[number]

const ButtonShape = ['circle', 'square', 'round'] as const
export type ButtonShapeType = (typeof ButtonShape)[number]

const SizeType = ['large', 'middle', 'small'] as const
export type ButtonSizeType = (typeof SizeType)[number]

const ButtonHTMLTypes = [
  'submit',
  'button',
  'reset',
] as const
export type ButtonHTMLType =
  (typeof ButtonHTMLTypes)[number]

const colors = [
  'green',
  'red',
  'purple',
  'yellow',
  'blue',
  'indigo',
  'pink',
  'gray',
  'black',
  'white',
]

export type styleProps = {
  /** @deprecated */
  color: Readonly<typeof colors>
}

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

export type LoadingConfigType = {
  loading: boolean
  delay: number
}

export type Loading = number | boolean

export * from './BaseButtonProps'
