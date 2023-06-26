import { Image } from '../Image'

export const ImageDemo = () => {
  return (
    <>
      <Image
        src="1"
        onError={() => console.log('图片加载失败')}
      />

      <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200" />

      <Image
        src="https://pic4.zhimg.com/80/v2-c21606cc260d1e83272a3b3243a2ff17_1440w.webp"
        preview={false}
      />
    </>
  )
}
