import { ButtonShapeType, ButtonType } from '.'

export interface BaseButtonProps {
  type?: ButtonType
  // icon?: React.ReactNode;
  shape?: ButtonShapeType
  // size?: SizeType;
  // disabled?: boolean;
  // loading?: boolean | { delay?: number };
  // prefixCls?: string;
  // rootClassName?: string;
  // ghost?: boolean;
  // danger?: boolean;
  block?: boolean
  children?: React.ReactNode
  [key: `data-${string}`]: string
}
