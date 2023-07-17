import type { Meta, StoryObj } from '@storybook/react'
import { Tag } from '@components/Tag'
import { Space } from '@components/Space'
import { Loader, Radio } from '@packages/icon'

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
export const Shape: Story = {
  render: args => (
    <Space>
      <Tag shape="square">default shape</Tag>
      <Tag shape="circle">circle</Tag>
      <Tag shape="rounded">rounded</Tag>
    </Space>
  ),
}

export const Size: Story = {
  render: args => (
    <Space direction="vertical">
      <Tag size="small">small</Tag>
      <Tag size="middle">middle</Tag>
      <Tag size="large">large</Tag>
    </Space>
  ),
}

export const Gradient: Story = {
  render: args => (
    <Space>
      <Tag gradient="aquamarine">aqua</Tag>
      <Tag gradient="blue">blue</Tag>
      <Tag gradient="orange">orange</Tag>
      <Tag gradient="red">red</Tag>
    </Space>
  ),
}

export const Text: Story = {
  render: args => <Tag text="text" />,
}

export const Icon: Story = {
  render: args => (
    <>
      <Tag
        text="hello"
        beforeIcon={<Loader width={20} height={20} />}
        afterIcon={<Radio width={20} height={20} />}
      />
    </>
  ),
}

export default meta
