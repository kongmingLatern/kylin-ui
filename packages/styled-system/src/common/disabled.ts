import { css } from 'styled-components'
import { theme as Theme } from '../theme'

export const setDisabled = () => {
  return css`
    color: ${Theme['color']['disabled']};
    user-select: none;
    cursor: not-allowed;
  `
}
