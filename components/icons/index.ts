export interface IconProps {
  fill?: string
  filled?: boolean
  background?: string
  stroke?: string
  size?: string | number
  height?: string | number
  width?: string | number
  label?: string
  onClick?: () => void
  className?: string
}

export const Icon = "svg"

export { default as ArrowLeft } from "./ArrowLeft"
export { default as ArrowRight } from "./ArrowRight"
export { default as Automation } from "./Automation"
export { default as Code } from "./Code"
export { default as GamingConsole } from "./GamingConsole"
export { default as Html } from "./Html"
export { default as Insights } from "./Insights"
export { default as Reporting } from "./Reporting"
export { default as NextJs } from "./NextJsLogo"
export { default as Scale } from "./Scale"
export { default as Stack } from "./Stack"
export { default as Star } from "./Star"
export { default as Typescript } from "./Typescript"
