import { Space } from '@components/Space'
import { Tag } from '../Tag'
import { Title } from '@components/Typography'

export const TagDemo = () => {
  return (
    <>
      <Title>Type</Title>
      <Space size={24}>
        <Tag>New Primary</Tag>
        <Tag type="secondary">New Secondary</Tag>
        <Tag type="success">New Success</Tag>
        <Tag type="warning">New Warning</Tag>
        <Tag type="danger">New Danger</Tag>
        <Tag type="info">New Info</Tag>
      </Space>

      <br />

      <Title>Shape</Title>
      <Space size={24}>
        <Tag shape="square">default shape</Tag>
        <Tag shape="circle">circle</Tag>
        <Tag shape="rounded">rounded</Tag>
      </Space>

      <br />
      <Title>Size</Title>
      <Space direction="vertical" size={24}>
        <Tag size="small">small</Tag>
        <Tag size="middle">middle</Tag>
        <Tag size="large">large</Tag>
      </Space>

      <br />
      <Title>Gradient</Title>
      <Space direction="vertical" size={24}>
        <Tag gradient="aquamarine">aqua</Tag>
        <Tag gradient="blue">blue</Tag>
        <Tag gradient="orange">orange</Tag>
        <Tag gradient="red">red</Tag>
      </Space>
      <br />

      <Title>icon</Title>
      <Space direction="vertical" size={24}>
        <Tag gradient="orange" text="text" />
        <Tag
          text="hello"
          beforeIcon={<span>beforeIcon</span>}
          afterIcon={<span>AfterIcon</span>}
        />
      </Space>
    </>
  )
}
