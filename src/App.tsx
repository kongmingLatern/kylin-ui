import ThemeButton from '@packages/components/ThemeProvider/demo/button-theme'
import CommonButton from '@components/Button/demo/button'
import { ButtonGroupDemo } from '@components/Button/demo/button-group'
import { TitleDemo } from '@components/Typography/demo/Title'
import { TextDemo } from '@components/Typography/demo/Text'
import { ParagraphDemo } from '@components/Typography/demo/Paragraph'
import { Title } from '@components/Typography'
import { DividerDemo } from '@components/Divider/demo/divider'

const App = () => {
	return (
		<>
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
			<CommonButton />
			<br />
			<Title mark>ButtonGroupDemo</Title>
			<ButtonGroupDemo />
			<br />
			<ThemeButton />
			<br />
		</>
	)
}

export default App
