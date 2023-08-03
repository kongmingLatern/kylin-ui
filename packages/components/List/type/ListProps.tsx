export interface ListProps {
  className?: string
  dataSource?: any[]
  children?: React.ReactNode
}

export interface ItemProps {
  className?: string
  children?: React.ReactNode
  avatar?: React.ReactNode
  extra?: React.ReactNode
  actions?: React.ReactNode[]
  title?: React.ReactNode | string
  description?: React.ReactNode | string
}
