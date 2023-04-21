import React from 'react'
import classNames from 'classnames'
import { ButtonProps, CompoundedComponent } from './type'

const InternalButton: React.ForwardRefRenderFunction<
	HTMLButtonElement,
	ButtonProps
> = (props, ref) => {
	const {
		type,
		className,
		children,
		htmlType = 'button',
		...rest
	} = props

	// 通过 rest 获取key => value
	// const getStyle = () => {
	//   const style: string[] = []
	//   Object.keys(rest).forEach(key => {
	//     style.push(`${key}-${rest[key]}`)
	//   })
	//   return style
	// }
	// console.log(getStyle());

	const classes = classNames(
		'btn',
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
