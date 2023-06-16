import classNames from 'classnames'
import { TagProps } from './type'

export const Tag: React.FC<TagProps> = props => {
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
      [`kylin-tag-gradient-${gradient}`]: gradient,
      [`kylin-tag-type-${type}`]: type,
      [`kylin-tag-shape-${shape}`]: shape,
      [`kylin-tag-size-${size}`]: size,
    },
    'font-bold',
    'whitespace-nowrap',
    className
  )

  if (text && children) {
    console.warn(`Tag组件的text和children属性不能同时存在`)
  }

  const renderToChildren = text ? text : children

  return (
    <span className={classes} {...rest}>
      {renderToChildren}
    </span>
  )
}
