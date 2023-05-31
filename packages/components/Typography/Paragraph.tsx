import { Title } from './Title'
import { NodeType } from './type/NodeType'
import { TypographyParagraphProps } from './type/TypographyParagraphProps'

const Paragraph: React.FC<
  TypographyParagraphProps
> = props => {
  return <Title {...props} _type={NodeType.PARAGRAPH} />
}

export { Paragraph }
