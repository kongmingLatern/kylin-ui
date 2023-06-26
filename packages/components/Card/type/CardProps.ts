interface CoverProps {
  position?: 'top' | 'bottom' | 'left' | 'right'
  size?: 'small' | 'medium' | 'large'
  shape?: 'circle' | 'square'
  element: React.ReactElement
  description?: string
}

export interface CardProps {
  Cover?: CoverProps
  className?: string
  children?: React.ReactNode
}
