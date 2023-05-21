import { ButtonType } from '.'

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

export interface BaseButtonProps {
  type?: ButtonType
  color?: (typeof colors)[number]
  // icon?: React.ReactNode;
  // shape?: ButtonShape;
  // size?: SizeType;
  // disabled?: boolean;
  // loading?: boolean | { delay?: number };
  // prefixCls?: string;
  // className?: string;
  // rootClassName?: string;
  // ghost?: boolean;
  // danger?: boolean;
  // block?: boolean;
  children?: React.ReactNode
  [key: `data-${string}`]: string
}
