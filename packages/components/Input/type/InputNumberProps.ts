export interface InputNumberProps {
  className?: string
  width?: number | string
  height?: number | string
  disabled?: boolean
  size?: SizeType
  shape?: 'rounded' | 'square'
  placeholder?: string
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  defaultValue?: number
  max?: number
  min?: number
  value?: number
  step?: number | string
  onChange?: (value: any) => void
  onPressEnter?: (e: Event, value?: any) => void
}
