export type SpaceSize = number

export interface SpaceProps
  extends React.HTMLAttributes<HTMLDivElement> {
  size?:
    | SpaceSize
    | [SpaceSize, SpaceSize]
    | 'small'
    | 'middle'
    | 'large'
  direction?: 'horizontal' | 'vertical'
  justify?:
    | 'start'
    | 'end'
    | 'center'
    | 'space-between'
    | 'space-around'
  align?: 'start' | 'end' | 'center' | 'baseline'
  className?: string
  style?: React.CSSProperties
  split?: React.ReactNode
  wrap?: boolean
}
