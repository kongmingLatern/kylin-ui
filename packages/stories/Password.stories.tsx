import type { Meta, StoryObj } from '@storybook/react'
import { Password } from '@components/Input'

const meta = {
  title: 'UI Component/Password',
  component: Password,
  tags: ['autodocs'],
} satisfies Meta<typeof Password>

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => <Password>There are some text</Password>,
}

export default meta
