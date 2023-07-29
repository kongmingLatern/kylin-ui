export interface InputNumberProps {
  className?: string
  label?: string
  width?: number | string
  height?: number | string
  size?: SizeType
  shape?: 'rounded' | 'square'
  placeholder?: string
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  value?: number
  step?: number | string
  onChange?: (value: any) => void
  onPressEnter?: (e: Event, value?: any) => void
}
