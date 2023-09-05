import { ButtonProps } from '@components/Button'

export interface MenuType {
  key: string | number
  type?:
    | ButtonProps['type']
    | 'disabled'
    | 'warning'
    | 'danger'
  label: React.ReactNode
  icon?: React.ReactNode
  disabled?: boolean
  options?: Record<string, any>
}
