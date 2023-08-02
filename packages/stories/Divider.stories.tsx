import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from '@components/Divider'
import { Text } from '@components/Typography'

const meta = {
  title: 'UI Component/Divider',
  component: Divider,
  tags: ['autodocs'],
} satisfies Meta<typeof Divider>

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <>
      <p>水平分割线</p>
      <Divider />
      <p>there are some text</p>
      <Divider />
    </>
  ),
}

export const Type: Story = {
  render: () => (
    <>
      <Divider type="horizontal">horizonal</Divider>
      <Text>leftText</Text>
      <Divider type="vertical">vertical</Divider>
      <Text>rightText</Text>
    </>
  ),
}

export const Orientation: Story = {
  render: () => (
    <>
      <Divider orientation="left">orientation_left</Divider>
      <Divider orientation="center">
        orientation_center
      </Divider>
      <Divider orientation="right">
        orientation_right
      </Divider>
    </>
  ),
}

export const OrientationMargin: Story = {
  render: () => (
    <>
      <Divider orientationMargin="0">
        Default orientation=0
      </Divider>
      <Divider orientationMargin="2" orientation="left">
        Left orientation=2
      </Divider>
      <Divider orientation="right" orientationMargin="2">
        Right orientation=2
      </Divider>
      <Divider orientation="right" orientationMargin={50}>
        Right Text with 50px orientationMargin
      </Divider>
    </>
  ),
}

export const Dashed: Story = {
  render: () => <Divider dashed />,
}

export const Plain: Story = {
  render: () => (
    <Divider plain>This is a plain text</Divider>
  ),
}

export default meta
