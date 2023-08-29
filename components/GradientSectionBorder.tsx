import React, { FC } from "react"

import clsx from "clsx"

import { FadeIn } from "./motion/FadeIn"

type Props = {
  children: React.ReactNode
  className?: string
  id?: string
}

const GradientSectionBorder: FC<Props> = ({ children, className, id }) => {
  return (
    <section
      className={clsx("relative overflow-hidden bg-black", className)}
      id={id}
    >
      <FadeIn noVertical viewTriggerOffset>
        <span
          className={clsx(
            "w-full absolute white h-[1px] top-0 opacity-60 gradientSectionBorderDivider"
          )}
        />
        <span
          className={clsx(
            " gradientSectionBorder gradientSectionBorderLeft opacity-50"
          )}
        />
        <span
          className={clsx(
            "gradientSectionBorder gradientSectionBorderRight opacity-50"
          )}
        />
        {children}
      </FadeIn>
    </section>
  )
}

export default GradientSectionBorder
