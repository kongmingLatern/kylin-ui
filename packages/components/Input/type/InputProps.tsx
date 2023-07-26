export interface InputProps {
  className?: string
  width?: number | string
  height?: number | string
  size?: 'small' | 'middle' | 'large' | number
  shape?: 'rounded' | 'square'
  placeholder?: string
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  value?: any
  children?: React.ReactNode
  onChange?: (value: any) => void
}
