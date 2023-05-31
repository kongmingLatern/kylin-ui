import { Title } from './Title'
import { TypographyParagraphProps } from './type/TypographyParagraphProps'

const Paragraph: React.FC<
  TypographyParagraphProps
> = props => {
  return <Title {...props} _type="PARAGRAPH" />
}

export { Paragraph }
