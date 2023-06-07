import { Title } from '@components/Typography/Title'
import { Text } from '@components/Typography/Text'
import { Divider } from '@components/Divider'
import Avatar from '../Avatar'

export const AvatarDemo = () => {
  return (
    <>
      <Divider>Avatar Src</Divider>
      <Title italic level={4}>
        Avatar
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
      <Text className="text-sm">small</Text>
      <Avatar
        src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
        size={'small'}
      />
      <Text className="text-sm">large</Text>
      <Avatar
        src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
        size={'large'}
      />

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
