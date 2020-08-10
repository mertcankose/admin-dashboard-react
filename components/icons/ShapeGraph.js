import * as React from 'react'

function SvgShapeGraph(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 280 84" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.996 29.306s33.105 9.772 43.533 1.338c10.43-8.435 15.528-18.193 22.838-13.902 7.31 4.29 17.947 19.397 28.546 15.24 10.6-4.157 25.149-17.802 38.538-14.49 13.39 3.314 17.313 12.569 27.12 9.138 9.807-3.43 15.901-30.349 30.688-24.906 14.786 5.443 21.069 18.828 32.115 18.886 11.045.057 6.774 14.022 17.841 9.648 11.068-4.374 21.14-7 27.12 9.082 5.979 16.083.713 43.48.713 43.48L2 76.799l4.996-47.493z"
        fill="url(#ShapeGraph_svg__paint0_linear)"
        stroke="#0AF"
        strokeOpacity={0.8}
        strokeWidth={2}
      />
      <defs>
        <linearGradient
          id="ShapeGraph_svg__paint0_linear"
          x1={-306.462}
          y1={-216.93}
          x2={-306.462}
          y2={47.649}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00ACFF" />
          <stop offset={1} stopColor="#00ACFF" stopOpacity={0.01} />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default SvgShapeGraph
