import type { Meta, StoryObj } from '@storybook/react'
import { Text } from '@components/Typography'

const meta = {
  title: 'UI Component/Text',
  component: Text,
  tags: ['autodocs'],
} satisfies Meta<typeof Text>

type Story = StoryObj<typeof meta>

export const CodeText: Story = {
  render: () => (
    <>
      <Text code>This is Code Text</Text>
    </>
  ),
}

export const DeleteLine: Story = {
  render: () => (
    <>
      <Text deleteLine>This is DeleteLine Text</Text>
    </>
  ),
}
export const Underline: Story = {
  render: () => (
    <>
      <Text underline>This is Underline Text</Text>
    </>
  ),
}

export const Italic: Story = {
  render: () => (
    <>
      <Text italic>This is Italic Text</Text>
    </>
  ),
}
export const Strong: Story = {
  render: () => (
    <>
      <Text strong>This is Strong Text</Text>
    </>
  ),
}
export const Mark: Story = {
  render: () => (
    <>
      <Text mark>This is Mark Text</Text>
    </>
  ),
}
export const Ellipsis: Story = {
  render: () => (
    <>
      <Text ellipsis>This is Ellipsis Text</Text>
    </>
  ),
}
export const Disable: Story = {
  render: () => (
    <>
      <Text disabled>This is Disable Text</Text>
    </>
  ),
}
export const Copyable: Story = {
  render: () => (
    <>
      <Text copyable onClick={e => console.log(e)}>
        This is Copy Text
      </Text>
    </>
  ),
}

export default meta
