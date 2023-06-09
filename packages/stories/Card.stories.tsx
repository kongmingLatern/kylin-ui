import { type Meta, type StoryObj } from '@storybook/react'
import { Card } from '@components/Card'
import { Image } from '@components/Image'
import { Paragraph } from '@components/Typography'
import { Space } from '@components/Space'

const meta = {
  title: 'UI Component/Card',
  component: Card,
  args: {
    style: {
      width: '600px',
    },
  },
} satisfies Meta<typeof Card>

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    shape: 'round',
    Cover: {
      element: (
        <Image
          src="https://pic4.zhimg.com/80/v2-c21606cc260d1e83272a3b3243a2ff17_1440w.webp"
          width={300}
          height={200}
        />
      ),
      position: 'left',
    },
    Header: <div className="p-2">左侧图片</div>,
    Content: (
      <div className="p-2">
        <Paragraph strong code>
          Small Photo
        </Paragraph>

        <Paragraph>Here are some descriptions</Paragraph>
      </div>
    ),
  },

  render: args => <Card {...args} />,
}

export const Position: Story = {
  render: args => (
    <Space>
      <Card
        Cover={{
          element: (
            <Image
              src="https://pic4.zhimg.com/80/v2-c21606cc260d1e83272a3b3243a2ff17_1440w.webp"
              width={300}
              height={200}
            />
          ),
          position: 'left',
        }}
        Header={<div>Left</div>}
      />
      <Card
        Cover={{
          element: (
            <Image
              src="https://pic4.zhimg.com/80/v2-c21606cc260d1e83272a3b3243a2ff17_1440w.webp"
              width={300}
              height={200}
            />
          ),
          position: 'right',
        }}
        Header={<div>Right</div>}
      />
      <Card
        Cover={{
          element: (
            <Image
              src="https://pic4.zhimg.com/80/v2-c21606cc260d1e83272a3b3243a2ff17_1440w.webp"
              width={300}
              height={200}
            />
          ),
          position: 'top',
        }}
        Header={<div>Top</div>}
      />
      <Card
        Cover={{
          element: (
            <Image
              src="https://pic4.zhimg.com/80/v2-c21606cc260d1e83272a3b3243a2ff17_1440w.webp"
              width={300}
              height={200}
            />
          ),
          position: 'bottom',
        }}
        Header={<div>Bottom</div>}
      />
    </Space>
  ),
}

export default meta
