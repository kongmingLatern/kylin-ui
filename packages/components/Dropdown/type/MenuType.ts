import { ButtonProps } from '@components/Button'

export interface MenuType {
  key: string | number
  type?: ButtonProps['type']
  label: React.ReactNode
  icon?: React.ReactNode
  disabled?: boolean
}
