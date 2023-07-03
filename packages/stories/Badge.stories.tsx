import { Avatar } from '@components/Avatar'
import { Badge } from '@components/Badge'
import { Space } from '@components/Space'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'UI Component/Badge',
  component: Badge,
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => <Badge>123</Badge>,
}

export const Type: Story = {
  render: args => (
    <Space>
      <Badge type="secondary">Secondary</Badge>
      <Badge type="success">Success</Badge>
      <Badge type="warning">Warning</Badge>
      <Badge type="danger">Danger</Badge>
      <Badge type="info">Info</Badge>
    </Space>
  ),
}

export const Shape: Story = {
  render: args => (
    <Space>
      <Badge type="success" shape="square">
        11
      </Badge>
      <br />
      <Badge type="info" shape="circle">
        1
      </Badge>
      <br />
      <Badge type="warning" shape="rounded">
        99+
      </Badge>
    </Space>
  ),
}

export const Size: Story = {
  render: args => (
    <Space>
      <Badge size="small">small</Badge>
      <Badge size={24}>24</Badge>
      <Badge size="middle">middle</Badge>
      <Badge size="large">large</Badge>
    </Space>
  ),
}

export const Gradient: Story = {
  render: args => (
    <Space>
      <Badge gradient="aquamarine">aqua</Badge>
      <Badge gradient="blue">blue</Badge>
      <Badge gradient="orange">orange</Badge>
      <Badge gradient="red">red</Badge>
    </Space>
  ),
}

export const Text: Story = {
  render: args => (
    <>
      <Badge
        text="1"
        size="small"
        shape="circle"
        offset={['-.8rem', '-.6rem']}
        bgColor="red"
      >
        <Avatar
          src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
          shape="circle"
          size={'large'}
        />
      </Badge>

      <Badge
        text="999+"
        size="small"
        shape="square"
        offset={['-.8rem', '-1.5rem']}
        bgColor="red"
      >
        <Avatar
          src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
          shape="circle"
          size={'small'}
        />
      </Badge>

      <Badge
        text="999+"
        shape="rounded"
        offset={['-.8rem', '-1rem']}
        bgColor="blue"
      >
        <Avatar
          src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
          shape="circle"
          size={'large'}
        />
      </Badge>
    </>
  ),
}

export default meta
