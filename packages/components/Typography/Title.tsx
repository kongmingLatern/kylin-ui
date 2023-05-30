import classNames from 'classnames'
import { TypographyTitleProps } from './type'
import { createElement } from 'react'

const Title: React.FC<TypographyTitleProps> = props => {
  return <RenderTitle {...props} />
}

function RenderTitle(
  props: TypographyTitleProps
): JSX.Element | null {
  const { code, deleteLine, children } = props
  if (code) {
    return renderCodeElement(deleteLine, children)
  }

  const TitleNode = renderTitleElement(props, children)
  return TitleNode
}

function renderCodeElement(
  deleteLine: boolean | undefined,
  children
): JSX.Element | null {
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
