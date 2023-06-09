import type { SVGProps } from 'react'
const SvgSkipBack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="skip-back_svg__feather skip-back_svg__feather-skip-back"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M19 20 9 12l10-8v16zM5 19V5" />
  </svg>
)
export { SvgSkipBack }
