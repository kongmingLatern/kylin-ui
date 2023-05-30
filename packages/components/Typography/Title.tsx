import classNames from 'classnames'
import { TypographyTitleProps } from './type'
import { createElement } from 'react'

const Title: React.FC<TypographyTitleProps> = props => {
  return <RenderTitle {...props} />
}

function RenderTitle(
  props: TypographyTitleProps
): JSX.Element | null {
  const { code, children } = props
  if (code) {
    return renderCodeElement(props, children)
  }

  const TitleNode = renderTitleElement(props, children)
  return TitleNode
}

function renderCodeElement(
  props: TypographyTitleProps,
  children
): JSX.Element | null {
  const {
    deleteLine,
    disabled,
    underline,
    italic,
    strong,
    ellipsis,
  } = props
  return (
    <code
      className={classNames({
        ['kylin-typography-code']: true,
        ['kylin-typography-deleteLine']: deleteLine,
        ['kylin-typography-underline']: underline,
        ['kylin-typography-disabled']: disabled,
        ['kylin-typography-ellipsis']: ellipsis,
        ['kylin-typography-italic']: italic,
        ['kylin-typography-strong']: strong,
      })}
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

function renderTitleElement(
  props: TypographyTitleProps,
  children
) {
  const {
    level = 1,
    copyable,
    disabled,
    deleteLine,
    underline,
    italic,
    ellipsis,
    strong,
    mark,
    onClick,
  } = props

  const TitleNode = createElement(
    `h${level}`,
    {
      className: classNames({
        [`kylin-typography-title-h${level}`]: level,
        ['kylin-typography-deleteLine']: deleteLine,
        ['kylin-typography-underline']: underline,
        ['kylin-typography-ellipsis']: ellipsis,
        ['kylin-typography-disabled']: disabled,
        ['kylin-typography-mark']: mark,
        ['kylin-typography-italic']: italic,
        ['kylin-typography-strong']: strong,
      }),
      onClick: copyable ? handleClick(onClick) : onClick,
    },
    children
  )

  return TitleNode
}

export { Title }
