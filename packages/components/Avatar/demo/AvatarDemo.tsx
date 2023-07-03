import { Title } from '@components/Typography/Title'
import { Paragraph } from '@components/Typography/Paragraph'
import { Divider } from '@components/Divider'
import { Avatar } from '../Avatar'

export const AvatarDemo = () => {
  return (
    <>
      <Divider>Avatar Src</Divider>
      <Title italic level={4}>
        Avatar Shape
      </Title>
      <Avatar
        src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
        shape="circle"
      />
      <Avatar
        src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
        shape="square"
      />

      <Divider>Avatar Size</Divider>
      <Paragraph code>small</Paragraph>
      <Avatar
        src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
        size={'small'}
      />
      <br />
      <Paragraph code>middle</Paragraph>
      <Avatar
        src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
        size={'middle'}
      />
      <br />
      <Paragraph code>large</Paragraph>
      <Avatar
        src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
        size={'large'}
      />

      <br />
      <Divider>Avatar Icon</Divider>
      <Avatar
        shape="circle"
        icon={
          <img
            src={'packages/components/Avatar/demo/boy.jpg'}
            width={32}
          />
        }
      />
    </>
  )
}
