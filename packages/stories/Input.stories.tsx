import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '@components/Input'

const meta = {
  title: 'UI Component/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <Input
      placeholder={'请输入内容'}
      onChange={value => console.log('value', value)}
    />
  ),
}

export default meta
