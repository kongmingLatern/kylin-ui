import { Title } from './Title'
import { TypographyType } from './type/BaseTypography'
import { NodeType } from './type/NodeType'

const Paragraph: React.FC<TypographyType> = props => {
  return <Title {...props} _type={NodeType.PARAGRAPH} />
}

export { Paragraph }
