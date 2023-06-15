import { Space } from '@components/Space'
import { Spin } from '../Spin'

export const SpinDemo = () => {
  return (
    <Space size={'large'}>
      <Spin>
        <span
          style={{
            display: 'block',
            padding: 50,
          }}
        >
          Spin ...
        </span>
      </Spin>

      <Spin spinning tip="loading...">
        123
      </Spin>
      <Spin tip="Loading" size="small">
        A long long spin ...
      </Spin>
    </Space>
  )
}
