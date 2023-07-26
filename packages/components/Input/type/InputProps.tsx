export interface InputProps {
  className?: string
  size?: 'small' | 'middle' | 'large' | number
  shape?: 'rounded' | 'square'
  placeholder?: string
  value?: any
  children?: React.ReactNode
  onChange?: (value: any) => void
}
