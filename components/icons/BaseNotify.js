import * as React from 'react'

function SvgBaseNotify(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 56 56" fill="none" {...props}>
      <g filter="url(#base-notify_svg__filter0_d)">
        <rect width={55.021} height={55.021} rx={4} fill="#4DA1FF" />
      </g>
      <defs>
        <filter
          id="base-notify_svg__filter0_d"
          x={-16}
          y={-15}
          width={89.021}
          height={89.021}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={1} dy={2} />
          <feGaussianBlur stdDeviation={8.5} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

export default SvgBaseNotify
