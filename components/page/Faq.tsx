import { FC } from "react"

import seoFaq from "@/data/seoFaq.json"
import webFaq from "@/data/webFaq.json"

import FaqItem from "./FaqItem"
import Heading from "./Heading"
import Section from "./Section"

type Props = {
  id: string
  heading: string
  subHeading: string
  type?: "seo" | "web"
  className?: string
}

const Faq: FC<Props> = ({ id, heading, subHeading, type, className }) => {
  return (
    <Section className={className} id={id}>
      <div className="mx-auto max-w-container pt-4 sm:px-6 lg:flex lg:flex-col lg:items-center lg:gap-x-14 lg:px-8">
        <div className="relative z-20 mx-auto max-w-[40rem] pb-10 pt-16 lg:mx-0 lg:w-[50rem] lg:max-w-none lg:flex-none lg:pb-10 lg:pr-4 lg:pt-20">
          <Heading heading={heading} subHeading={subHeading} />
        </div>
        <div className="relative z-20 mx-auto max-w-[40rem] pb-16 lg:mx-0 lg:w-[50rem] lg:max-w-none lg:flex-none lg:pb-24 lg:pr-4">
          {type === "seo"
            ? seoFaq.mainEntity.map(item => (
                <FaqItem
                  key={item.name}
                  name={item.name}
                  text={item.acceptedAnswer.text}
                />
              ))
            : webFaq.mainEntity.map(item => (
                <FaqItem
                  key={item.name}
                  name={item.name}
                  text={item.acceptedAnswer.text}
                />
              ))}
        </div>
      </div>
    </Section>
  )
}

export default Faq
