import type { SVGProps } from 'react'
const SvgDivideSquare = (
  props: SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="divide-square_svg__feather divide-square_svg__feather-divide-square"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={18}
      height={18}
      x={3}
      y={3}
      rx={2}
      ry={2}
    />
    <path d="M8 12h8M12 16h0M12 8h0" />
  </svg>
)
export { SvgDivideSquare }
