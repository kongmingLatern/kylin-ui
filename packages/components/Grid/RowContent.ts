import { createContext } from 'react'
import { RowProps } from './type'

export interface RowContextState {
  gutter?: [number, number]
  wrap?: RowProps['wrap']
  supportFlexGap?: boolean
}

const RowContext = createContext<RowContextState>({})

export default RowContext
