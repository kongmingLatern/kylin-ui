import React from 'react'
import { DropdownProps, MenuType } from './type'
import classNames from 'classnames'
import { MenuContainer, MenuItemContainer } from './styled'
import './css/index.scss'
import { Space } from '../Space'

const InternalDropdown: React.ForwardRefRenderFunction<
  HTMLDivElement,
  DropdownProps
> = props => {
  const {
    menu = { items: [] },
    offset = ['0%', '110%'],
    position,
    children,
  } = props

  const child = React.Children.only(
    children
  ) as React.ReactElement<any>

  const DropdownTrigger = ({ children }) =>
    React.cloneElement(
      child,
      {
        className: classNames(
          child.props.className,
          'kylin-dropdown'
        ),
        style: { position: 'relative' },
        ...child.props,
      },
      [child.props.children, children]
    )

  return (
    <DropdownTrigger>
      <MenuContainer
        className="kylin-dropdown-menu"
        position={position}
        offset={offset}
      >
        {(menu.items as MenuType[]).map((i: MenuType) => (
          <MenuItemContainer
            type={i.type}
            key={i.key}
            disabled={i.disabled}
            onClick={e => {
              e.preventDefault()
              e.stopPropagation()
              menu.onClick?.(i.key)
            }}
            {...i.options}
          >
            <Space size={2} align={'center'}>
              {i?.icon}
              <span>{i.label}</span>
            </Space>
          </MenuItemContainer>
        ))}
      </MenuContainer>
    </DropdownTrigger>
  )
}

const Dropdown = React.forwardRef(InternalDropdown)

if (process.env.NODE_ENV !== 'production') {
  Dropdown.displayName = 'Dropdown'
}
export { Dropdown }
