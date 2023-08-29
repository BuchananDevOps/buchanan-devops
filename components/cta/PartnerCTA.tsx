import Image from "next/image"
import { FC } from "react"

import { HOME_BADGES, SEO_BADGES, WEB_BADGES } from "@/lib/badges"

import Section from "../page/Section"

type Props = {
  heading?: string
  className?: string
  page: "home" | "website" | "seo"
}

const PartnerCTA: FC<Props> = ({ page, heading }) => {
  return (
    <Section className=" items-center" id={`partner-cta-${page}`}>
      <div className="text-center" id="partner-cta_container">
        {heading && (
          <h2 className="text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl dark:text-white">
            {heading}
          </h2>
        )}
        <div
          className={`${
            page === "home"
              ? "flex flex-row flex-wrap"
              : "grid grid-cols-3 sm:grid-cols-5"
          }   items-center align-middle justify-center place-items-center ${
            heading ? "my-6" : "py-14"
          }`}
        >
          {page === "seo" &&
            SEO_BADGES.map(badge => (
              <Image
                key={badge.name}
                alt={badge.name}
                className="client-cta_badge z-10 my-2 h-24 md:h-28 lg:h-36 w-auto mx-6 "
                src={badge.image}
              />
            ))}
          {page === "website" &&
            WEB_BADGES.map(badge => (
              <Image
                key={badge.name}
                alt={badge.name}
                className="client-cta_badge z-10 my-2 h-24 md:h-28 lg:h-36 w-auto mx-6 "
                src={badge.image}
              />
            ))}
          {page === "home" &&
            HOME_BADGES.map(badge => (
              <Image
                key={badge.name}
                alt={badge.name}
                className="client-cta_badge z-10 my-2 max-h-28 w-auto lg:mx-2 p-3 "
                src={badge.image}
              />
            ))}
        </div>
      </div>
    </Section>
  )
}

export default PartnerCTA
