import { Title } from './Title'
import { TypographyTextProps } from './type'
import { TypographyType } from './type/BaseTypography'
import { NodeType } from './type/NodeType'

const Text: React.FC<TypographyType> = props => {
  return <Title {...props} _type={NodeType.TEXT} />
}

export { Text }
