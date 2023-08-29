import { FC } from "react"

import { Icon, IconProps } from "./index"

const Automation: FC<IconProps> = ({
  fill,
  filled,
  background,
  stroke,
  size,
  height,
  width,
  className,
  ...props
}) => {
  return (
    <Icon
      className={className}
      fill={filled ? fill : "none"}
      height={size || height || 48}
      viewBox="0 0 48 48"
      width={size || width || 48}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        className="rounded"
        fill={background}
        height={size}
        rx="8"
        width={size}
      />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke={stroke}
        strokeWidth="2"
      />
      <path
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        fillRule="evenodd"
        stroke={stroke}
        strokeWidth={2}
      />
    </Icon>
  )
}

export default Automation
