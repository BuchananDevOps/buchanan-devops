import Image from "next/image"
import { FC } from "react"

import { process } from "@/lib/process"

import Section from "../page/Section"

const DesignProcess: FC = () => {
  return (
    <Section className="" id={"keynotes"}>
      <div className="relative z-20 sm:z-auto">
        <div className="mx-auto max-w-container px-4 pb-16 sm:px-6 lg:px-8">
          <div className="relative mx-auto grid max-w-[40rem] grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {process.map(({ image, title, description }) => (
              <div key={title} className="flex">
                <div className="p-0.5">
                  <Image
                    alt={`Design Process ${title} Image`}
                    className="h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-sky-500/[.12]"
                    height={250}
                    src={image}
                    width={250}
                  />
                </div>
                <div className="ml-6">
                  <h2 className="text-sm font-semibold leading-6 text-slate-900">
                    {title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default DesignProcess
