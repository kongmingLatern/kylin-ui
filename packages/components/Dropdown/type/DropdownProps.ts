import { MenuType } from './MenuType'
export interface DropdownProps {
  className?: string
  children?: React.ReactNode
  menu?: Partial<
    Record<'items', MenuType[]> &
      Record<'onClick', (key: string | number) => void>
  >
  offset?: string[] | number[]
  position?:
    | 'bottom-left'
    | 'bottom-right'
    | 'top-left'
    | 'top-right'
}
