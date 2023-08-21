import type { Meta, StoryObj } from '@storybook/react'
import { message } from '@components/Message'
import { Button } from '@components/Button'

const meta = {
  title: 'UI Component/Message',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <Button onClick={() => message.success('成功')}>
      提示
    </Button>
  ),
}

export default meta
