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

type range = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export interface BaseButtonProps {
  type?: ButtonType

  // NOTE: color Module
  color?: (typeof colors)[number]
  bg?: (typeof colors)[number]
  hover?: (typeof colors)[number]

  // NOTE: padding or margin Module
  p?: range
  pl?: range
  pr?: range
  m?: range
  ml?: range
  mr?: range

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
