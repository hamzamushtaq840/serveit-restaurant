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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12.75 13.36h-.538c-.567 0-1.105.219-1.502.615l-1.211 1.197a1.432 1.432 0 0 1-2.005 0l-1.211-1.197a2.128 2.128 0 0 0-1.502-.616H4.25a2.113 2.113 0 0 1-2.125-2.104V3.527c0-1.161.95-2.103 2.125-2.103h8.5c1.176 0 2.125.942 2.125 2.103v7.728c0 1.155-.95 2.104-2.125 2.104Z"
    />
    <path
      stroke="#CDD2D6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.502 7.083a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3ZM11.335 11.092c0-1.275-1.268-2.309-2.834-2.309-1.565 0-2.833 1.034-2.833 2.31"
    />
  </svg>
)
export default SvgComponent
