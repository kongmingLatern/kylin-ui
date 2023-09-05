import { MenuType } from './MenuType'
export interface DropdownProps {
  className?: string
  children?: React.ReactNode
  menu?: MenuType[]
  offset?: string[] | number[]
}
