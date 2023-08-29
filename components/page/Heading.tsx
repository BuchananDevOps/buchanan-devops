import Link from "next/link"
import { FC } from "react"

import clsx from "clsx"

type Props = {
  heading: string
  subHeading?: string
  description?: string
  button?: {
    name: string
    route: string
  }
  isDark?: boolean
}

const Heading: FC<Props> = ({
  heading,
  subHeading,
  description,
  button,
  isDark = false,
}) => {
  return (
    <div className="">
      <h2
        className={clsx("text-base font-semibold leading-7", {
          "text-sky-500": isDark === false,
          "text-green-400": isDark === true,
        })}
      >
        {heading}
      </h2>
      <p
        className={clsx(
          "mt-4 text-3xl font-extrabold tracking-[-0.04em] text-black sm:text-5xl sm:leading-[3.5rem]",
          {
            "text-slate-900": isDark == false,
            "text-white": isDark === true,
          }
        )}
      >
        {subHeading}
      </p>
      {description ? (
        <p
          className={clsx("mt-4 space-y-6", {
            "text-slate-700 font-light text-[15px]": isDark === false,
            "text-slate-400 font-normal": isDark === true,
          })}
        >
          {description}
        </p>
      ) : null}
      {button && (
        <Link
          className={clsx(
            "inline-flex justify-center rounded-lg text-sm font-semibold mt-4 py-3 px-4 ",
            {
              "bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15":
                isDark === false,
              "bg-white/0 text-slate-200 ring-1 ring-slate-200/25 hover:bg-white/10 hover:text-slate-200 hover:ring-slate-200/15 ":
                isDark === true,
            }
          )}
          href={button.route}
          title={button.name}
        >
          {button.name}
        </Link>
      )}
    </div>
  )
}

export default Heading
