import React, { FC } from "react"

import clsx from "clsx"

import { FadeIn } from "../motion/FadeIn"

type Props = {
  id: string
  className?: string
  children?: React.ReactNode
  isBordered?: boolean
}

const Section: FC<Props> = ({ id, className, children, isBordered = true }) => {
  return (
    <FadeIn>
      <section
        className={clsx("relative", {
          "pointer-events-non bg-gradient-to-b from-white to-slate-50/50 inset-0 shadow-[inset_0_-1px_1px_rgba(0,0,0,0.06)]":
            isBordered === true,
        })}
        id={id}
      >
        <div
          className={clsx(
            "mx-auto w-full max-w-[40rem] lg:max-w-6xl px-4 sm:px-6 lg:px-8 mt-11  pb-20",
            { className }
          )}
          id={`${id}_container`}
        >
          {children}
        </div>
      </section>
    </FadeIn>
  )
}

export default Section
