import type { Meta, StoryObj } from '@storybook/react'
import { Col, Row } from '@components/Grid'
import { Space } from '@components/Space'
import 'uno.css'

const meta = {
  title: 'UI Component/Col',
  component: Col,
  tags: ['autodocs'],
} satisfies Meta<typeof Col>

type Story = StoryObj<typeof meta>

const basicStyle = {
  bg: 'blue-300',
  h: '50px',
  lh: '50px',
  text: 'center white',
}

export const Basic: Story = {
  render: args => <Col>There are some text</Col>,
}

export const Flex: Story = {
  render: args => (
    <Space direction="vertical">
      <Row>
        <Col
          flex={'0 0 10%'}
          bg="blue-300"
          h="50px"
          lh="50px"
          text="center white"
        >
          0 0 10%
        </Col>
        <Col
          flex={'1 1 auto'}
          bg="blue-400"
          h="50px"
          lh="50px"
          text="center white"
        >
          1 1 auto
        </Col>
      </Row>

      <Row>
        <Col
          flex={1}
          bg="blue-300"
          h="50px"
          lh="50px"
          text="center white"
        >
          flex: 1
        </Col>
        <Col
          flex={2}
          bg="blue-400"
          h="50px"
          lh="50px"
          text="center white"
        >
          flex: 2
        </Col>
      </Row>
    </Space>
  ),
}

export const Span: Story = {
  render: args => (
    <>
      <Row text="white">
        <Col
          span={2}
          bg="blue-300"
          h="50px"
          lh="50px"
          text="center"
        >
          col-2
        </Col>
        <Col
          span={20}
          bg="blue-500"
          h="50px"
          lh="50px"
          text="center"
        >
          col-20
        </Col>
        <Col
          span={2}
          bg="blue-300"
          h="50px"
          lh="50px"
          text="center"
        >
          col-2
        </Col>
      </Row>
      <Row text="white">
        {new Array(4).fill(0).map((i, index) => (
          <Col
            key={index}
            span={6}
            {...basicStyle}
            bg="blue-400"
          >
            col-6
          </Col>
        ))}
      </Row>
      <Row>
        {new Array(6).fill(0).map(i => (
          <Col
            span={4}
            {...basicStyle}
            key={i}
            bg="blue-600"
          >
            4
          </Col>
        ))}
      </Row>
      <Row>
        {new Array(8).fill(0).map(i => (
          <Col
            span={3}
            {...basicStyle}
            key={i}
            bg="blue-400"
          >
            3
          </Col>
        ))}
      </Row>{' '}
    </>
  ),
}

export default meta
