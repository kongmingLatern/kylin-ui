interface IconProps {
  icon: React.ReactNode
}

const Icon = (props: IconProps) => {
  const { icon } = props
  return <>{icon}</>
}

export { Icon }
