import { FC } from "react"

import clsx from "clsx"

import { FadeIn } from "@/components/motion/FadeIn"
import { testimonials } from "@/lib/testimonials"

import TestimonialCard from "./testimonial"

type Props = {
  isBordered?: boolean
}

const Testimonials: FC<Props> = ({ isBordered = true }) => {
  return (
    <FadeIn>
      <section
        className={clsx("relative", {
          "pointer-events-non bg-gradient-to-b from-white to-slate-50/50 inset-0 shadow-[inset_0_-1px_1px_rgba(0,0,0,0.06)]":
            isBordered === true,
        })}
        id="testimonial_section"
      >
        <div
          className="mx-auto max-w-container px-4 pt-4 sm:px-6 lg:flex lg:px-8 pb-20"
          id="testimonial_container"
        >
          <div
            className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 "
            id="testimonial"
          >
            {testimonials.map(({ ...props }) => (
              <TestimonialCard
                key={props.id}
                company={props.company}
                href={props.href}
                id={props.id}
                logo={props.logo}
                name={props.name}
                testimonial={props.testimonial}
              />
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  )
}

export default Testimonials
