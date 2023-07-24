interface CoverProps {
  alt?: string
  position?: 'top' | 'bottom' | 'left' | 'right'
  size?: 'small' | 'medium' | 'large'
  shape?: 'circle' | 'square' | 'round'
  element: React.ReactElement
}

export interface CardProps {
  Cover?: CoverProps
  className?: string
  children?: React.ReactNode
  width?: string | number
  height?: string | number
  style?: React.CSSProperties
  shape?: 'circle' | 'square' | 'round'
  title?: string
  Header?: React.ReactElement
  Title?: React.ReactElement
  Content?: React.ReactElement
  Footer?: React.ReactElement
}
