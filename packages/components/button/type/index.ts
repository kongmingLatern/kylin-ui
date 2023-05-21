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
