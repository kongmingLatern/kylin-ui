import { InputProps } from './InputProps'

export interface PasswordProps extends InputProps {
  showPassword?: boolean
  onShowPassword?: (
    showPassword: boolean,
    fn?: Function
  ) => void
}
