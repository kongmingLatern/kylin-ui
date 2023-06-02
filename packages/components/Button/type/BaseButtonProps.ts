import {
  ButtonShapeType,
  ButtonSizeType,
  ButtonType,
} from './ButtonProps'

export interface BaseButtonProps {
  type?: ButtonType
  beforeIcon?: React.ReactNode
  afterIcon?: React.ReactNode
  shape?: ButtonShapeType
  size?: ButtonSizeType
  disabled?: boolean
  loading?: boolean | { delay?: number }
  ghost?: boolean
  block?: boolean
  children?: React.ReactNode
  [key: `data-${string}`]: string
}
