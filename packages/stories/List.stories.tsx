import type { Meta, StoryObj } from '@storybook/react'
import { List, Item } from '@components/List'
import { Avatar } from '@components/Avatar'
import { Button } from '@components/Button'

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
          extra: <a>extra</a>,
          actions: [
            <Button
              key={1}
              style={{
                width: '100%',
              }}
            >
              action1
            </Button>,
            <Button
              type={'primary'}
              key={2}
              style={{
                width: '100%',
              }}
            >
              action2
            </Button>,
            <Button
              type={'info'}
              key={3}
              style={{
                width: '100%',
              }}
            >
              action3
            </Button>,
          ],
        },
      ]}
    ></List>
  ),
}

export default meta
