import { Title } from '../Title'

export const TitleDemo = () => {
  return (
    <>
      <Title>这是默认标题</Title>
      <Title level={1}>这是标题1</Title>
      <Title level={2}>这是标题2</Title>
      <Title level={3}>这是标题3</Title>
      <Title level={4}>这是标题4</Title>
      <Title level={5}>这是标题5</Title>
      <Title level={6}>这是标题6</Title>

      <Title>Code</Title>
      <Title code>This is Code Title</Title>
    </>
  )
}
