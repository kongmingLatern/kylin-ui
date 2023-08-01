export interface SpinProps {
  spinning?: boolean

  size?: 'small' | 'default' | 'large'

  tip?: string | React.ReactNode

  delay?: number

  wrapperClassName?: string

  indicator?: React.ReactNode

  className?: string

  children?: React.ReactNode

  style?: React.CSSProperties
}
