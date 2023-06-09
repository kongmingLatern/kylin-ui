import { SVGType } from './type/SVGType'
const CreditCard = (props: SVGType<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="credit-card_svg__feather credit-card_svg__feather-credit-card"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={22}
      height={16}
      x={1}
      y={4}
      rx={2}
      ry={2}
    />
    <path d="M1 10h22" />
  </svg>
)
export { CreditCard }
