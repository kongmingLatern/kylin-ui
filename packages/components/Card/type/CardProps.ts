interface CoverProps {
  alt?: string
  position?: 'top' | 'bottom' | 'left' | 'right'
  size?: 'small' | 'medium' | 'large'
  shape?: 'circle' | 'square'
  element: React.ReactElement
}

export interface CardProps {
  Cover?: CoverProps
  className?: string
  children?: React.ReactNode
  shape?: 'circle' | 'square'
  title?: string
  Header?: React.ReactElement
  Content?: React.ReactElement
  Footer?: React.ReactElement
}
