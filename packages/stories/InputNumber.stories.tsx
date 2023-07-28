import type { Meta, StoryObj } from '@storybook/react'
import { InputNumber } from '@components/Input'

const meta = {
  title: 'UI Component/InputNumber',
  component: InputNumber,
  tags: ['autodocs'],
} satisfies Meta<typeof InputNumber>

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <InputNumber>There are some text</InputNumber>
  ),
}

export default meta
