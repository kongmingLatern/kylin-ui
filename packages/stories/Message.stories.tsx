import type { Meta, StoryObj } from '@storybook/react'
import { message, MessageList } from '@components/Message'
import { Button } from '@components/Button'
import { Space } from '@components/Space'

const meta = {
  title: 'UI Component/Message',
  component: MessageList,
  tags: ['autodocs'],
} satisfies Meta<typeof MessageList>

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <Space>
      <Button type='success' onClick={() => message.success('成功')}>
        成功提示
      </Button>
      <Button type='error' onClick={() => message.error('失败')}>
        失败提示
      </Button>
      <Button type='info' onClick={() => message.info('提示')}>
        提示
      </Button>
      <Button ghost onClick={() => message.warn('警告')}>
        警告提示
      </Button>
    </Space>
  ),
}

export default meta
