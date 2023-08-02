import { TypographyTitleProps } from './type'
import { NodeType } from './type/NodeType'
import { TypographyType } from './type/BaseTypography'
import {
  CodeContainer,
  TypographyContainer,
} from './styled'

const Title: React.FC<TypographyType> = props => {
  return <RenderTitle {...props} />
}

function RenderTitle(
  props: TypographyType
): JSX.Element | null {
  const { code, children } = props
  if (code) {
    return renderCodeElement(props, children)
  }

  const element = renderElement(props, children)
  return element
}

function renderCodeElement(
  props: TypographyType,
  children
): JSX.Element | null {
  const {
    type,
    deleteLine,
    underline,
    disabled,
    italic,
    ellipsis,
    copyable,
    strong,
    indent,
    className,
  } = props

  return (
    <CodeContainer
      className={className}
      type={type}
      $deleteLine={deleteLine}
      $underline={underline}
      $disabled={disabled}
      $italic={italic}
      $ellipsis={ellipsis}
      $strong={strong}
      $indent={indent}
      onClick={
        copyable
          ? handleClick(props.onClick)
          : props.onClick
      }
    >
      {children}
    </CodeContainer>
  )
}

function handleClick(callback) {
  return async (
    e: React.MouseEvent<HTMLHeadingElement>
  ) => {
    const textContent = e.currentTarget.textContent
    await navigator.clipboard.writeText(
      textContent as string
    )
    callback?.(e)
  }
}

function renderElement(props: TypographyType, children) {
  const {
    _type = NodeType.TITLE,
    type,
    copyable,
    disabled,
    deleteLine,
    underline,
    italic,
    ellipsis,
    strong,
    mark,
    indent,
    onClick,
    className,
  } = props

  function getTag(level) {
    return _type === NodeType.TITLE
      ? `h${level}`
      : _type === NodeType.TEXT
      ? 'span'
      : 'p' // NOTE: 该情况为 Paragraph
  }

  function getLevel() {
    return _type === NodeType.TITLE
      ? (props as TypographyTitleProps).level
        ? (props as TypographyTitleProps)?.level
        : 1
      : undefined
  }

  const level = getLevel()
  const tag = getTag(level)
  const Container = TypographyContainer(tag)

  return (
    <Container
      className={className}
      level={level}
      type={type}
      $deleteLine={deleteLine}
      $underline={underline}
      $disabled={disabled}
      $italic={italic}
      $ellipsis={ellipsis}
      $strong={strong}
      $indent={indent}
      $mark={mark}
      onClick={copyable ? handleClick(onClick) : onClick}
    >
      {children}
    </Container>
  )
}

export { Title }
