import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../Button'
import '../../../../dist/index.css'

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

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
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
export const Ghost: Story = {
  args: {
    ghost: true,
  },
  render: args => <Button {...args}>Ghost</Button>,
}
