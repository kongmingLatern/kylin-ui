import { type Meta, type StoryObj } from '@storybook/react'
import { Card } from '@components/Card'
import { Image } from '@components/Image'
import { Button } from '@components/Button'
import { Space } from '@components/Space'
import { Paragraph } from '@components/Typography'
import { ShoppingCart } from '@packages/icon'

const meta = {
  title: 'UI Component/Card',
  component: Card,
  tags: ['autodocs'],
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
    Header: <div>左侧图片</div>,
    Content: (
      <>
        <Paragraph strong code>
          Small Photo
        </Paragraph>

        <Paragraph>Here are some descriptions</Paragraph>
      </>
    ),
    style: {
      width: '600px',
    },
  },

  render: args => <Card {...args} />,
}

export default meta
