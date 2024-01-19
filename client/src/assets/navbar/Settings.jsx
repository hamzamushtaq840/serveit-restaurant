import * as React from "react"
const SvgComponent = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    fill="none"
    {...props}>
    <path
      stroke="#CDD2D6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M8.5 10.625a2.125 2.125 0 1 0 0-4.25 2.125 2.125 0 0 0 0 4.25Z"
    />
    <path
      stroke="#6B6B6B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M1.418 9.123V7.877A1.35 1.35 0 0 1 2.764 6.53c1.282 0 1.806-.907 1.161-2.019a1.345 1.345 0 0 1 .496-1.835l1.226-.7a1.182 1.182 0 0 1 1.615.424l.078.135c.637 1.112 1.685 1.112 2.33 0l.078-.135a1.182 1.182 0 0 1 1.615-.425l1.225.701c.645.369.865 1.198.496 1.835-.644 1.112-.12 2.019 1.162 2.019a1.35 1.35 0 0 1 1.346 1.346v1.246a1.35 1.35 0 0 1-1.346 1.346c-1.282 0-1.806.907-1.162 2.019a1.343 1.343 0 0 1-.496 1.835l-1.225.7a1.182 1.182 0 0 1-1.615-.424l-.078-.135c-.637-1.112-1.686-1.112-2.33 0l-.078.135a1.182 1.182 0 0 1-1.615.425l-1.226-.701a1.345 1.345 0 0 1-.496-1.835c.645-1.112.12-2.019-1.161-2.019a1.35 1.35 0 0 1-1.346-1.346Z"
    />
  </svg>
)
export default SvgComponent
