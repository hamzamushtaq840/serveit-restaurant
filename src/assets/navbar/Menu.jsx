import * as React from "react"
const SvgComponent = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    fill="none"
    {...props}>
    <path
      stroke="#6B6B6B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.436 15.583H3.52c-2.125 0-2.125-.956-2.125-2.125v-.708a.71.71 0 0 1 .708-.708h12.75a.71.71 0 0 1 .708.708v.708c0 1.169 0 2.125-2.125 2.125ZM14.677 9.208v2.834H2.317V9.208a5.667 5.667 0 0 1 5.666-5.666H9.01a5.667 5.667 0 0 1 5.667 5.667Z"
    />
    <path
      stroke="#6B6B6B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.272 3.187c0 .17-.021.326-.064.482a5.535 5.535 0 0 0-1.197-.127H7.984c-.41 0-.807.042-1.19.127a1.797 1.797 0 0 1-.064-.482 1.771 1.771 0 0 1 3.542 0Z"
    />
    <path
      stroke="#CDD2D6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.625 7.792h-4.25"
    />
  </svg>
)
export default SvgComponent
