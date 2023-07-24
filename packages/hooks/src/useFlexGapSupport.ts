import * as React from 'react'
import { detectFlexGapSupported } from '../styleChecker'

export function useFlexGapSupport() {
  const [flexible, setFlexible] = React.useState(false)
  React.useEffect(() => {
    setFlexible(detectFlexGapSupported())
  }, [])

  return flexible
}
