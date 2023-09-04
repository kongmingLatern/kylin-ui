import React from 'react'
import { DropdownProps } from './type'
import classNames from 'classnames'

const InternalDropdown: React.ForwardRefRenderFunction<
  HTMLDivElement,
  DropdownProps
> = props => {
  const { menu = [], children } = props

  const child = React.Children.only(
    children
  ) as React.ReactElement<any>
  console.log('-----child', child)

  const DropdownTrigger = ({ children }) =>
    React.cloneElement(
      child,
      {
        className: classNames(
          'relative',
          child.props.className
        ),
      },
      [child.props.children, children]
    )

  return (
    <DropdownTrigger>
      {menu.map(i => (
        <div key={i.key}>
          {i?.icon}
          <span>{i.label}</span>
        </div>
      ))}
    </DropdownTrigger>
  )
}

const Dropdown = React.forwardRef(InternalDropdown)

if (process.env.NODE_ENV !== 'production') {
  Dropdown.displayName = 'Dropdown'
}
export { Dropdown }
