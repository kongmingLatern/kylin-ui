import { TypographyTitleProps } from './type'

const Title: React.FC<TypographyTitleProps> = props => {
  return <RenderTitle {...props} />
}

function RenderTitle(
  props: TypographyTitleProps
): JSX.Element | null {
  const { code, level, children } = props
  if (code) {
    return (
      <code className="kylin-typography-code">
        {children}
      </code>
    )
  }
  const TitleNode = renderTitleElement(level, children)
  return TitleNode
}

function renderTitleElement(level = 1, children) {
  // 根据 level 渲染不同的标签
  switch (level) {
    case 1:
      return <h1>{children}</h1>
    case 2:
      return <h2>{children}</h2>
    case 3:
      return <h3>{children}</h3>
    case 4:
      return <h4>{children}</h4>
    case 5:
      return <h5>{children}</h5>
    case 6:
      return <h6>{children}</h6>
    default:
      console.warn(`The level ${level} is not supported.`)
  }
  return null
}

export { Title }
