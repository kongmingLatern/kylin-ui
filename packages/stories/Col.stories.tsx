import type { Meta, StoryObj } from '@storybook/react'
import { Col, Row } from '@components/Grid'
import { Space } from '@components/Space'

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
    <Space direction="vertical">
      <Row>
        <Col flex={'0 0 10%'} bg="blue-300" h="50px">
          0 0 10%
        </Col>
        <Col flex={'1 1 auto'} bg="blue-400" h="50px">
          1 1 auto
        </Col>
      </Row>

      <Row>
        <Col flex={1} bg="blue-300" h="50px">
          flex: 1
        </Col>
        <Col flex={2} bg="blue-400" h="50px">
          flex: 2
        </Col>
      </Row>
    </Space>
  ),
}
export default meta
