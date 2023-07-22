import type { Meta, StoryObj } from '@storybook/react'
import { Row } from '@components/Grid'

const meta = {
  title: 'UI Component/Grid',
  component: Row,
  tags: ['autodocs'],
} satisfies Meta<typeof Row>

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: args => <Row>Common text</Row>,
}

export const Gutter: Story = {
  render: args => (
    <>
      <Row gutter={2}>
        <span>1</span>
        <span>2</span>
        <span>4</span>
      </Row>
    </>
  ),
}
export default meta
