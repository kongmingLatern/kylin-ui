import React, { useRef, useState } from 'react'
import { InputNumberProps } from './type'
import {
  ArrowIcon,
  InputContainer,
  InputNumberComponent,
  Prefix,
  Suffix,
} from './styled'
import { omit } from '@packages/shared'
import { ArrowDown, ArrowUp } from '@packages/icon'
import classNames from 'classnames'

const InternalInputNumber: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputNumberProps
> = (props, ref) => {
  const {
    width,
    height = '30px',
    className,
    placeholder,
    shape = 'rounded',
    max,
    min,
    defaultValue = min || 0,
    value,
    step = 1,
    prefix,
    suffix,
    onChange,
    onPressEnter,
  } = props

  const [hover, setHover] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = e => {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  const handlePressEnter = e => {
    if (!onPressEnter) return
    if (e.keyCode === 13) {
      onPressEnter(e, e.target.value)
    }
  }

  const restProps = omit(props, [
    'prefix',
    'suffix',
    'onChange',
    'onPressEnter',
  ])

  return (
    <InputContainer
      className={classNames(className, 'pr-0', 'py-0')}
      tabIndex={1}
      shape={shape}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {prefix && <Prefix>{prefix}</Prefix>}
      <InputNumberComponent
        type={'number'}
        ref={inputRef}
        className={className}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        onChange={handleChange}
        onKeyDown={handlePressEnter}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        {...restProps}
      />
      <ArrowIcon width={width} height={height}>
        {hover && (
          <>
            <ArrowUp
              id={'arrow-up'}
              width={20}
              color={'#ccc'}
              className={
                'hover:bg-[#40a9ff] hover:color-white'
              }
              onClick={handleArrowClick(
                'add',
                Number(step)
              )}
              style={{
                height: '50%',
                borderBottom: '1px solid #d9d9d9',
              }}
            />
            <ArrowDown
              width={20}
              color={'#ccc'}
              className={
                'hover:bg-[#40a9ff] hover:color-white'
              }
              onClick={handleArrowClick(
                'sub',
                Number(step)
              )}
              style={{
                height: '50%',
              }}
            />
          </>
        )}
      </ArrowIcon>
      {suffix && <Suffix>{suffix}</Suffix>}
    </InputContainer>
  )

  function handleArrowClick(
    type: 'add' | 'sub',
    step
  ): React.MouseEventHandler<SVGSVGElement> | undefined {
    return () => {
      if (inputRef?.current && inputRef.current.value) {
        const result = Number(inputRef.current.value)
        switch (type) {
          case 'add':
            if (max && result + step > max) return
            inputRef.current.value = String(result + step)
            break
          case 'sub':
            if (min && result - step < min) return
            inputRef.current.value = String(result - step)
            break
        }
      }
    }
  }
}

const InputNumber = React.forwardRef(InternalInputNumber)

if (process.env.NODE_ENV !== 'production') {
  InputNumber.displayName = 'InputNumber'
}
export { InputNumber }
