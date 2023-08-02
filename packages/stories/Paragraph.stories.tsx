import type { Meta, StoryObj } from '@storybook/react'
import { Paragraph } from '@components/Typography'

const meta = {
  title: 'UI Component/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
} satisfies Meta<typeof Paragraph>

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <>
      <Paragraph deleteLine>
        This is Default Paragraph
      </Paragraph>
    </>
  ),
}

export const DeleteLine: Story = {
  render: () => (
    <>
      <Paragraph deleteLine>
        This is DeleteLine Paragraph
      </Paragraph>
    </>
  ),
}
export const Underline: Story = {
  render: () => (
    <>
      <Paragraph underline>
        This is Underline Paragraph
      </Paragraph>
    </>
  ),
}

export const Italic: Story = {
  render: () => (
    <>
      <Paragraph italic>This is Italic Paragraph</Paragraph>
    </>
  ),
}
export const Strong: Story = {
  render: () => (
    <>
      <Paragraph strong>This is Strong Paragraph</Paragraph>
    </>
  ),
}
export const Mark: Story = {
  render: () => (
    <>
      <Paragraph mark>This is Mark Paragraph</Paragraph>
    </>
  ),
}
export const Ellipsis: Story = {
  render: () => (
    <>
      <Paragraph ellipsis>
        This is Ellipsis Paragraph
      </Paragraph>
    </>
  ),
}
export const Disable: Story = {
  render: () => (
    <>
      <Paragraph disabled>
        This is Disable Paragraph
      </Paragraph>
    </>
  ),
}
export const Copyable: Story = {
  render: () => (
    <>
      <Paragraph copyable onClick={e => console.log(e)}>
        This is Copy Paragraph
      </Paragraph>
    </>
  ),
}

export default meta
