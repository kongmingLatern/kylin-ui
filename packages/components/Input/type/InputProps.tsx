export interface InputProps {
  className?: string
  width?: number | string
  height?: number | string
  size?: SizeType
  shape?: 'rounded' | 'square'
  placeholder?: string
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  enterSearch?: boolean
  value?: any
  children?: React.ReactNode
  onChange?: (value: any) => void
}
