import classNames from 'classnames'
import React from 'react'

interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  dashed?: boolean
  orientation?: 'left' | 'right' | 'center'
  orientationMargin?: string | number
  plain?: boolean
  style?: React.CSSProperties
  type?: 'horizontal' | 'vertical'
}

const Divider = React.forwardRef<HTMLElement, DividerProps>(
  (props, ref) => {
    const {
      type = 'horizontal',
      orientation = 'center',
      orientationMargin,
      dashed,
      plain,
      children,
      ...rest
    } = props

    const hasChildren = !!children
    const hasCustomMarginLeft =
      orientation === 'left' && orientationMargin != null
    const hasCustomMarginRight =
      orientation === 'right' && orientationMargin != null

    const classes = classNames({
      [`kylin-divider`]: true,
      [`kylin-divider-with-text-${orientation}`]:
        hasChildren,
      [`kylin-divider-dashed`]: !!dashed,
      [`kylin-divider-plain`]: !!plain,
      [`kylin-divider-no-default-orientation-margin-left`]:
        hasCustomMarginLeft,
      [`kylin-divider-no-default-orientation-margin-right`]:
        hasCustomMarginRight,
      [`kylin-divider-${type}`]: !!type,
    })

    const innerStyle: React.CSSProperties = {
      ...(hasCustomMarginLeft && {
        marginLeft: orientationMargin,
      }),
      ...(hasCustomMarginRight && {
        marginRight: orientationMargin,
      }),
    }

    return (
      <div className={classes} {...rest} role="separator">
        {children && type !== 'vertical' && (
          <span
            className={`kylin-divider-inner-text`}
            style={innerStyle}
          >
            {children}
          </span>
        )}
      </div>
    )
  }
)

export { Divider }
