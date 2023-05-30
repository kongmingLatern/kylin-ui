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
  const { deleteLine, underline, italic, strong } = props
  return (
    <code
      className={classNames({
        ['kylin-typography-code']: true,
        ['kylin-typography-deleteLine']: deleteLine,
        ['kylin-typography-underline']: underline,
        ['kylin-typography-italic']: italic,
        ['kylin-typography-strong']: strong,
      })}
    >
      {children}
    </code>
  )
}

function renderTitleElement(
  props: TypographyTitleProps,
  children
) {
  const {
    level = 1,
    deleteLine,
    underline,
    italic,
    strong,
  } = props

  const TitleNode = createElement(
    `h${level}`,
    {
      className: classNames({
        [`kylin-typography-title-h${level}`]: level,
        ['kylin-typography-deleteLine']: deleteLine,
        ['kylin-typography-underline']: underline,
        ['kylin-typography-italic']: italic,
        ['kylin-typography-strong']: strong,
      }),
    },
    children
  )

  return TitleNode
}

export { Title }
