import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from '@components/Avatar'
import { Space } from '@components/Space'

const meta = {
  title: 'UI Component/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
  ),
}

export const Draggable: Story = {
  render: () => (
    <Avatar
      src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
      draggable
    />
  ),
}

export const Icon: Story = {
  render: () => (
    <Avatar
      shape="circle"
      icon={
        <img
          src={'packages/components/Avatar/demo/boy.jpg'}
          width={32}
        />
      }
    />
  ),
}

export const Size: Story = {
  render: () => (
    <Space>
      <Avatar
        src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
        size={'small'}
      />
      <Avatar
        src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
        size={'middle'}
      />
      <Avatar
        src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
        size={'large'}
      />
    </Space>
  ),
}

export const Shape: Story = {
  render: () => (
    <Space>
      <Avatar
        src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
        shape={'square'}
      />
      <Avatar
        src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
        shape={'circle'}
      />
    </Space>
  ),
}

export default meta
