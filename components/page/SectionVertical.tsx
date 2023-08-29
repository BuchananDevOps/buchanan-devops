import Link from "next/link"
import React, { FC } from "react"

import clsx from "clsx"

import Heading from "./Heading"

type Props = {
  id?: string
  heading: string
  subHeading?: string
  description?: string
  button?: {
    name: string
    route: string
  }
  icon?: React.ReactNode
  className?: string
  background?: string
  children?: React.ReactNode
  isBordered?: boolean
}

const SectionVertical: FC<Props> = ({
  id,
  heading,
  subHeading,
  description,
  button,
  children,
  isBordered,
  icon,
}) => {
  return (
    <section
      className={clsx(
        "relative bg-black bg-gradient-to-r from-gray-850 to-gray-900 shadow-black/45",
        {
          "relative overflow-hidden pointer-events-non bg-gradient-to-b from-white to-slate-50/50 inset-0 shadow-[inset_0_-1px_1px_rgba(0,0,0,0.06)]":
            isBordered === true,
        }
      )}
      id={id}
    >
      <div
        className={clsx(
          "mx-auto max-w-6xl px-4 pt-4 sm:px-6 lg:flex lg:flex-col  lg:gap-x-14 lg:px-8"
        )}
      >
        <div
          className="relative z-20 max-w-3xl pb-16 pt-16 lg:mx-0  lg:flex-col lg:pb-24 lg:pr-4 lg:pt-20"
          id={`${id}_heading`}
        >
          {icon && <div className="mb-4">{icon}</div>}
          <Heading
            isDark
            description={description}
            heading={heading}
            subHeading={subHeading}
          />
          {button && (
            <div className="mt-8">
              <Link
                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-700 text-slate-100 hover:bg-slate-600 hover:text-white focus:ring-slate-500"
                href={button.route}
                title={button.name}
              >
                {button.name}
                <svg
                  className="overflow-visible ml-3  text-slate-500 group-hover:text-slate-400"
                  fill="none"
                  height="6"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 3 6"
                  width="3"
                >
                  <path d="M0 0L3 3L0 6" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>
      {children ? (
        <div className={clsx(``)} id={`${id}_content}`}>
          {children}
        </div>
      ) : null}
    </section>
  )
}

export default SectionVertical
