import { useState } from 'react'
import { Button } from '../Button'

const ButtonType = () => {
  const [loading, setLoading] = useState({
    delay: 0,
  })

  const handleClick = () => {
    setLoading({
      delay: 2000,
    })
  }

  return (
    <>
      <h1>Type</h1>
      <Button
        mr={2}
        className="font-bold uppercase text-sm"
      >
        Default
      </Button>
      <Button
        type="primary"
        mr={2}
        className="font-bold uppercase text-sm"
      >
        Primary
      </Button>
      <Button
        type="secondary"
        mr={2}
        className="font-bold uppercase text-sm"
      >
        Secondary
      </Button>
      <Button
        type="success"
        mr={2}
        className="font-bold uppercase text-sm"
      >
        Success
      </Button>
      <Button
        type="info"
        mr={2}
        className="font-bold uppercase text-sm"
      >
        Info
      </Button>

      <h1>block</h1>
      <Button p={3} block>
        block
      </Button>

      <h1>ghost</h1>
      <Button ghost>ghost</Button>

      <h1>disabled</h1>
      <Button disabled>disabled</Button>

      <h1>Size</h1>
      <Button size={'small'} mr={2}>
        small
      </Button>
      <Button size={'middle'} mr={2}>
        middle
      </Button>
      <Button size={'large'} mr={2}>
        large
      </Button>

      <h1>loading</h1>
      <Button loading>123</Button>
      <Button
        loading={{
          delay: 2000,
        }}
      >
        loading 2s
      </Button>

      <h1>Icon</h1>
      <Button
        beforeIcon={<div>BeforeIcon</div>}
        afterIcon={<a className="color-green">RightIcon</a>}
      >
        123123
      </Button>

      <h1>onClick</h1>

      <Button
        onClick={() => handleClick()}
        loading={loading}
      >
        click me to load 2s
      </Button>
    </>
  )
}

export default ButtonType
