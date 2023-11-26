import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

import { Testimonial } from "@/lib/testimonials"

const TestimonialCard: FC<Testimonial> = ({
  id,
  name,
  company,
  logo,
  href,
  testimonial,
}) => {
  return (
    <figure
      className="text-sm leading-6relative flex flex-col bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5"
      id={`tc_${id}`}
    >
      <div className="flex flex-row justify-between" id="tc_top">
        <div className="flex flex-col" id="tc_info">
          <p className="text-base text-black font-semibold" id="tc_name">
            {name}
          </p>
          <p id="tc_company">{company}</p>
        </div>
        <div id="tc_logo">
          <Link href={href} target="_blank" title={`View ${company} Website`}>
            <Image
              alt={`${company} Logo`}
              className={`flex-none w-24 h-auto `}
              height={50}
              src={logo}
              width={50}
            />
          </Link>
        </div>
      </div>
      <div id="tc_bottom">
        <blockquote
          className="mt-6 text-slate-700 dark:text-slate-300"
          id="tc_testimonial"
        >
          <p>&quot;{testimonial}&quot;</p>
        </blockquote>
      </div>
    </figure>
  )
}

export default TestimonialCard
