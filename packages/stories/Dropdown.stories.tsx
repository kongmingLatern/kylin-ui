import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from '@components/Dropdown'
import { Star } from '@packages/icon'

const meta = {
  title: 'UI Component/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <Dropdown
      menu={[{ key: '1', icon: <Star />, label: '星' }]}
    >
      <span>There are some text</span>
    </Dropdown>
  ),
}

export default meta
