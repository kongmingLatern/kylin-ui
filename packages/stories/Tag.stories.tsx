import type { Meta, StoryObj } from '@storybook/react'
import { Tag } from '@components/Tag'
import { Space } from '@components/Space'

const meta = {
  title: 'UI Component/Tag',
  component: Tag,
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>

type Story = StoryObj<typeof meta>

export const type: Story = {
  render: args => (
    <Space>
      <Tag type="primary">primary</Tag>
      <Tag type="secondary">secondary</Tag>
      <Tag type="success">success</Tag>
      <Tag type="warning">warning</Tag>
      <Tag type="info">info</Tag>
      <Tag type="danger">danger</Tag>
    </Space>
  ),
}

export default meta
