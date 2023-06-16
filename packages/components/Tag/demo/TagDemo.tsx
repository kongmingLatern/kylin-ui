import { Space } from '@components/Space'
import { Tag } from '../Tag'

export const TagDemo = () => {
  return (
    <>
      <Space>
        <Tag>New Primary</Tag>
        <Tag type="secondary">New Secondary</Tag>
        <Tag type="success">New Success</Tag>
        <Tag type="warning">New Warning</Tag>
        <Tag type="danger">New Danger</Tag>
        <Tag type="info">New Info</Tag>
      </Space>

      <Space>
        <Tag shape="square">default shape</Tag>
        <Tag shape="circle">circle</Tag>
        <Tag shape="rounded">rounded</Tag>
      </Space>

      <Space direction="vertical">
        <Tag size="small">small</Tag>
        <Tag size="middle">middle</Tag>
        <Tag size="large">large</Tag>
      </Space>

      <Space direction="vertical">
        <Tag gradient="aquamarine">aqua</Tag>
        <Tag gradient="blue">blue</Tag>
        <Tag gradient="orange">orange</Tag>
        <Tag gradient="red">red</Tag>
      </Space>

      <Tag gradient="orange" text="text" />
    </>
  )
}
