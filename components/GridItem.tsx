import Image from "next/image"
import React, { FC } from "react"

type Props = {
  name: string
  text: string
  icon?: any
  className?: string
}

const GridItem: FC<Props> = ({ name, text, icon, className }) => {
  return (
    <div
      className={`flex ${icon ? "flex-row" : "flex-col"} ${className}`}
      id={`grid-item`}
    >
      {icon ? (
        <div className="p-0.5">
          <div className="h-10 w-10 flex place-items-center justify-center shrink-0 transform-cpu shadow-md shadow-sky-500/[.12] bg-sky-50 border-sky-500 border-2 rounded-lg">
            <Image
              alt={`${name} Grid Item Icon`}
              className="w-8 h-8 shrink-0 transform-cpu text-sky-500 fill-sky-500"
              height={24}
              src={icon}
              width={24}
            />
          </div>
        </div>
      ) : null}
      <div className={`${icon ? "ml-3" : null}`} id={"grid-item_info"}>
        <h3
          className=" text-base font-semibold leading-6 text-slate-900"
          id={"grid-item_name"}
        >
          {name}
        </h3>
        <p className=" text-sm leading-6 text-slate-700" id={"grid-item_text"}>
          {text}
        </p>
      </div>
    </div>
  )
}

export default GridItem
