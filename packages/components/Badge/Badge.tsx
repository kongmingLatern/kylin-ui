import classNames from 'classnames'
import { BadgeProps } from './type'

export const Badge: React.FC<BadgeProps> = props => {
  const {
    type = 'primary',
    size = 'middle',
    text,
    children,
    className,
    ...rest
  } = props

  const classes = classNames(
    {
      [`kylin-badge-${type}`]: type,
      [`kylin-badge-${size}`]: size,
    },
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
