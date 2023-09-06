import { CommonThemeType } from '@components/helpers'

export interface MenuType {
  key: string | number
  type?: CommonThemeType
  label: React.ReactNode
  icon?: React.ReactNode
  disabled?: boolean
  options?: Record<string, any>
}
