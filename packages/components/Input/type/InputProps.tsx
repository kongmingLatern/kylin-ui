export interface InputProps {
  className?: string
  width?: number | string
  height?: number | string
  size?: SizeType
  shape?: 'rounded' | 'square'
  placeholder?: string
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  children?: React.ReactNode
  value?: any
  limitCount?: number
  enterSearch?: boolean
  showCount?: boolean
  onChange?: (value: any) => void
}
