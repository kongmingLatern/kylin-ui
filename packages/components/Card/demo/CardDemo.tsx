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
              width={400}
            />
          ),
          description: '图片描述',
          size: 'small',
        }}
      />
    </>
  )
}
