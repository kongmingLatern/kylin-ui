import React from 'react'
import classNames from 'classnames'
import { ButtonProps, CompoundedComponent } from './type'

const InternalButton: React.ForwardRefRenderFunction<
	HTMLButtonElement,
	ButtonProps
> = (props, ref) => {
	const {
		type = "default",
		className,
		children,
		htmlType = 'button',
		...rest
	} = props

	const classes = classNames(
		'btn',
		// TODO: 判断 type 是否在预期之内
		// type 为 true 时，添加 kylin-btn-type
		// type 为 false 时，不添加 kylin-btn-type
		{
			[`kylin-btn-${type}`]: type,
		},
		className
	)

	let buttonNode = (
		<button type={htmlType} className={classes} {...rest}>
			{children}
		</button>
	)

	return buttonNode
}

const Button = React.forwardRef<
	HTMLButtonElement | HTMLAnchorElement,
	ButtonProps
>(InternalButton) as CompoundedComponent

Button.__KYLIN_BUTTON = true

export default Button
