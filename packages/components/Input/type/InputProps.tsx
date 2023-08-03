export interface InputProps {
  type?: 'text' | 'password' | 'number'
  className?: string
  label?: string
  width?: number | string
  height?: number | string
  size?: SizeType
  shape?: 'rounded' | 'square'
  disabled?: boolean
  placeholder?: string
  prefix?: React.ReactNode
  suffix?:
    | React.ReactNode
    | ((visible: boolean, fn?: any) => React.ReactNode)
  children?: React.ReactNode
  value?: any
  limitCount?: number
  enterSearch?: boolean
  showCount?: boolean
  onChange?: (value: any) => void
  onPressEnter?: (e: Event, value?: any) => void
}
