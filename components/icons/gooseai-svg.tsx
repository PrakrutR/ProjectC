import { FC } from "react"

interface GooseAISVGProps {
  height?: number
  width?: number
  className?: string
}

export const GooseAISVG: FC<GooseAISVGProps> = ({
  height = 40,
  width = 40,
  className
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      role="img"
    >
      <g
        transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M1583 1846 c-144 -133 -376 -463 -479 -681 -73 -154 -76 -138 72
        -316 329 -395 470 -495 668 -473 l58 7 -5 34 c-11 66 -118 265 -247 458 l-47
        70 63 220 c109 376 124 441 124 530 -1 121 -38 190 -112 201 -31 6 -40 1 -95
        -50z"
        />
        <path
          d="M890 1620 c-155 -21 -345 -155 -527 -370 -97 -115 -230 -334 -313
        -519 l-51 -113 3 -237 3 -238 30 -48 c53 -86 69 -90 367 -93 l257 -3 16 35
        c27 57 179 192 354 316 190 134 261 188 261 200 0 5 -62 60 -137 122 -232 191
        -303 269 -303 335 0 77 94 248 181 330 24 23 85 73 136 112 50 39 94 75 97 80
        9 14 -68 57 -134 74 -71 20 -171 27 -240 17z m-253 -448 c126 -89 45 -290
        -108 -269 -142 19 -175 215 -47 281 43 22 116 16 155 -12z"
        />
      </g>
    </svg>
  )
}
