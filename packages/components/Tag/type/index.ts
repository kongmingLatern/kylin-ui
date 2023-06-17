const size = ['large', 'middle', 'small'] as const
type SizeType = (typeof size)[number]

const shape = ['circle', 'rounded', 'square'] as const
type ShapeType = (typeof shape)[number]

const gradient = [
  'aquamarine',
  'orange',
  'red',
  'blue',
] as const

type GradientType = (typeof gradient)[number]

export interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  type?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
  size?: SizeType
  shape?: ShapeType
  text?: string | React.ReactNode
  beforeIcon?: React.ReactNode
  afterIcon?: React.ReactNode
  gradient?: GradientType
}
