export interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  dashed?: boolean
  orientation?: 'left' | 'right' | 'center'
  orientationMargin?: string | number
  plain?: boolean
  style?: React.CSSProperties
  type?: 'horizontal' | 'vertical'
}
