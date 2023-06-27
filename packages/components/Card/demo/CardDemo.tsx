import { Image } from '@components/Image'
import { Card } from '..'

export const CardDemo = () => {
  return (
    <>
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
          position: 'bottom',
        }}
        Header={<div>下侧图片</div>}
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
          position: 'bottom',
        }}
        Header={<div>下侧图片</div>}
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
          position: 'left',
          size: 'small',
        }}
        Header={<div>左侧图片</div>}
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
          position: 'bottom',
        }}
        Header={<div>下侧图片</div>}
        Footer={<div>卡片底部</div>}
      />
    </>
  )
}
