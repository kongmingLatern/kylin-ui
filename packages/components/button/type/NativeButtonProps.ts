import { ButtonHTMLType } from '.'
import { BaseButtonProps } from './BaseButtonProps'
import {
  ColorProps,
  PaddingOrMarginProps,
} from '@kylin-ui/shared'

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
