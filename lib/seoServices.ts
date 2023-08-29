import Image from "next/image"

type NextImageSrc = Parameters<typeof Image>[0]["src"]

export type SectionProps = {
  id: string
  heading?: string
  subHeading?: string
  description: string
  children?: React.ReactNode
  image: NextImageSrc
  width?: any
  height?: any
  position: "left" | "right"
}

export const SEO_SECTIONS = [
  {
    id: "best-seo-company",
    heading: "The Best SEO Company",
    subHeading: "Our SEO Company is a perfect fit.",
    description: [
      "description",
      "testing additional description for section component",
    ],
    image: "/portfolio/hero/csagroup-wd-hero.webp",
    width: 900,
    height: 969,
    position: "left",
  },
]
