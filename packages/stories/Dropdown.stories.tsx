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
      menu={[
        {
          key: '1',
          icon: <Star width={20} />,
          label: '星',
        },
      ]}
    >
      <span>There are some text</span>
    </Dropdown>
  ),
}

export const Type: Story = {
  render: () => (
    <Dropdown
      menu={[
        {
          key: '1',
          type: 'default',
          label: 'default',
        },
        {
          key: '12',
          type: 'primary',
          label: 'primary',
        },
        {
          key: '132',
          type: 'secondary',
          label: 'secondary',
        },
        {
          key: '1232',
          type: 'success',
          label: 'success',
        },
        {
          key: '3',
          type: 'info',
          label: 'info',
        },
        {
          key: '223',
          type: 'disabled',
          label: 'disabled',
        },
        {
          key: '2223',
          type: 'warning',
          label: 'warning',
        },
        {
          key: '232',
          type: 'danger',
          label: 'danger',
        },
        {
          key: '2',
          type: 'error',
          label: 'error',
        },
      ]}
    >
      <span>Here are some type items</span>
    </Dropdown>
  ),
}

export default meta
