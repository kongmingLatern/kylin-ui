import React, { useState } from 'react'
import { DropdownProps } from './type'
import classNames from 'classnames'
import { MenuContainer, MenuItemContainer } from './styled'

const InternalDropdown: React.ForwardRefRenderFunction<
  HTMLDivElement,
  DropdownProps
> = props => {
  const { menu = [], children } = props

  const [mouseOver, setMouseOver] = useState(false)

  const child = React.Children.only(
    children
  ) as React.ReactElement<any>

  const DropdownTrigger = ({ children }) =>
    React.cloneElement(
      child,
      {
        className: classNames(child.props.className),
        style: { position: 'relative' },
        onMouseOver: () => {
          setMouseOver(true)
        },
        onMouseLeave: () => {
          setMouseOver(false)
        },
      },
      [child.props.children, children]
    )

  return (
    <DropdownTrigger>
      {
        <MenuContainer mouseOver={mouseOver}>
          {menu.map(i => (
            <MenuItemContainer
              key={i.key}
              style={{
                background: '#f4f4f4',
                zIndex: 10,
              }}
            >
              {i?.icon}
              <span>{i.label}</span>
            </MenuItemContainer>
          ))}
        </MenuContainer>
      }
    </DropdownTrigger>
  )
}

const Dropdown = React.forwardRef(InternalDropdown)

if (process.env.NODE_ENV !== 'production') {
  Dropdown.displayName = 'Dropdown'
}
export { Dropdown }
