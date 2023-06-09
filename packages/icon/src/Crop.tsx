import { SVGType } from './type/SVGType'
const Crop = (props: SVGType<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="crop_svg__feather crop_svg__feather-crop"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M6.13 1 6 16a2 2 0 0 0 2 2h15" />
    <path d="M1 6.13 16 6a2 2 0 0 1 2 2v15" />
  </svg>
)
export { Crop }
