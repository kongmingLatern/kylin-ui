import type { Meta, StoryObj } from '@storybook/react'
import { List } from '@components/List'
import { Avatar } from '@components/Avatar'
import { Image } from '@components/Image'
import { Heart, MessageCircle, Star } from '@packages/icon'

const meta = {
  title: 'UI Component/List',
  component: List,
  tags: ['autodocs'],
} satisfies Meta<typeof List>

type Story = StoryObj<typeof meta>
const dataSource = [
  {
    avatar: <Avatar src="https://i.pravatar.cc/300" />,
    title: 'Title',
    description:
      'De123123123123123123123123123123123123333333333333333333scription',
    extra: <a>extra</a>,
    content: <div>there are some content</div>,
    actions: [
      <span
        key={1}
        style={{
          display: 'flex',
          width: '100%',
        }}
      >
        <Heart width={15} height={15} color="gray" />
        <span
          style={{
            marginLeft: '5px',
            fontSize: '.5rem',
          }}
        >
          Like
        </span>
      </span>,
      <span
        key={2}
        style={{
          display: 'flex',
          width: '100%',
        }}
      >
        <Star width={15} height={15} color="gray" />
        <span
          style={{
            marginLeft: '5px',
            fontSize: '.5rem',
          }}
        >
          Star
        </span>
      </span>,
      <span
        key={3}
        style={{
          display: 'flex',
          width: '100%',
        }}
      >
        <MessageCircle
          width={15}
          height={15}
          color="gray"
        />
        <span
          style={{
            marginLeft: '5px',
            fontSize: '.5rem',
          }}
        >
          Comment
        </span>
      </span>,
    ],
  },
]

export const Basic: Story = {
  render: () => {
    return <List dataSource={dataSource} />
  },
}

export const Cover: Story = {
  render: () => {
    const dataSource = [
      {
        avatar: <Avatar src="https://i.pravatar.cc/300" />,
        title: 'Title',
        description:
          'De123123123123123123123123123123123123333333333333333333scription',
        extra: (
          <Image
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        ),
        content: <div>asdoasjdioasdj</div>,
        actions: [
          <span
            key={1}
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <Heart width={15} height={15} color="gray" />
            <span
              style={{
                marginLeft: '5px',
                fontSize: '.5rem',
              }}
            >
              Like
            </span>
          </span>,
          <span
            key={2}
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <Star width={15} height={15} color="gray" />
            <span
              style={{
                marginLeft: '5px',
                fontSize: '.5rem',
              }}
            >
              Star
            </span>
          </span>,
          <span
            key={3}
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <MessageCircle
              width={15}
              height={15}
              color="gray"
            />
            <span
              style={{
                marginLeft: '5px',
                fontSize: '.5rem',
              }}
            >
              Comment
            </span>
          </span>,
        ],
      },
      {
        avatar: <Avatar src="https://i.pravatar.cc/300" />,
        title: 'Title',
        description:
          'De123123123123123123123123123123123123333333333333333333scription',
        extra: (
          <Image
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        ),
        content: <div>asdoasjdioasdj</div>,
        actions: [
          <span
            key={1}
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <Heart width={15} height={15} color="gray" />
            <span
              style={{
                marginLeft: '5px',
                fontSize: '.5rem',
              }}
            >
              Like
            </span>
          </span>,
          <span
            key={2}
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <Star width={15} height={15} color="gray" />
            <span
              style={{
                marginLeft: '5px',
                fontSize: '.5rem',
              }}
            >
              Star
            </span>
          </span>,
          <span
            key={3}
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <MessageCircle
              width={15}
              height={15}
              color="gray"
            />
            <span
              style={{
                marginLeft: '5px',
                fontSize: '.5rem',
              }}
            >
              Comment
            </span>
          </span>,
        ],
      },
      {
        avatar: <Avatar src="https://i.pravatar.cc/300" />,
        title: 'Title',
        description:
          'De123123123123123123123123123123123123333333333333333333scription',
        extra: (
          <Image
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        ),
        content: <div>asdoasjdioasdj</div>,
        actions: [
          <span
            key={1}
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <Heart width={15} height={15} color="gray" />
            <span
              style={{
                marginLeft: '5px',
                fontSize: '.5rem',
              }}
            >
              Like
            </span>
          </span>,
          <span
            key={2}
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <Star width={15} height={15} color="gray" />
            <span
              style={{
                marginLeft: '5px',
                fontSize: '.5rem',
              }}
            >
              Star
            </span>
          </span>,
          <span
            key={3}
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <MessageCircle
              width={15}
              height={15}
              color="gray"
            />
            <span
              style={{
                marginLeft: '5px',
                fontSize: '.5rem',
              }}
            >
              Comment
            </span>
          </span>,
        ],
      },
    ]
    return <List dataSource={dataSource} />
  },
}

export default meta
