import type { Meta, StoryObj } from '@storybook/react'
import { Col, Row } from '@components/Grid'
import { Space } from '@components/Space'
import 'uno.css'
import { Divider } from '@components/Divider'
import { Fragment } from 'react'

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
  render: args => (
    <Space direction="vertical">
      <Row>
        <Col flex={'0 0 30%'} {...basicStyle}>
          0 0 30%
        </Col>
        <Col
          flex={'1 1 auto'}
          {...basicStyle}
          bg="blue-400"
        >
          1 1 auto
        </Col>
      </Row>

      <Row>
        <Col flex={1} {...basicStyle}>
          flex: 1
        </Col>
        <Col flex={2} {...basicStyle} bg="blue-400">
          flex: 2
        </Col>
      </Row>
    </Space>
  ),
}

export const Flex: Story = {
  render: args => (
    <Space direction="vertical">
      <Row>
        <Col flex={'0 0 10%'} {...basicStyle}>
          0 0 10%
        </Col>
        <Col
          flex={'1 1 auto'}
          {...basicStyle}
          bg="blue-400"
        >
          1 1 auto
        </Col>
      </Row>

      <Row>
        <Col flex={1} {...basicStyle}>
          flex: 1
        </Col>
        <Col flex={2} {...basicStyle} bg="blue-400">
          flex: 2
        </Col>
      </Row>
    </Space>
  ),
}

export const Span: Story = {
  render: args => (
    <Space direction="vertical">
      <Row text="white">
        <Col span={2} {...basicStyle} bg="blue-300">
          col-2
        </Col>
        <Col span={20} {...basicStyle} bg="blue-500">
          col-20
        </Col>
        <Col span={2} {...basicStyle} bg="blue-300">
          col-2
        </Col>
      </Row>
      <Row text="white">
        {new Array(4).fill(0).map((i, index) => (
          <Col
            key={index}
            span={6}
            {...basicStyle}
            bg={!(index % 2) ? 'blue-400' : 'blue-600'}
          >
            col-6
          </Col>
        ))}
      </Row>
      <Row>
        {new Array(6).fill(0).map((i, k) => (
          <Col
            span={4}
            {...basicStyle}
            key={k}
            bg={k % 2 ? 'blue-400' : 'blue-600'}
          >
            col-4
          </Col>
        ))}
      </Row>
      <Row>
        {new Array(8).fill(0).map((i, k) => (
          <Col
            span={3}
            {...basicStyle}
            key={k}
            bg={k % 2 ? 'blue-400' : 'blue-600'}
          >
            col-3
          </Col>
        ))}
      </Row>{' '}
    </Space>
  ),
}
export const Gutter: Story = {
  render: args => (
    <Row gutter={[0, 24]}>
      {new Array(8).fill(0).map((i, k) => (
        <Col
          span={6}
          {...basicStyle}
          key={k}
          bg={k % 2 ? 'blue-400' : 'blue-600'}
        >
          col-6
        </Col>
      ))}
    </Row>
  ),
}

export const Offset: Story = {
  render: args => (
    <Row gutter={[0, 24]}>
      <Col span={8} {...basicStyle} bg="blue-500">
        col-6
      </Col>
      <Col
        span={8}
        offset={8}
        {...basicStyle}
        bg="blue-500"
      >
        col-6
      </Col>
    </Row>
  ),
}

export const Justify: Story = {
  render: args => (
    <Space direction="vertical">
      <Divider>start</Divider>
      <Row justify="start">
        <Col span={4} {...basicStyle} bg="blue-500">
          col-4
        </Col>
        <Col span={4} {...basicStyle} bg="blue-500">
          col-4
        </Col>
      </Row>
      <Divider>center</Divider>
      <Row justify="center">
        <Col span={4} {...basicStyle} bg="blue-500">
          col-4
        </Col>
        <Col span={4} {...basicStyle} bg="blue-500">
          col-4
        </Col>
      </Row>
      <Divider>end</Divider>
      <Row justify="end">
        <Col span={4} {...basicStyle} bg="blue-500">
          col-4
        </Col>
        <Col span={4} {...basicStyle} bg="blue-500">
          col-4
        </Col>
      </Row>
      <Divider>space-between</Divider>
      <Row justify="space-between">
        <Col span={4} {...basicStyle} bg="blue-500">
          col-4
        </Col>
        <Col span={4} {...basicStyle} bg="blue-500">
          col-4
        </Col>
      </Row>
      <Divider>space-around</Divider>
      <Row justify="space-around">
        <Col span={4} {...basicStyle} bg="blue-500">
          col-4
        </Col>
        <Col span={4} {...basicStyle} bg="blue-500">
          col-4
        </Col>
      </Row>
      <Divider>space-evently</Divider>
      <Row justify="space-evenly">
        <Col span={4} {...basicStyle} bg="blue-500">
          col-4
        </Col>
        <Col span={4} {...basicStyle} bg="blue-500">
          col-4
        </Col>
        <Col span={4} {...basicStyle} bg="blue-500">
          col-4
        </Col>
        <Col span={4} {...basicStyle} bg="blue-500">
          col-4
        </Col>
      </Row>
    </Space>
  ),
}

export const Align: Story = {
  render: args => (
    <Space direction="vertical">
      <Divider>start</Divider>
      <Row
        justify="center"
        align="start"
        style={{ height: 100 }}
      >
        <Col
          span={4}
          bg="blue-500"
          h="100px"
          lh="100px"
          text="center white"
        >
          col-4
        </Col>
        <Col span={4} {...basicStyle} bg="blue-300">
          col-4
        </Col>
        <Col
          span={4}
          bg="blue-500"
          h="100px"
          lh="100px"
          text="center white"
        >
          col-4
        </Col>
        <Col span={4} {...basicStyle} bg="blue-300">
          col-4
        </Col>
      </Row>
      <Divider>center</Divider>
      <Row
        justify="center"
        align="center"
        style={{ height: 100 }}
      >
        {new Array(2).fill(0).map((i, k) => {
          return (
            <Fragment key={k}>
              <Col
                span={4}
                {...basicStyle}
                h="80px"
                lh="80px"
                bg={'blue-500'}
              >
                col-4
              </Col>
              <Col span={4} {...basicStyle} bg={'blue-400'}>
                col-4
              </Col>
            </Fragment>
          )
        })}
      </Row>
      <Divider>end</Divider>
      <Row
        justify="center"
        align="end"
        style={{ height: 100 }}
      >
        {new Array(2).fill(0).map((i, k) => {
          return (
            <Fragment key={k}>
              <Col
                span={4}
                {...basicStyle}
                h="80px"
                lh="80px"
                bg={'blue-500'}
              >
                col-4
              </Col>
              <Col span={4} {...basicStyle} bg={'blue-400'}>
                col-4
              </Col>
            </Fragment>
          )
        })}
      </Row>
    </Space>
  ),
}

export default meta
