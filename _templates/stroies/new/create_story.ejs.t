---
to: packages/stories/<%= name %>.stories.tsx
---
import type { Meta, StoryObj } from '@storybook/react'
import { <%= name %> } from '@components/<%= name %>'

const meta = {
  title: 'UI Component/<%= name %>',
  component: <%= name %>,
  tags: ['autodocs'],
} satisfies Meta<typeof <%= name %>>

type Story = StoryObj<typeof meta>

export const Basic: Story =  {
  render: () => <<%= name %>>There are some text</<%= name %>>,
}

export default meta
