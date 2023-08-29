import Image from "next/image"
import React, { FC } from "react"

import clsx from "clsx"

import Heading from "./Heading"
import Section from "./Section"

type NextImageSrc = Parameters<typeof Image>[0]["src"]

type Props = {
  id: string
  heading: string
  subHeading: string
  description?: string
  children?: React.ReactNode
  secondary?: React.ReactNode
  image?: NextImageSrc
  width?: number
  height?: number
  position: "left" | "right" | "center"
}

const SectionComp: FC<Props> = ({
  id,
  heading,
  subHeading,
  description,
  children,
  secondary,
  position,
  image,
  width,
  height,
}) => {
  return (
    <Section id={id}>
      <div
        className={clsx(
          `flex flex-col-reverse lg:items-center justify-end lg:gap-x-14 lg:gap-y-16  xl:max-w-none`,
          {
            "lg:flex-row": position === "left",
            "lg:flex-row-reverse": position === "right",
          }
        )}
        id={`${id}_flex`}
      >
        <div className="lg:basis-4/6" id={`${id}_content`}>
          <Heading
            description={description}
            heading={heading}
            subHeading={subHeading}
          />
          {children}
        </div>
        <div className="lg:basis-2/6 flex lg:justify-center" id={`${id}_image`}>
          {image ? (
            <Image
              alt={`${id} Content Image for Buchanan DevOps`}
              className=" w-16 h-16 aspect-1 lg:w-96 lg:h-auto"
              height={height}
              src={image}
              width={width}
            />
          ) : (
            secondary
          )}
        </div>
      </div>
    </Section>
  )
}

export default SectionComp
