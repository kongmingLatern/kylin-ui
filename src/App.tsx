import { Button } from '../packages/components'
import ThemeButton from '../packages/components/ThemeProvider/demo/button-theme'
import CommonButton from '../packages/components/button/demo/type'

const App = () => {
  return (
    <div>
      <h1>Type Button</h1>
      <CommonButton />
      <h1>Theme Button</h1>
      <br />
      <ThemeButton />

      <Button bg="red-500">123</Button>
      <Button bg="blue-500">123</Button>
      <Button bg="green-500">123</Button>
    </div>
  )
}

export default App
