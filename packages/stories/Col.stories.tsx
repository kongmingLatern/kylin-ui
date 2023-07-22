import type { Meta, StoryObj } from '@storybook/react'
import { Col, Row } from '@components/Grid'

const meta = {
  title: 'UI Component/Col',
  component: Col,
  tags: ['autodocs'],
} satisfies Meta<typeof Col>

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: args => <Col>There are some text</Col>,
}

export const Flex: Story = {
  render: args => (
    <Row>
      <Col flex={'0 0 10%'} bg="blue-300">
        0 0 10%
      </Col>
      <Col flex={'1 1 auto'} bg="blue-400">
        1 1 auto
      </Col>
    </Row>
  ),
}
export default meta
