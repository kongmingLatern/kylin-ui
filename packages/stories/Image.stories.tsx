import type { Meta, StoryObj } from '@storybook/react'
import { Image } from '@components/Image'
import { Space } from '@components/Space'

const meta = {
  title: 'UI Component/Image',
  component: Image,
  tags: ['autodocs'],
} satisfies Meta<typeof Image>

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200" />
  ),
}

export const Preview: Story = {
  render: () => (
    <Space>
      <div>
        <Image
          src="https://pic4.zhimg.com/80/v2-c21606cc260d1e83272a3b3243a2ff17_1440w.webp"
          width={200}
          preview={false}
        />
        <span>Preview: false</span>
      </div>
      <div>
        <Image
          src="https://pic4.zhimg.com/80/v2-c21606cc260d1e83272a3b3243a2ff17_1440w.webp"
          width={200}
        />
        <span>Preview: true(default)</span>
      </div>
    </Space>
  ),
}

export default meta
