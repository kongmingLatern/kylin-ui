import type { Meta, StoryObj } from '@storybook/react'
import { List } from '@components/List'

const meta = {
  title: 'UI Component/List',
  component: List,
  tags: ['autodocs'],
} satisfies Meta<typeof List>

type Story = StoryObj<typeof meta>

export const Basic: Story =  {
  render: () => <List>There are some text</List>,
}

export default meta

