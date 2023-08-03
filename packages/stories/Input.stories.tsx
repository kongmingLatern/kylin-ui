import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '@components/Input'
import { Space } from '@components/Space'
import { Lock } from '@packages/icon'

const meta = {
  title: 'UI Component/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: args => (
    <Input
      placeholder={'请输入内容'}
      onChange={value => console.log('value', value)}
      onPressEnter={(e, val) => console.log('e', e, val)}
    />
  ),
}
export const SearchIcon: Story = {
  render: args => (
    <Input enterSearch placeholder={'请输入内容'} />
  ),
}
export const Disabled: Story = {
  render: args => (
    <Input disabled placeholder={'请输入内容'} />
  ),
}
export const Shape: Story = {
  render: args => (
    <Space>
      <Input
        enterSearch
        placeholder={'请输入内容 square'}
        shape={'square'}
      />
      <Input
        enterSearch
        placeholder={'请输入内容 rounded'}
        shape={'rounded'}
      />
    </Space>
  ),
}
export const Width: Story = {
  render: args => (
    <Space>
      <Input placeholder={'Width 100px'} width={'100px'} />
      <Input placeholder={'Width 200px'} width={200} />
      <Input placeholder={'Width 300px'} width={300} />
    </Space>
  ),
}
export const Height: Story = {
  render: args => (
    <Space>
      <Input
        placeholder={'Height 10px'}
        width={'100px'}
        height={'10px'}
        onChange={value => console.log('value', value)}
      />
      <Input
        placeholder={'Height 20px'}
        width={200}
        height={20}
        onChange={value => console.log('value', value)}
      />
      <Input
        placeholder={'Height 30px'}
        width={300}
        height={30}
        onChange={value => console.log('value', value)}
      />
    </Space>
  ),
}

export const Icon: Story = {
  render: args => (
    <Space>
      <Input
        placeholder={'Prefix'}
        prefix={
          <Lock
            className="flex j-a-c"
            width={20}
            height={20}
          />
        }
      />
      <Input
        placeholder={'Suffix'}
        suffix={
          <Lock
            className="flex j-a-c"
            width={20}
            height={20}
          />
        }
      />
    </Space>
  ),
}
export const ShowCount: Story = {
  render: args => (
    <Space>
      <Input
        width={200}
        placeholder={'Height 10px'}
        height={'20px'}
        showCount
      />
      <Input
        placeholder={'Height 20px'}
        width={200}
        height={20}
        limitCount={20000}
        showCount
        suffix={
          <Lock
            className="flex j-a-c"
            width={20}
            height={20}
          />
        }
      />
    </Space>
  ),
}
export const LimitCount: Story = {
  render: args => (
    <Input
      placeholder={'Height 20px'}
      width={200}
      height={20}
      showCount
      limitCount={100}
      suffix={
        <Lock
          className="flex j-a-c"
          width={20}
          height={20}
        />
      }
    />
  ),
}

export default meta
