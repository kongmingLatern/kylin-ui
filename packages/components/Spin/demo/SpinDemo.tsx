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
        <div
          style={{
            height: '100px',
            color: 'white',
            background: '#91caff',
          }}
        >
          <span>
            A long long text A long long text A long long
            text A long long
          </span>
        </div>
      </Spin>

      <Spin tip="Loading" size="small">
        <span
          style={{
            display: 'block',
            height: '100px',
            color: 'white',
            background: 'red',
          }}
        >
          A long long spin ...
        </span>
      </Spin>
    </Space>
  )
}
