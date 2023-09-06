import type { Meta, StoryObj } from '@storybook/react'
import { Space } from '@components/Space'
import { Button } from '@components/Button'
import { Divider } from '@components/Divider'

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

export const Justify: Story = {
  render: args => (
    <Space direction="vertical">
      <Space justify="start">
        <Button>Start</Button>
        <Button>Start</Button>
        <Button>Start</Button>
        <Button>Start</Button>
      </Space>
      <Space justify="center">
        <Button>Center</Button>
        <Button>Center</Button>
        <Button>Center</Button>
        <Button>Center</Button>
      </Space>
      <Space justify="end">
        <Button>End</Button>
        <Button>End</Button>
        <Button>End</Button>
        <Button>End</Button>
      </Space>
    </Space>
  ),
}

export const Align: Story = {
  render: args => (
    <Space direction="vertical">
      <Space align="start">
        <Button className="h-30">Start</Button>
        <Button>Start</Button>
        <Button>Start</Button>
        <Button>Start</Button>
      </Space>
      <Space align="baseline">
        <Button className="h-30">baseline</Button>
        <Button>baseline</Button>
        <Button>baseline</Button>
        <Button>baseline</Button>
      </Space>
      <Space align="center">
        <Button className="h-30">Center</Button>
        <Button>Center</Button>
        <Button>Center</Button>
        <Button>Center</Button>
      </Space>
      <Space align="end">
        <Button className="h-30">End</Button>
        <Button>End</Button>
        <Button>End</Button>
        <Button>End</Button>
      </Space>
    </Space>
  ),
}

export const Split: Story = {
  render: args => (
    <>
      <Space split={<Divider type="vertical" />}>
        <Button>分隔符</Button>
        <Button>分隔符</Button>
        <Button>分隔符</Button>
        <Button>分隔符</Button>
      </Space>

      <Divider />

      <Space
        direction="vertical"
        split={
          <Divider
            style={{ width: '100%', color: '#ccc' }}
          ></Divider>
        }
      >
        <Button>分隔符</Button>
        <Button>分隔符</Button>
        <Button>分隔符</Button>
        <Button>分隔符</Button>
      </Space>
    </>
  ),
}
export const Wrap: Story = {
  render: args => (
    <Space wrap>
      <Button>Wrap</Button>
      <Button>Wrap</Button>
      <Button>Wrap</Button>
      <Button>Wrap</Button>
      <Button>Wrap</Button>
      <Button>Wrap</Button>
      <Button>Wrap</Button>
      <Button>Wrap</Button>
      <Button>Wrap</Button>
      <Button>Wrap</Button>
      <Button>Wrap</Button>
      <Button>Wrap</Button>
    </Space>
  ),
}
export default meta
