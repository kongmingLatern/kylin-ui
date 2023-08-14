import type { Meta, StoryObj } from '@storybook/react'
import { List, Item } from '@components/List'
import { Avatar } from '@components/Avatar'

const meta = {
  title: 'UI Component/List',
  component: List,
  tags: ['autodocs'],
} satisfies Meta<typeof List>

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <List
      dataSource={[
        {
          avatar: (
            <Avatar src="https://i.pravatar.cc/300" />
          ),
          title: 'Title',
          description: 'Description',
          extra: 'Extra',
        },
      ]}
    ></List>
  ),
}

export default meta
