const size = ['small', 'middle', 'large'] as const
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

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  type?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
  size?: SizeType | number
  shape?: ShapeType
  offset?: [number, number] | [string, string]
  background?: string
  style?: React.CSSProperties
  text?: string | React.ReactNode
  gradient?: GradientType
}
