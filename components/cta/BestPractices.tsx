import Image from "next/image"
import { FC } from "react"

import Section from "../page/Section"

const BestPractices: FC = () => {
  return (
    <Section id="best-practices" isBordered={false}>
      <h2 className="text-slate-900 text-center text-4xl tracking-tight font-extrabold sm:text-5xl dark:text-white">
        Is your website generating revenue?
      </h2>
      <figure>
        <blockquote>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-center">
            True project success goes beyond the end result; it&apos;s about the
            generating revenue by engaging customers, turning clicks into
            conversions.
          </p>
        </blockquote>
        <figcaption className="mt-6 flex items-center justify-center space-x-4 text-left">
          <Image
            alt=""
            className="w-14 h-14 rounded-full"
            decoding="async"
            height={56}
            loading="lazy"
            src={"/brand/personal.webp"}
            width={56}
          />
          <div>
            <div className="text-slate-900 font-semibold dark:text-white">
              John Buchanan
            </div>
            <div className="mt-0.5 text-sm leading-6">DevOps Engineer</div>
          </div>
        </figcaption>
      </figure>
    </Section>
  )
}

export default BestPractices
