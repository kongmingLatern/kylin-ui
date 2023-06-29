import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Button } from '@components/Button'
import 'uno.css'
import '../../dist/index.css'
import { Space } from '@components/Space'

const meta = {
  title: 'UI Component/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  } as any,
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof meta>

// ***************** type *******************
export const Type: Story = {
  render: () => (
    <Space>
      <Button type="default">Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="secondary">Secondary</Button>
      <Button type="success">Success</Button>
      <Button type="info">Warning</Button>
    </Space>
  ),
}
// ***************** block *******************
export const Block: Story = {
  args: {
    block: true,
  },
  render: args => <Button {...args}>Block</Button>,
}

// ***************** loading *******************
export const Loading: Story = {
  args: {
    loading: true,
  },
  render: args => <Button {...args}>Loading</Button>,
}

// ***************** delay loading *******************
export const DelayLoading: Story = {
  args: {
    loading: {
      delay: 2000,
    },
  },
  render: args => {
    const [loading, setLoading] = useState(args.loading)
    return (
      <Space>
        <Button loading={loading}>
          {(loading as Record<'delay', number>).delay > 0
            ? 'After 2s to load'
            : 'Well Job!'}
        </Button>
        <Button onClick={() => setLoading({ delay: 0 })}>
          Loading finishing
        </Button>
        <Button onClick={() => setLoading({ delay: 2000 })}>
          Again
        </Button>
      </Space>
    )
  },
}

// ***************** beforeIcon *******************
export const BeforeIcon: Story = {
  args: {
    beforeIcon: <span>👈</span>,
  },
  render: args => <Button {...args}>BeforeIcon</Button>,
}

// ***************** afterIcon *******************
export const AfterIcon: Story = {
  args: {
    afterIcon: <span>👉</span>,
  },
  render: args => <Button {...args}>AfterIcon</Button>,
}

// ***************** size *******************
export const Size: Story = {
  render: () => (
    <Space>
      <Button size="small">small</Button>
      <Button size="middle">middle</Button>
      <Button size="large">large</Button>
    </Space>
  ),
}

// ***************** disabled *******************
export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: args => <Button {...args}>Disabled</Button>,
}

// ***************** ghost *******************
export const Ghost: Story = {
  args: {
    ghost: true,
  },
  render: args => <Button {...args}>Ghost</Button>,
}

export default meta
