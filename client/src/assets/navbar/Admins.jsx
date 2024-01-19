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
      d="M8.584 9.053a.681.681 0 0 0-.17 0 2.32 2.32 0 0 1 .085-4.64 2.32 2.32 0 0 1 .085 4.64ZM13.275 13.727A7.037 7.037 0 0 1 8.5 15.583a7.037 7.037 0 0 1-4.774-1.856c.07-.665.495-1.317 1.253-1.827 1.941-1.29 5.114-1.29 7.041 0 .758.51 1.183 1.162 1.254 1.827Z"
    />
    <path
      stroke="#6B6B6B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.501 15.583a7.083 7.083 0 1 0 0-14.166 7.083 7.083 0 0 0 0 14.166Z"
    />
  </svg>
)
export default SvgComponent
