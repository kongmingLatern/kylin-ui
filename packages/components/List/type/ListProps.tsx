export interface ListProps {
  className?: string
  dataSource?: ItemProps[]
  children?: React.ReactNode
}

export interface ItemProps {
  className?: string
  children?: React.ReactNode
  avatar?: React.ReactNode | string
  extra?: React.ReactNode
  actions?: React.ReactNode[]
  title?: React.ReactNode | string
  description?: React.ReactNode | string
  footerStyle?: React.CSSProperties
}
