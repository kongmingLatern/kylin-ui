import { Space } from '@components/Space'
import { Badge } from '../Badge'

export const BadgeDemo = () => {
  return (
    <>
      <Space>
        <Badge>New Primary</Badge>
        <Badge type="secondary">New Secondary</Badge>
        <Badge type="success">New Success</Badge>
        <Badge type="warning">New Warning</Badge>
        <Badge type="danger">New Danger</Badge>
        <Badge type="info">New Info</Badge>
      </Space>

      <Space>
        <Badge shape="square">default shape</Badge>
        <Badge shape="circle">circle</Badge>
        <Badge shape="rounded">rounded</Badge>
      </Space>

      <Space direction="vertical">
        <Badge size="small">small</Badge>
        <Badge size="middle">middle</Badge>
        <Badge size="large">large</Badge>
      </Space>

      <Space direction="vertical">
        <Badge gradient="aquamarine">aqua</Badge>
        <Badge gradient="blue">blue</Badge>
        <Badge gradient="orange">orange</Badge>
        <Badge gradient="red">red</Badge>
      </Space>

      <Badge gradient="orange" text="text" />
    </>
  )
}
