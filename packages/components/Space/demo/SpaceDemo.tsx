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
    </>
  )
}
