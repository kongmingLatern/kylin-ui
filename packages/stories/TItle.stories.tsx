import type { Meta, StoryObj } from '@storybook/react'
import { Title } from '@components/Typography'

const meta = {
  title: 'UI Component/Title',
  component: Title,
  tags: ['autodocs'],
} satisfies Meta<typeof Title>

type Story = StoryObj<typeof meta>

export const LevelTitle: Story = {
  render: () => (
    <>
      <Title>这是默认标题</Title>
      <Title level={1}>这是标题1</Title>
      <Title level={2}>这是标题2</Title>
      <Title level={3}>这是标题3</Title>
      <Title level={4}>这是标题4</Title>
      <Title level={5}>这是标题5</Title>
      <Title level={6}>这是标题6</Title>
    </>
  ),
}

export const CodeTitle: Story = {
  render: () => (
    <>
      <Title code>This is Code Title</Title>
    </>
  ),
}

export const DeleteLine: Story = {
  render: () => (
    <>
      <Title level={4} deleteLine>
        This is DeleteLine Text
      </Title>
    </>
  ),
}
export const Underline: Story = {
  render: () => (
    <>
      <Title level={4} underline>
        This is Underline Text
      </Title>
    </>
  ),
}

export const Italic: Story = {
  render: () => (
    <>
      <Title level={4} italic>
        This is Italic Text
      </Title>
    </>
  ),
}
export const Strong: Story = {
  render: () => (
    <>
      <Title level={4} strong>
        This is Strong Text
      </Title>
    </>
  ),
}
export const Mark: Story = {
  render: () => (
    <>
      <Title level={4} mark>
        This is Mark Text
      </Title>
    </>
  ),
}
export const Ellipsis: Story = {
  render: () => (
    <>
      <Title level={4} ellipsis>
        This is Ellipsis Text
      </Title>
    </>
  ),
}
export const Disable: Story = {
  render: () => (
    <>
      <Title level={4} disabled>
        This is Disable Text
      </Title>
    </>
  ),
}
export const Copyable: Story = {
  render: () => (
    <>
      <Title
        level={4}
        copyable
        onClick={e => console.log(e)}
      >
        This is Copy Text
      </Title>
    </>
  ),
}
export default meta
