import type { Meta, StoryObj } from '@storybook/react'
import { Space } from '@components/Space'
import { Button } from '@components/Button'

const meta = {
  title: 'UI Component/Space',
  component: Space,
  tags: ['autodocs'],
} satisfies Meta<typeof Space>

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: args => (
    <Space>
      <Button>123</Button>
      <Button>123</Button>
      <Button>123</Button>
      <Button>123</Button>
    </Space>
  ),
}

export const Direction: Story = {
  render: args => (
    <Space direction="vertical">
      <Button>123</Button>
      <Button>123</Button>
      <Button>123</Button>
      <Button>123</Button>
    </Space>
  ),
}
export const Size: Story = {
  render: args => (
    <Space size={'small'}>
      <Space direction="vertical" size={'small'}>
        <Button>Small</Button>
        <Button>Small</Button>
        <Button>Small</Button>
        <Button>Small</Button>
      </Space>
      <Space direction="vertical" size={'middle'}>
        <Button>Middle</Button>
        <Button>Middle</Button>
        <Button>Middle</Button>
        <Button>Middle</Button>
      </Space>
      <Space direction="vertical" size={'large'}>
        <Button>Large</Button>
        <Button>Large</Button>
        <Button>Large</Button>
        <Button>Large</Button>
      </Space>
      <Space direction="vertical" size={32}>
        <Button>Customer Size 32</Button>
        <Button>Customer Size 32</Button>
        <Button>Customer Size 32</Button>
        <Button>Customer Size 32</Button>
      </Space>
    </Space>
  ),
}
export default meta
