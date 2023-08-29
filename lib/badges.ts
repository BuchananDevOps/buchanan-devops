import Image from "next/image"

import AmazonPartner from "@/public/portfolio/badges/aws-apn-select-consulting-partner.svg"
import BCorp from "@/public/portfolio/badges/b-corp.svg"
import ClutchFastestGrowing from "@/public/portfolio/badges/fastest-growing.webp"
import GooglePartner from "@/public/portfolio/badges/goolge-partner-color-2023.svg"
import GPTW from "@/public/portfolio/badges/gptw.webp"
import HubspotPartner from "@/public/portfolio/badges/hubspot-elite.webp"
import MetaPartner from "@/public/portfolio/badges/meta-business-partner.svg"
import MicrosoftPartner from "@/public/portfolio/badges/microsoft-partner-2023.svg"
import ClutchTopSeo from "@/public/portfolio/badges/seo-company-2.webp"
import ClutchTop100 from "@/public/portfolio/badges/top-clutch-100.webp"
import UpcityTop2022 from "@/public/portfolio/badges/top-web-designer-2022.webp"
import UpcityLocalAward from "@/public/portfolio/badges/upcity-award.webp"
import TopWebDesign from "@/public/portfolio/badges/web-design-pa-2023.webp"

type NextImageSrc = Parameters<typeof Image>[0]["src"]

export type Badge = {
  name: string
  image: NextImageSrc
}

export type Badges = Array<Badge>

export const HOME_BADGES: Badges = [
  {
    name: "Google Premier Partner 2023",
    image: GooglePartner,
  },
  {
    name: "Amazon Partner Select Tier Services",
    image: AmazonPartner,
  },
  {
    name: "Meta Business Partner",
    image: MetaPartner,
  },
  {
    name: "Hubspot Gold Solutions Partner Program",
    image: HubspotPartner,
  },
  {
    name: "Microsoft Advertising Select Partner",
    image: MicrosoftPartner,
  },
]

export const SEO_BADGES: Badges = [
  {
    name: "Google Premier Partner 2023",
    image: GooglePartner,
  },
  {
    name: "Clutch Top SEO Company",
    image: ClutchTopSeo,
  },
  {
    name: "Clutch Fastest Growing Business 2023",
    image: ClutchFastestGrowing,
  },
  {
    name: "Great Place To Work Certified 2023",
    image: GPTW,
  },
  {
    name: "Upcity Local Excellence 2022 Award",
    image: UpcityLocalAward,
  },
]

export const WEB_BADGES: Badges = [
  {
    name: "Google Premier Partner 2023",
    image: GooglePartner,
  },
  {
    name: "B Corp Certified Company",
    image: BCorp,
  },
  {
    name: "Clutch Top Web Design Company 2023",
    image: TopWebDesign,
  },
  {
    name: "Clutch Top Digital Marketing Company 2022",
    image: ClutchTop100,
  },
  {
    name: "Upcity Top Web Designer 2022",
    image: UpcityTop2022,
  },
]
