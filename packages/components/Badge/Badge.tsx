import classNames from 'classnames'
import { BadgeProps } from './type'

export const Badge: React.FC<BadgeProps> = props => {
  const {
    type = 'primary',
    size = 'middle',
    shape = 'square',
    gradient,
    text,
    children,
    className,
    ...rest
  } = props

  const classes = classNames(
    {
      [`kylin-badge-gradient-${gradient}`]: gradient,
      [`kylin-badge-type-${type}`]: type,
      [`kylin-badge-shape-${shape}`]: shape,
      [`kylin-badge-size-${size}`]: size,
    },
    'font-bold',
    'whitespace-nowrap',
    className
  )

  if (text && children) {
    console.warn(
      `Badge组件的text和children属性不能同时存在`
    )
  }

  const renderToChildren = text ? text : children

  return (
    <span className={classes} {...rest}>
      {renderToChildren}
    </span>
  )
}
