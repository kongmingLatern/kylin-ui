import { Title } from '@components/Typography/Title'
import Avatar from '../Avatar'
import { Divider } from '@components/Divider'

export const AvatarDemo = () => {
  return (
    <>
      <Divider>Avatar Src</Divider>
      <Title italic level={4}>
        Avatar
      </Title>
      <Avatar
        src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
        shape="square"
      />

      <Divider>Avatar Src</Divider>
      <Avatar
        src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
        size={40}
      />
    </>
  )
}
