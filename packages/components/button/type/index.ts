import { AnchorButtonProps } from "./AnchorButtonProps";
import { NativeButtonProps } from "./NativeButtonProps";

const ButtonTypes = ['default', 'primary', 'ghost', 'dashed', 'link', 'text'] as const;
export type ButtonType = typeof ButtonTypes[number];

const ButtonHTMLTypes = ['submit', 'button', 'reset'] as const;
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];


export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;

export type CompoundedComponent = React.ForwardRefExoticComponent<
  ButtonProps & React.RefAttributes<HTMLElement>
> & {
  /** @internal */
  __KYLIN_BUTTON: boolean;
};