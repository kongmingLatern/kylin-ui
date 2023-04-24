import React, { useContext } from 'react'
import classNames from 'classnames'
import { ButtonProps, CompoundedComponent } from './type'
import { ThemeContext } from '../theme-provider/theme-provider'
import { camel2kebab_string } from '../shared'

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

	/**============================= 获取 当前主题色 | 自定义主题  ============================= */
	const { th = {}, haneleThemeChange } =
		useContext(ThemeContext)

	// 设置主题
	Object.entries(th).forEach(([key, value]) => {
		document.documentElement.style.setProperty(
			`--${camel2kebab_string(key)}`,
			value
		)
	})
	/**============================= 设置 className ============================= */

	const classes = classNames(
		// TODO: 判断 type 是否在预期之内
		{
			[`kylin-btn-${type}`]: type,
		},
		className
	)
	let buttonNode = (
		<button
			type={htmlType}
			className={classes}
			{...rest}
			onClick={() => haneleThemeChange('dark')}
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
