import { Space } from '../Space'

export const SpaceDemo = () => {
  return (
    <>
      <Space>
        <div>123</div>
        <div>2324</div>
      </Space>

      <Space direction="vertical">
        <div>123</div>
        <div>2324</div>
      </Space>

      <Space wrap>
        <span>one</span>
        <span>two</span>
        <span>third</span>
        <span>third</span>
        <span>third</span>
      </Space>

      <Space align="end">
        <span>end text1</span>
        <span>end text2</span>
        <span>end text3</span>
      </Space>
    </>
  )
}
