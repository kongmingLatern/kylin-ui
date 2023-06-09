import type { SVGProps } from 'react'
const SvgServer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="server_svg__feather server_svg__feather-server"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect width={20} height={8} x={2} y={2} rx={2} ry={2} />
    <rect
      width={20}
      height={8}
      x={2}
      y={14}
      rx={2}
      ry={2}
    />
    <path d="M6 6h.01M6 18h.01" />
  </svg>
)
export { SvgServer }
