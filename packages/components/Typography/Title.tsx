import classNames from 'classnames'
import { TypographyTitleProps } from './type'
import { createElement } from 'react'
import { NodeType } from './type/NodeType'
import { TypographyType } from './type/BaseTypography'

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
    deleteLine,
    disabled,
    underline,
    italic,
    strong,
    ellipsis,
    indent,
    type,
    className,
  } = props
  return (
    <code
      className={classNames(
        {
          ['kylin-typography-code']: true,
          [`kylin-typography-type-${type}`]: type,
          ['kylin-typography-deleteLine']: deleteLine,
          ['kylin-typography-underline']: underline,
          ['kylin-typography-disabled']: disabled,
          ['kylin-typography-ellipsis']: ellipsis,
          ['kylin-typography-italic']: italic,
          ['kylin-typography-strong']: strong,
          ['kylin-typography-indent']: indent,
        },
        className
      )}
    >
      {children}
    </code>
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

  const level = getLevel()
  const tag = getTag(level)

  const classes = classNames(
    {
      [`kylin-typography-title-h${level}`]: level,
      [`kylin-typography-type-${type}`]: type,
      ['kylin-typography-deleteLine']: deleteLine,
      ['kylin-typography-underline']: underline,
      ['kylin-typography-ellipsis']: ellipsis,
      ['kylin-typography-disabled']: disabled,
      ['kylin-typography-mark']: mark,
      ['kylin-typography-italic']: italic,
      ['kylin-typography-strong']: strong,
      ['kylin-typography-indent']: indent,
    },
    className
  )

  const TitleNode = createElement(
    tag,
    {
      className: classes !== '' ? classes : undefined,
      onClick: copyable ? handleClick(onClick) : onClick,
    },

    children
  )

  return TitleNode

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
}

export { Title }
