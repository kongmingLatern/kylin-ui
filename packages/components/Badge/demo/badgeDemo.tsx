import { Space } from '@components/Space'
import { Badge } from '../Badge'
import Avatar from '@components/Avatar/Avatar'
import { Layout } from '@packages/icon'

export const BadgeDemo = () => {
  return (
    <Space size={20}>
      <Badge
        text="1"
        size="small"
        shape="circle"
        offset={['-.8rem', '-.6rem']}
        bgColor="red"
      >
        <Avatar
          src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
          shape="circle"
          size={'large'}
        />
      </Badge>

      <Badge
        text="999+"
        size="small"
        shape="square"
        offset={['-.8rem', '-1.5rem']}
        bgColor="red"
      >
        <Avatar
          src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
          shape="circle"
          size={'small'}
        />
      </Badge>

      <Badge
        text="999+"
        shape="rounded"
        offset={['-.8rem', '-1rem']}
        bgColor="blue"
      >
        <Avatar
          src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
          shape="circle"
          size={'large'}
        />
      </Badge>

      <Badge
        text={<Layout width={20} />}
        offset={['-.7rem', '-.5rem']}
      >
        <Avatar
          src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
          shape="circle"
          size={'large'}
        />
      </Badge>
    </Space>
  )
}
