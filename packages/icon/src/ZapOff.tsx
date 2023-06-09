import type { SVGProps } from 'react'
const SvgZapOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="zap-off_svg__feather zap-off_svg__feather-zap-off"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12.41 6.75 13 2l-2.43 2.92M18.57 12.91 21 10h-5.34M8 8l-5 6h9l-1 8 5-6M1 1l22 22" />
  </svg>
)
export { SvgZapOff }
