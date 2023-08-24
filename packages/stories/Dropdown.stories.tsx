import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from '@components/Dropdown'

const meta = {
  title: 'UI Component/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>

type Story = StoryObj<typeof meta>

export const Basic: Story =  {
  render: () => <Dropdown>There are some text</Dropdown>,
}

export default meta

