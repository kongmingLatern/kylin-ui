import React from 'react'
import { PasswordProps } from './type'
import { Input } from './Input'
import { Lock, Unlock } from '@packages/icon'

const InternalPassword: React.ForwardRefRenderFunction<
  HTMLInputElement,
  PasswordProps
> = (props, ref) => {
  const {
    showPassword = false,
    onShowPassword,
    suffix = (visible, onClick) =>
      visible ? (
        <Unlock width={20} height={20} onClick={onClick} />
      ) : (
        <Lock width={20} height={20} onClick={onClick} />
      ),
  } = props
  const [visible, setVisible] = React.useState(showPassword)

  const handleShowPassword = () => {
    if (onShowPassword) {
      onShowPassword(visible, setVisible)
      return
    }
    setVisible(!visible)
  }

  return (
    <Input
      ref={ref}
      type={visible ? 'text' : 'password'}
      suffix={
        typeof suffix === 'function' &&
        suffix(visible, handleShowPassword)
      }
    />
  )
}

const Password = React.forwardRef(InternalPassword)

if (process.env.NODE_ENV !== 'production') {
  Password.displayName = 'Password'
}
export { Password }
