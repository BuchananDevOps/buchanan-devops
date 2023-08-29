import React, { FC } from "react"

import clsx from "clsx"

type Props = {
  heading?: string
  description?: string
  className?: string
  children?: React.ReactNode
}

const FormContainer: FC<Props> = ({
  heading,
  description,
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        "relative z-10 -mx-4 bg-[radial-gradient(164.75%_100%_at_50%_0%,#334155_0%,#0F172A_48.73%)] px-5 py-10 shadow-lg sm:mx-0 sm:rounded-3xl sm:px-10",
        className
      )}
    >
      <div className="flex">
        <svg
          className="h-14 w-14 flex-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="21"
            cy="26"
            fill="#94A3B8"
            fillOpacity=".2"
            r="4.25"
            stroke="#94A3B8"
            strokeWidth="1.5"
          />
          <path
            d="M15.318 43.465c-.972-.798-1.374-2.073-1.196-3.318l.03-.207A6.918 6.918 0 0 1 21 34c3.443 0 6.389 2.717 6.875 6.125l.463-4.162a6.704 6.704 0 0 1 13.325 0l.457 4.112c.132 1.19-.26 2.394-1.172 3.169A19.92 19.92 0 0 1 28 48a19.918 19.918 0 0 1-12.682-4.535Z"
            fill="#94A3B8"
            fillOpacity=".2"
          />
          <path
            d="m14.152 39.94.742.106-.742-.106Zm13.723.185-.742.106a.75.75 0 0 0 1.488-.023l-.746-.083Zm.463-4.162-.746-.083.746.083Zm13.325 0 .745-.083-.745.083Zm.457 4.112-.746.083.746-.083Zm-1.172 3.169-.486-.572.486.572Zm-25.63.221-.476.58.476-.58Zm-1.909-3.631-.03.207 1.486.212.03-.207-1.486-.212ZM21 33.25a7.668 7.668 0 0 0-7.59 6.584l1.484.212A6.168 6.168 0 0 1 21 34.75v-1.5Zm7.618 6.769C28.082 36.266 24.84 33.25 21 33.25v1.5c3.046 0 5.695 2.418 6.133 5.481l1.485-.212Zm-1.026-4.139-.462 4.162 1.49.166.463-4.162-1.49-.166ZM35 29.25a7.454 7.454 0 0 0-7.408 6.63l1.491.166A5.954 5.954 0 0 1 35 30.75v-1.5Zm7.408 6.63A7.454 7.454 0 0 0 35 29.25v1.5a5.954 5.954 0 0 1 5.918 5.296l1.49-.166Zm.457 4.112-.457-4.111-1.49.165.456 4.112 1.491-.166Zm-2.403 2.68A19.17 19.17 0 0 1 28 47.25v1.5a20.67 20.67 0 0 0 13.434-4.935l-.972-1.143ZM28 47.25a19.167 19.167 0 0 1-12.206-4.364l-.952 1.159A20.668 20.668 0 0 0 28 48.75v-1.5Zm13.374-7.092c.11.981-.218 1.925-.912 2.514l.972 1.143c1.13-.96 1.587-2.426 1.431-3.823l-1.49.166ZM13.38 40.04c-.209 1.462.257 3.014 1.462 4.004l.952-1.16c-.738-.605-1.076-1.604-.93-2.632l-1.484-.212Z"
            fill="#94A3B8"
          />
          <circle
            cx="34.5"
            cy="21.5"
            fill="#94A3B8"
            fillOpacity=".2"
            r="4.75"
            stroke="#94A3B8"
            strokeWidth="1.5"
          />
          <path
            d="M10.676 38A19.908 19.908 0 0 1 8 28C8 16.954 16.954 8 28 8s20 8.954 20 20c0 3.643-.974 7.058-2.676 10"
            stroke="#94A3B8"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
        </svg>
        <div className="ml-4">
          <h2 className="text-base font-semibold leading-7 text-white">
            {heading}
          </h2>
          <p className="text-sm leading-6 text-slate-400">{description}</p>
        </div>
      </div>
      <div className="relative -mx-5 mt-8 flex flex-col bg-slate-700/25 px-5 py-8 ring-1 ring-slate-700/50 sm:mx-0 sm:rounded-2xl">
        {children}
      </div>
    </div>
  )
}

export default FormContainer
