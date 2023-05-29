import ThemeButton from '@packages/components/ThemeProvider/demo/button-theme'
import CommonButton from '@components/button/demo/button'
import { ButtonGroupDemo } from '@components/button/demo/button-group'

const App = () => {
  return (
    <>
      <CommonButton />
      <br />
      <ButtonGroupDemo />
      <br />
      <ThemeButton />
      <br />
    </>
  )
}

export default App
