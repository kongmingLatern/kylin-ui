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
      <Text level={4} deleteLine>
        This is DeleteLine Text
      </Text>
    </>
  ),
}
export const Underline: Story = {
  render: () => (
    <>
      <Text level={4} underline>
        This is Underline Text
      </Text>
    </>
  ),
}

export const Italic: Story = {
  render: () => (
    <>
      <Text level={4} italic>
        This is Italic Text
      </Text>
    </>
  ),
}
export const Strong: Story = {
  render: () => (
    <>
      <Text level={4} strong>
        This is Strong Text
      </Text>
    </>
  ),
}
export const Mark: Story = {
  render: () => (
    <>
      <Text level={4} mark>
        This is Mark Text
      </Text>
    </>
  ),
}
export const Ellipsis: Story = {
  render: () => (
    <>
      <Text level={4} ellipsis>
        This is Ellipsis Text
      </Text>
    </>
  ),
}
export const Disable: Story = {
  render: () => (
    <>
      <Text level={4} disabled>
        This is Disable Text
      </Text>
    </>
  ),
}
export const Copyable: Story = {
  render: () => (
    <>
      <Text
        level={4}
        copyable
        onClick={e => console.log(e)}
      >
        This is Copy Text
      </Text>
    </>
  ),
}

export default meta
