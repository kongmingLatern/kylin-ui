import { Title, Text } from '@components/Typography'
import { Divider } from '../Divider'

const DividerDemo = () => {
  return (
    <>
      <Title>Type</Title>
      <Divider type="horizontal">horizonal</Divider>
      <Text>leftText</Text>
      <Divider type="vertical" />
      <Text>rightText</Text>
      <Title>orientation</Title>
      <Divider orientation="left">orientation_left</Divider>
      <Divider orientation="center">
        orientation_center
      </Divider>
      <Divider orientation="right">
        orientation_right
      </Divider>
      <Title>orientationMargin</Title>
      <Divider orientationMargin="0">
        Default orientation=0
      </Divider>
      <Divider orientationMargin="2" orientation="left">
        Left orientation=2
      </Divider>
      <Divider orientation="right" orientationMargin="0">
        Right orientation=2
      </Divider>
      <Divider orientation="right" orientationMargin={50}>
        Right Text with 50px orientationMargin
      </Divider>
      <Title>dashed</Title>
      <Divider dashed />
      <Title>plain</Title>
      <Divider plain>This is a plain text</Divider>
    </>
  )
}
export { DividerDemo }
