import React from 'react'
import classNames from 'classnames'
import { ButtonProps, CompoundedComponent } from './type';


const InternalButton: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (props, ref) => {
  const { type, children, htmlType } = props

  const classes = classNames('btn', {
    [`kylin-btn-${type}`]: type,
  })


  let buttonNode = (
    <button
      type={htmlType}
      className={classes}
    >
      {children}
    </button>
  )

  return buttonNode
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  InternalButton
) as CompoundedComponent

Button.__KYLIN_BUTTON = true

export default Button