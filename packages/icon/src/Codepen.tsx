import { SVGType } from './type/SVGType'
const Codepen = (props: SVGType<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="codepen_svg__feather codepen_svg__feather-codepen"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m12 2 10 6.5v7L12 22 2 15.5v-7L12 2zM12 22v-6.5" />
    <path d="m22 8.5-10 7-10-7" />
    <path d="m2 15.5 10-7 10 7M12 2v6.5" />
  </svg>
)
export { Codepen }
