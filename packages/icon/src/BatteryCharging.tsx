import type { SVGProps } from 'react'
const SvgBatteryCharging = (
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
    className="battery-charging_svg__feather battery-charging_svg__feather-battery-charging"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19M23 13v-2M11 6l-4 6h6l-4 6" />
  </svg>
)
export { SvgBatteryCharging }
