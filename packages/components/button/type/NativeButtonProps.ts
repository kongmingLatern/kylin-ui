import { ButtonHTMLType } from '.'
import { BaseButtonProps } from './BaseButtonProps'

export type NativeButtonProps = {
  htmlType?: ButtonHTMLType
  onClick?: React.MouseEventHandler<HTMLButtonElement>
} & BaseButtonProps &
  Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'type' | 'onClick'
  > &
  ColorProps &
  PaddingOrMarginProps

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
] as const

type range = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

type ColorProps = {
  // NOTE: color Module
  color?: (typeof colors)[number]
  bg?: (typeof colors)[number]
  hover?: (typeof colors)[number]
}

type PaddingOrMarginProps = {
  // NOTE: padding or margin Module
  p?: range
  pl?: range
  pr?: range
  m?: range
  ml?: range
  mr?: range
}
