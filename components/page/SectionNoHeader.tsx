import Image from "next/image"
import React, { FC } from "react"

import clsx from "clsx"

import { FadeIn } from "../motion/FadeIn"

type NextImageSrc = Parameters<typeof Image>[0]["src"]

type Props = {
  id: string
  children?: React.ReactNode
  secondary?: React.ReactNode
  image?: NextImageSrc
  width?: number
  height?: number
  isBordered?: boolean
  position: "left" | "right"
  imageClass?: string
}
const SectionNoHeader: FC<Props> = ({
  id,
  children,
  secondary,
  image,
  width,
  height,
  position,
  imageClass,
  isBordered = true,
}) => {
  return (
    <FadeIn>
      <section
        className={clsx("", {
          "relative overflow-hidden pointer-events-non bg-gradient-to-b from-white to-slate-50/50 inset-0 shadow-[inset_0_-1px_1px_rgba(0,0,0,0.06)]":
            isBordered === true,
        })}
        id={id}
      >
        <div
          className={clsx(
            "mx-auto max-w-container px-4 pt-4 pb-4 sm:px-6 lg:flex lg:items-center lg:gap-x-14 lg:px-8",
            {
              "lg:flex-row": position === "left",
              "lg:flex-row-reverse": position === "right",
            }
          )}
        >
          <div
            className="relative z-20 mx-auto max-w-[40rem] pb-16 pt-2 lg:mx-0 lg:w-[40rem] lg:max-w-none lg:flex-none lg:pb-24 lg:pr-4 lg:pt-20"
            id={`${id}_content`}
          >
            {children}
          </div>
          <div className="relative mx-auto flex-shrink-0 max-w-[40rem] lg:max-w-full pb-24 lg:pb-0 lg:pg-0 py-4">
            {image ? (
              <div className="relative ">
                <Image
                  alt={`${id} Image`}
                  className={`${imageClass}`}
                  height={height}
                  src={image}
                  style={{ objectFit: "cover", objectPosition: "left top" }}
                  width={width}
                />
              </div>
            ) : (
              secondary
            )}
          </div>
        </div>
      </section>
    </FadeIn>
  )
}

export default SectionNoHeader
