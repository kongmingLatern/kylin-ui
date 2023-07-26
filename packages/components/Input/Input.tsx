import React from 'react'
import { InputProps } from './type'
import { InputContainer } from './styled'

const InternalInput: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = (props, ref) => {
  const { className, placeholder, onChange, ...rest } =
    props

  const handleChange = e => {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  return (
    <InputContainer
      ref={ref}
      placeholder={placeholder}
      className={className}
      onChange={handleChange}
      {...rest}
    />
  )
}

const Input = React.forwardRef(InternalInput)

if (process.env.NODE_ENV !== 'production') {
  Input.displayName = 'Input'
}
export { Input }
