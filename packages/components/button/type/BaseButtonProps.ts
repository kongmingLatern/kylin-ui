import {
  ButtonShapeType,
  ButtonSizeType,
  ButtonType,
} from '.'

export interface BaseButtonProps {
  type?: ButtonType
  // beforeIcon?: React.ReactNode;
  // afterIcon?: React.ReactNode;
  shape?: ButtonShapeType
  size?: ButtonSizeType
  // disabled?: boolean;
  loading?: boolean | { delay?: number }
  // prefixCls?: string;
  // rootClassName?: string;
  ghost?: boolean
  // danger?: boolean;
  block?: boolean
  children?: React.ReactNode
  [key: `data-${string}`]: string
}
