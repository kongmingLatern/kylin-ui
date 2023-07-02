export interface AvatarProps {
  src?: string
  alt?: string
  size?: number | 'small' | 'large' | 'middle'
  shape?: 'circle' | 'square'
  draggable?: boolean
  className?: string
  style?: React.CSSProperties
  icon?: React.ReactNode
  children?: React.ReactNode
}
