import { createContext } from 'react'
import { ButtonGroupProps, ButtonSizeType } from './type'
import { ButtonGroupContainer } from './styled'

export const GroupSizeContext = createContext<
  ButtonSizeType | undefined
>(undefined)

const ButtonGroup: React.FC<ButtonGroupProps> = props => {
  const { children, size } = props

  // TODO: 需要对 size 进行限定，用户若传递一个不存在的 size，需给出警告

  return (
    <GroupSizeContext.Provider value={size}>
      <ButtonGroupContainer>
        {children}
      </ButtonGroupContainer>
    </GroupSizeContext.Provider>
  )
}

export { ButtonGroup }
