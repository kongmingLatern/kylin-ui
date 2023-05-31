import { Title } from './Title'
import { TypographyTextProps } from './type'
import { NodeType } from './type/NodeType'

const Text: React.FC<TypographyTextProps> = props => {
  return <Title {...props} _type={NodeType.TEXT} />
}

export { Text }
