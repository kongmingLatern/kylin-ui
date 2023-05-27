import { Button } from '../button'

const ButtonType = () => {
  return (
    <>
      <Button type="primary">123123</Button>
      <Button type="secondary">123123</Button>

      <Button color="green">123</Button>
      <Button color="green" bg="blue" hover="yellow">
        123
      </Button>

      <h1>block</h1>
      <Button p={5} block>
        123
      </Button>
      <h1>ghost</h1>
      <Button ghost>12313</Button>
      <h1>Size</h1>
      <Button size={'small'}>123</Button>
      <h1>loading</h1>
      <Button
        beforeIcon={<div>BeforeIcon</div>}
        afterIcon={<a className="color-green">RightIcon</a>}
      >
        123123
      </Button>
      <Button loading>123</Button>

      {/* ==================== Props ==================== */}
      {/* TODO: */}
      {/* <Button
        type="primary"
        disabled
        icon={'icon'}
        loading={true}
        href={'www.baidu.com'}
        shape='circle'
        value={'value'}
      /> */}
    </>
  )
}

export default ButtonType
