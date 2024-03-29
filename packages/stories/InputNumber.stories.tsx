import type { Meta, StoryObj } from '@storybook/react'
import { InputNumber } from '@components/Input'
import { Space } from '@components/Space'
import { Lock } from '@packages/icon'

const meta = {
  title: 'UI Component/InputNumber',
  component: InputNumber,
  tags: ['autodocs'],
} satisfies Meta<typeof InputNumber>

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => <InputNumber />,
}
export const Width: Story = {
  render: args => (
    <Space>
      <InputNumber
        placeholder={'Width 100px'}
        width={'100px'}
      />
      <InputNumber
        placeholder={'Width 200px'}
        width={200}
      />
      <InputNumber
        placeholder={'Width 300px'}
        width={300}
      />
    </Space>
  ),
}

export const Height: Story = {
  render: args => (
    <Space>
      <InputNumber
        placeholder={'Height 10px'}
        width={'100px'}
        height={'10px'}
        onChange={value => console.log('value', value)}
      />
      <InputNumber
        placeholder={'Height 20px'}
        width={200}
        height={20}
        onChange={value => console.log('value', value)}
      />
      <InputNumber
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
      <InputNumber
        placeholder={'Prefix'}
        prefix={
          <Lock
            className="flex j-a-c"
            width={20}
            height={20}
          />
        }
      />
      <InputNumber
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
export const Disabled: Story = {
  render: args => (
    <InputNumber placeholder={'disabled'} disabled />
  ),
}

export const Step: Story = {
  render: args => (
    <Space>
      <InputNumber placeholder={'Step 1'} step={1} />
      <InputNumber placeholder={'Step 2'} step={2} />
      <InputNumber placeholder={'Step 3'} step={3} />
    </Space>
  ),
}

export const Max: Story = {
  render: args => (
    <Space>
      <InputNumber
        placeholder={'Step 1, max 10'}
        step={1}
        max={10}
      />
      <InputNumber
        placeholder={'Step 2, max 20'}
        step={2}
        max={20}
      />
      <InputNumber
        placeholder={'Step 3, max 10'}
        step={3}
        max={10}
      />
    </Space>
  ),
}
export const Min: Story = {
  render: args => (
    <Space>
      <InputNumber
        placeholder={'Step 1, max 10'}
        step={1}
        min={10}
      />
      <InputNumber
        placeholder={'Step 2, max 20'}
        step={2}
        min={20}
      />
      <InputNumber
        placeholder={'Step 3, max 10'}
        step={'3'}
        min={10}
      />
    </Space>
  ),
}
export default meta
