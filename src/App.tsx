import ThemeButton from '@packages/components/ThemeProvider/demo/button-theme'
import { ButtonDemo } from '@components/Button/demo/button'
import { ButtonGroupDemo } from '@components/Button/demo/button-group'
import { TitleDemo } from '@components/Typography/demo/Title'
import { TextDemo } from '@components/Typography/demo/Text'
import { ParagraphDemo } from '@components/Typography/demo/Paragraph'
import { Title } from '@components/Typography'
import { DividerDemo } from '@components/Divider/demo/divider'
import { SpaceDemo } from '@components/Space/demo/SpaceDemo'
import { AvatarDemo } from '@components/Avatar/demo/AvatarDemo'
import { RenderIcon } from '@icon/src/demo'
import { BadgeDemo } from '@components/Badge/demo/badgeDemo'
import { SpinDemo } from '@components/Spin/demo/SpinDemo'
import { TagDemo } from '@components/Tag/demo/TagDemo'
import { CardDemo } from '@components/Card/demo/CardDemo'
import { ImageDemo } from '@components/Image/demo/ImageDemo'
import { Button } from '@components/Button'
import { message } from '@components/Message'

const App = () => {
  return (
    <>
      <Button
        onClick={() =>
          message.success('This is a success message')
        }
      >
        Success
      </Button>
      <Button
        type="error"
        onClick={() =>
          message.error('This is an error message')
        }
      >
        Error
      </Button>
      <Button
        type="secondary"
        onClick={() =>
          message.warn('This is a warn message')
        }
      >
        Warn
      </Button>
      <Button
        type="info"
        onClick={() =>
          message.info('This is an info message')
        }
      >
        Info
      </Button>
      {/* <Title mark>Avatar</Title>
      <AvatarDemo /> */}
      {/* <Title mark>Card</Title>
      <CardDemo />
      <Title mark>Spin</Title>
      <SpinDemo />
      <Title mark>Image</Title>
      <ImageDemo /> */}
      {/* <Title mark>Tag</Title>
      <TagDemo /> */}
      {/* <br />
      <Title mark>Badge</Title>
      <BadgeDemo />
      <br />
      <Title mark>Icon</Title>
      <RenderIcon />
      <br />
      <br />
      <Title mark>Space</Title>
      <SpaceDemo />
      <br />
      <Title mark>Divider</Title>
      <DividerDemo />
      <br />
      <Title mark>ParagraphDemo</Title>
      <ParagraphDemo />
      <br />
      <Title mark>TextDemo</Title>
      <TextDemo />
      <br />
      <Title mark>TitleDemo</Title>
      <TitleDemo />
      <br />
      <Title mark>ButtonDemo</Title>
      <ButtonDemo />
      <br />
      <Title mark>ButtonGroupDemo</Title>
      <ButtonGroupDemo />
      <br />
      <ThemeButton />
      <br /> */}
    </>
  )
}

export default App
