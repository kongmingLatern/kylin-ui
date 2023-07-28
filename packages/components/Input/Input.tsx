import React, { useState } from 'react'
import { InputProps } from './type'
import {
  InputComponent,
  InputContainer,
  CountContainer,
  RelativeContainer,
  Prefix,
  Suffix,
} from './styled'
import { Search } from '@packages/icon'
import { generateRandomStr, omit } from '@packages/shared'

const InternalInput: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = (props, ref) => {
  const {
    className,
    placeholder,
    shape = 'rounded',
    prefix,
    suffix = props?.enterSearch ? (
      <Search width={20} height={20} />
    ) : null,
    showCount = false,
    limitCount,
    label = generateRandomStr(5),
    onChange,
    onPressEnter,
  } = props

  const [count, setCount] = useState(0)

  const handleChange = e => {
    if (showCount) {
      setCount(e.target.value.length)
    }
    if (onChange) {
      onChange(e.target.value)
    }
  }

  const restProps = omit(props, [
    'enterSearch',
    'prefix',
    'suffix',
    'showCount',
    'onChange',
    'onPressEnter',
  ])

  return (
    <>
      <InputContainer
        className={className}
        tabIndex={1}
        shape={shape}
      >
        {prefix && <Prefix>{prefix}</Prefix>}
        <RelativeContainer width={props?.width}>
          <InputComponent
            id={label}
            ref={ref}
            placeholder={placeholder}
            onChange={handleChange}
            onKeyDown={e => {
              if (!onPressEnter) return
              if (e.keyCode === 13) {
                onPressEnter(e, e.target.value)
              }
            }}
            show={Number(showCount)}
            {...restProps}
          />
          {showCount && (
            <CountContainer htmlFor={label}>
              {count}/{limitCount ?? '∞'}
            </CountContainer>
          )}
        </RelativeContainer>
        {suffix && <Suffix>{suffix}</Suffix>}
      </InputContainer>
    </>
  )
}

const Input = React.forwardRef(InternalInput)

if (process.env.NODE_ENV !== 'production') {
  Input.displayName = 'Input'
}
export { Input }
