import type { Meta, StoryObj } from '@storybook/react'
import { Message } from '@components/Message'

const meta = {
  title: 'UI Component/Message',
  component: Message,
  tags: ['autodocs'],
} satisfies Meta<typeof Message>

type Story = StoryObj<typeof meta>

export const Basic: Story =  {
  render: () => <Message>There are some text</Message>,
}

export default meta

