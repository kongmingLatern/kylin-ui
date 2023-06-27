import { Image } from '@components/Image'
import { Card } from '..'
import { Button } from '@components/Button'
import { Space } from '@components/Space'
import { Paragraph } from '@components/Typography'
import { Loader, ShoppingCart } from '@packages/icon'
import { Content } from '@components/Layout'

export const CardDemo = () => {
  return (
    <>
      <div className="flex">
        <Card
          style={{
            width: '500px',
          }}
          shape="round"
          Cover={{
            element: (
              <Image
                src="https://pic4.zhimg.com/80/v2-c21606cc260d1e83272a3b3243a2ff17_1440w.webp"
                width={300}
                height={200}
              />
            ),
            position: 'left',
            size: 'small',
          }}
          Header={<div>左侧图片</div>}
          Content={
            <>
              <Paragraph strong code>
                Small Photo
              </Paragraph>
              <Space
                className="justify-between mt-2"
                direction="vertical"
              >
                <Button>加入购物车</Button>
                <Button>收藏</Button>
                <Button type="secondary">购买</Button>
              </Space>
            </>
          }
          Footer={
            <Space
              className="h-[50px]"
              justify="space-around"
            >
              <Button className="h-3rem ">
                <Space>
                  <ShoppingCart width={20} />
                  <span>购物车</span>
                </Space>
              </Button>
              <Button className="h-3rem">
                <Space>
                  <Loader width={20} />
                  <span>收藏</span>
                </Space>
              </Button>
              <Button className="h-3rem bg-red-500">
                购买
              </Button>
            </Space>
          }
        />
        <Card
          style={{
            width: '500px',
          }}
          Cover={{
            element: (
              <Image
                src="https://pic4.zhimg.com/80/v2-c21606cc260d1e83272a3b3243a2ff17_1440w.webp"
                width={300}
                height={200}
              />
            ),
            size: 'small',
            position: 'right',
          }}
          Header={<div>右侧图片</div>}
          Footer={<div>卡片底部</div>}
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
            size: 'small',
          }}
          Header={<div>上侧图片</div>}
          Footer={<div>卡片底部</div>}
          style={{
            width: '300px',
          }}
        />
        <Card
          shape="circle"
          style={{
            width: '300px',
          }}
          Cover={{
            element: (
              <Image
                src="https://pic4.zhimg.com/80/v2-c21606cc260d1e83272a3b3243a2ff17_1440w.webp"
                width={300}
                height={200}
              />
            ),
            size: 'small',
            position: 'bottom',
          }}
          Header={<div>下侧图片</div>}
          Footer={<div>卡片底部</div>}
        />
      </div>
      <div className="flex">
        <Card>123</Card>
        <Card
          Header={<div>Card1</div>}
          Content={<Content>Content1</Content>}
        />
      </div>
    </>
  )
}
