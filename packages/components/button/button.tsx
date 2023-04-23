import React, { useContext } from 'react'
import classNames from 'classnames'
import { ButtonProps, CompoundedComponent } from './type'
import { ThemeContext } from '../theme-provider/theme-provider'

const InternalButton: React.ForwardRefRenderFunction<
	HTMLButtonElement,
	ButtonProps
> = (props, ref) => {
	/**============================= 设置 props ============================= */
	const {
		type = 'default',
		className,
		children,
		htmlType = 'button',
		...rest
	} = props

	/**============================= 获取 当前主题色  ============================= */
	const { haneleThemeChange } = useContext(ThemeContext)
	/**============================= 设置 className ============================= */
	// console.log('theme', haneleThemeChange)

	const classes = classNames(
		// TODO: 判断 type 是否在预期之内
		// 允许用户使用 ThemeProvider 集中处理样式
		{
			[`kylin-btn-${type}`]: type,
		},
		// `bg-${type}`,
		// `text-${type}`,
		className
		// style
	)
	// Rendering the button node
	let buttonNode = (
		<button
			type={htmlType}
			className={classes}
			{...rest}
			onClick={() => haneleThemeChange('dark')}
			// onClick={haneleThemeChange('dark')}
		>
			{children}
		</button>
	)
	return buttonNode
}
/**============================= 设置 Button ============================= */
const Button = React.forwardRef<
	HTMLButtonElement | HTMLAnchorElement,
	ButtonProps
>(InternalButton) as CompoundedComponent

Button.__KYLIN_BUTTON = true

export default Button
