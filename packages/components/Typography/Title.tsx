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
  const { deleteLine } = props
  return (
    <code
      className={classNames({
        ['kylin-typography-code']: true,
        ['kylin-typography-deleteLine']: deleteLine,
      })}
    >
      {children}
    </code>
  )
}

function renderTitleElement(
  { level = 1, deleteLine }: TypographyTitleProps,
  children
) {
  const TitleNode = createElement(
    `h${level}`,
    {
      className: classNames({
        [`kylin-typography-title-h${level}`]: level,
        ['kylin-typography-deleteLine']: deleteLine,
      }),
    },
    children
  )

  return TitleNode
}

export { Title }
