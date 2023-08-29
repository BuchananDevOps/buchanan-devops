import { FC } from "react"

import clsx from "clsx"

import { FadeIn } from "../motion/FadeIn"
import Heading from "./Heading"

type Props = {
  id: string
  heading: string
  subHeading: string
  description?: string
  children?: React.ReactNode
}

const SectionCenter: FC<Props> = ({
  id,
  heading,
  subHeading,
  description,
  children,
}) => {
  return (
    <section className={clsx("relative overflow-hidden bg-black")} id={id}>
      <FadeIn noVertical viewTriggerOffset>
        <span
          className={clsx(
            "w-full absolute white h-[1px] top-0 opacity-60 gradientSectionBorderDivider"
          )}
        />
        <span
          className={clsx(
            "gradientSectionBorder gradientSectionBorderLeft opacity-50"
          )}
        />
        <span
          className={clsx(
            "gradientSectionBorder gradientSectionBorderRight opacity-50"
          )}
        />
        <div
          className={clsx(
            "mx-auto max-w-container px-4 pt-4 sm:px-6 lg:flex lg:items-center lg:justify-center lg:gap-x-14 lg:px-8"
          )}
        >
          <div
            className="relative z-20 mx-auto max-w-[40rem] pb-16 pt-16 lg:mx-0 lg:w-[40rem] lg:max-w-none lg:flex-none lg:pb-24 lg:pr-4 lg:pt-20"
            id={`${id}_content`}
          >
            <Heading
              isDark
              description={description}
              heading={heading}
              subHeading={subHeading}
            />
            {children}
          </div>
        </div>
      </FadeIn>
    </section>
  )
}

export default SectionCenter
