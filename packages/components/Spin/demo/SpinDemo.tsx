import { Spin } from '../Spin'

export const SpinDemo = () => {
  return (
    <>
      <Spin>123</Spin>

      <Spin spinning tip="loading...">
        123
      </Spin>
      <Spin spinning={false}>123</Spin>
    </>
  )
}
