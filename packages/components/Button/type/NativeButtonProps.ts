import { ButtonHTMLType } from '.'
import { BaseButtonProps } from './BaseButtonProps'
import {
  ColorProps,
  PaddingOrMarginProps,
  PseudoProps,
} from '@kylin-ui/shared'

export type NativeButtonProps = {
  htmlType?: ButtonHTMLType
  onClick?: React.MouseEventHandler<HTMLButtonElement>
} & BaseButtonProps &
  Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'type' | 'onClick'
  > &
  // FLAG: Neet to combine to a integration type
  ColorProps &
  PaddingOrMarginProps &
  PseudoProps
