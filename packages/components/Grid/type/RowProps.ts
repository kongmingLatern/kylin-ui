export type RowProps = {
  gutter?: number | [number, number]
  wrap?: 'nowrap' | 'reverse' | 'wrap'
  justify?:
    | 'start'
    | 'end'
    | 'center'
    | 'space-around'
    | 'space-between'
  align?: 'start' | 'center' | 'end'
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}
