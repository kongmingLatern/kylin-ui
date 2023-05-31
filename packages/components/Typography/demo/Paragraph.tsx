import { Paragraph } from '../Paragraph'

export const ParagraphDemo = () => {
  return (
    <>
      <Paragraph>这是默认标题</Paragraph>

      <Paragraph code>Type</Paragraph>
      <Paragraph type="primary">Primary</Paragraph>
      <Paragraph type="secondary">Secondary</Paragraph>
      <Paragraph type="success">Success</Paragraph>
      <Paragraph type="warning">Warning</Paragraph>
      <Paragraph type="info">info</Paragraph>
      <Paragraph type="error">Error</Paragraph>

      <Paragraph>Code</Paragraph>
      <Paragraph code>This is Code Title</Paragraph>

      <Paragraph>DeleteLine</Paragraph>
      <Paragraph deleteLine>
        This is DeleteLine Text
      </Paragraph>

      <Paragraph>Underline</Paragraph>
      <Paragraph underline>
        This is Underline Text
      </Paragraph>

      <Paragraph>Italic</Paragraph>
      <Paragraph italic>This is Italic Text</Paragraph>

      <Paragraph>Strong</Paragraph>
      <Paragraph strong>This is Strong Text</Paragraph>

      <Paragraph>Mark</Paragraph>
      <Paragraph mark>This is Mark Text</Paragraph>

      <Paragraph>Ellipsis</Paragraph>
      <Paragraph ellipsis>This is Ellipsis Text</Paragraph>

      <Paragraph>disabled</Paragraph>
      <Paragraph disabled>This is Disabled Text</Paragraph>

      <Paragraph>copyable</Paragraph>
      <Paragraph copyable onClick={e => console.log(e)}>
        This is Copy Text
      </Paragraph>

      <Paragraph indent>This is an indent text</Paragraph>
    </>
  )
}
