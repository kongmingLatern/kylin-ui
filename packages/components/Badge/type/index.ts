const size = ['large', 'middle', 'small'] as const
export type SizeType = (typeof size)[number]

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  type?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
  size?: SizeType
  shape?: 'circle' | 'rounded' | 'square'
  text?: string | React.ReactNode
}
