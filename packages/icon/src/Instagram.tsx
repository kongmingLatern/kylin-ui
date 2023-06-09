import type { SVGProps } from 'react'
const SvgInstagram = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="instagram_svg__feather instagram_svg__feather-instagram"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={20}
      height={20}
      x={2}
      y={2}
      rx={5}
      ry={5}
    />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
  </svg>
)
export { SvgInstagram }
