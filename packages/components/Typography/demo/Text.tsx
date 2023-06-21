import { Text } from '../Text'
import { Title } from '../Title'

export const TextDemo = () => {
  return (
    <>
      <Title>Code</Title>
      <Text code>This is Code Title</Text>

      <Title>DeleteLine</Title>
      <Text deleteLine>This is DeleteLine Text</Text>

      <Title>Underline</Title>
      <Text underline>This is Underline Text</Text>

      <Title>Italic</Title>
      <Text italic>This is Italic Text</Text>

      <Title>Strong</Title>
      <Text strong>This is Strong Text</Text>

      <Title>Mark</Title>
      <Text mark>This is Mark Text</Text>

      <Title>Ellipsis</Title>
      <Text ellipsis>This is Ellipsis Text</Text>

      <Title>disabled</Title>
      <Text disabled>This is Disabled Text</Text>

      <Title>copyable</Title>
      <Text copyable onClick={e => console.log(e)}>
        This is Copy Text
      </Text>
      <br />
    </>
  )
}
