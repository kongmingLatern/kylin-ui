import { createContext } from 'react'
import { ButtonGroupProps, ButtonSizeType } from './type'

export const GroupSizeContext = createContext<
  ButtonSizeType | undefined
>(undefined)

const ButtonGroup: React.FC<ButtonGroupProps> = props => {
  const { children, size } = props
  return (
    <GroupSizeContext.Provider value={size}>
      <div className="kylin-btn-group">{children}</div>
    </GroupSizeContext.Provider>
  )
}

export { ButtonGroup }
