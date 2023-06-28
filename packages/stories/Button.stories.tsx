import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Button } from '../components/Button/Button'
import 'uno.css'
import '../../dist/index.css'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  } as any,
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// ***************** type *******************
export const Primary: Story = {
  args: {
    type: 'primary',
  },
  render: args => <Button {...args}>Primary</Button>,
}

export const Secondary: Story = {
  args: {
    type: 'secondary',
  },
  render: args => <Button {...args}>Secondary</Button>,
}

export const Success: Story = {
  args: {
    type: 'success',
  },
  render: args => <Button {...args}>Success</Button>,
}
export const Info: Story = {
  args: {
    type: 'info',
  },
  render: args => <Button {...args}>Info</Button>,
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
      <>
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
      </>
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
  args: {
    size: 'small',
  },
  render: args => <Button {...args}>Size</Button>,
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
