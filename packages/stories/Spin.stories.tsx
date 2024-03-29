import type { Meta, StoryObj } from '@storybook/react'
import { Spin } from '@components/Spin'
import { Space } from '@components/Space'
import { useState } from 'react'
import { Button } from '@components/Button'

const meta = {
  title: 'UI Component/Spin',
  component: Spin,
  tags: ['autodocs'],
} satisfies Meta<typeof Spin>

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => <Spin>There are some text</Spin>,
}

export const Delay: Story = {
  render: () => (
    <Spin tip={<div>Wait for data...</div>} delay={1000}>
      <span>Delay for 1000ms</span>
    </Spin>
  ),
}
export const Demo: Story = {
  render: () => (
    <Space size={'large'}>
      <Spin tip="加载中..." size="small">
        <span
          style={{
            display: 'block',
            padding: 50,
          }}
        >
          Spin ...
        </span>
      </Spin>

      <Spin spinning tip="loading...">
        <div
          style={{
            height: '100px',
            color: 'white',
            background: '#91caff',
          }}
        >
          <span>
            A long long text A long long text A long long
            text A long long
          </span>
        </div>
      </Spin>

      <Spin tip="Loading" size="small">
        <span
          style={{
            display: 'block',
            height: '100px',
            color: 'white',
            background: 'red',
          }}
        >
          A long long spin ...
        </span>
      </Spin>
    </Space>
  ),
}

export const Control: Story = {
  render: () => {
    const [spinning, setSpinning] = useState(true)
    return (
      <>
        <Spin spinning={spinning} tip={'Waiting...'}>
          <div style={{ height: '200px' }}>
            {[1, 2, 3, 4, 5].map(item => {
              return <span key={item}>{item}</span>
            })}
          </div>
        </Spin>
        <Button onClick={() => setSpinning(!spinning)}>
          Toggle
        </Button>
      </>
    )
  },
}

export default meta
