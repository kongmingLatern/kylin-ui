import React from 'react'
import { PasswordProps } from './type'
import { Input } from './Input'
import { Lock } from '@packages/icon'

const InternalPassword: React.ForwardRefRenderFunction<
  HTMLInputElement,
  PasswordProps
> = (props, ref) => {
  const { showPassword = false, onShowPassword } = props
  const [show, setShow] = React.useState(showPassword)
  const handleShowPassword = e => {
    if (onShowPassword) {
      onShowPassword(e)
    }
    setShow(!show)
  }
  return (
    <Input
      ref={ref}
      type={show ? 'text' : 'password'}
      suffix={
        <Lock
          width={20}
          height={20}
          onClick={handleShowPassword}
        />
      }
    />
  )
}

const Password = React.forwardRef(InternalPassword)

if (process.env.NODE_ENV !== 'production') {
  Password.displayName = 'Password'
}
export { Password }
