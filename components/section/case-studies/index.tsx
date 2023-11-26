import { FC } from "react"

import clsx from "clsx"

import { FadeIn } from "@/components/motion/FadeIn"
import Heading from "@/components/page/Heading"
import { cases } from "@/lib/caseStudies"

import CaseStudy from "./case-study"

const CaseStudies: FC = () => {
  return (
    <section
      className={clsx("relative overflow-hidden bg-black")}
      id="case-studies"
    >
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
            id={`case-studies_content`}
          >
            <Heading
              isDark
              className="text-center"
              description="Explore real-world examples showcasing the transformative impact of our projects, revealing a commitment to excellence and genuine expertise in web design, e-commerce, SEO, and beyond."
              heading="Success Stories"
              subHeading="Showcasing the Achievements of Our Valued Clients"
            />
          </div>
        </div>
        <div className=" mx-auto max-w-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {cases.map(({ ...props }) => (
            <CaseStudy key={props.id} {...props} />
          ))}
        </div>
      </FadeIn>
    </section>
  )
}

export default CaseStudies
