import { Title } from './Title'
import { TypographyTextProps } from './type'

const Text: React.FC<TypographyTextProps> = props => {
  return <Title {...props} _type="TEXT" />
}

export { Text }
