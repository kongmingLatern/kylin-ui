import { Image } from '@components/Image'
import { Card } from '..'
import { Button } from '@components/Button'
import { Space } from '@components/Space'

export const CardDemo = () => {
  return (
    <div className="flex">
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
          position: 'left',
          size: 'small',
        }}
        Header={<div>左侧图片</div>}
        Footer={
          <Space className="justify-between">
            <Button>加入购物车</Button>
            <Button>收藏</Button>
            <Button type="secondary">购买</Button>
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
        }}
        Header={<div>上侧图片</div>}
        Footer={<div>卡片底部</div>}
      />
      <Card
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
  )
}
