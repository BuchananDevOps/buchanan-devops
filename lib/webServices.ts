import Image from "next/image"

type NextImageSrc = Parameters<typeof Image>[0]["src"]

export type SectionProps = {
  id: string
  heading?: string
  subHeading?: string
  description?: string[]
  children?: React.ReactNode
  image: NextImageSrc
  width?: any
  height?: any
  position: "left" | "right"
}

export const WEB_DESIGN_SERVICES = [
  {
    name: "Websites",
    text: "As a full-service digital agency, we have been passionate about bringing your businesses website online or converting your existing monolithic, slow, and fundamentally insecure websites and web applications into fast, modern, results driven web experiences that pass Google’s Core Web Vitals score with flying colors.",
  },
  {
    name: "UI & UX Design",
    text: "The best websites depend on great design as the foundation of an outstanding user experience. We believe that design isn't just about how something looks; it's about how it works too. That's why we are so passionate and committed to ensuring every detail, from pixels to colors to interactions, is perfectly delightful for all users.",
  },
  {
    name: "Web Apps",
    text: "We design and develop digital products with the latest technologies such as TypeScript, Vercel Serverless Functions, React, Next.JS and Tailwind CSS. From an idea to a globally-scalable app, Buchanan DevOps ensures your vision comes to life with the best possible design and development process.",
  },
]

export const WEB_DESIGN_PROCESS = [
  {
    name: "Discovery + Strategy",
    text: "At the start of any project, we like to take a deep dive into understanding your business goals, technology in use, economics and objectives.",
  },
  {
    name: "UI/UX Web Design",
    text: "With the business insights and requirements are identified, we design a user interface (UI) that is tailored to enhance brand recognition and user experience (UX).",
  },
  {
    name: "Backend Development",
    text: "We integrate the UI website design with a preferred headless content management system, analytics integration and other service providers.",
  },
  {
    name: "Website Launch",
    text: "The finished product is pushed to our production server for launch. After the initial launch we test the complete package to confirm everything is working correctly.",
  },
]

export const WEB_DESIGN_BENEFITS = [
  {
    name: "Marketing Foundation",
    text: "Your website is the cornerstone of all your marketing campaigns. It serves as the foundation for building a strong digital presence and delivering consistent branding and messaging to your target audience.",
  },
  {
    name: "Brand Credibility",
    text: "Establishing legitimacy in the eyes of your customers and potential clients can be a key factor in setting you apart from the competition. A well-designed, user-friendly website that accurately reflects your brand and services helps.",
  },
  {
    name: "Reach New Audience",
    text: "A strong online presence is essential for businesses looking to reach new customers. Investing in a professionally designed website will help you maximize your return on investment by driving more conversions from visitors to buyers.",
  },
  {
    name: "Increase Revenue",
    text: "Having a website with a great user experience and engaging content is essential for any business. Not only will a website help attract your target audience, but it will also lead to an increase in revenue.",
  },
]

export const WEB_CUSTOMERS = [
  {
    name: "Startups",
    text: "Design a great landing page to express a new concept to the public, measuring engagement while focusing on conversions.",
  },
  {
    name: "Established Businesses",
    text: "Take an existing website to next level by optimizing the approach for high performance while increasing functionality.",
  },
  {
    name: "Non-Profit",
    text: "Build the hub for your mission online! Direct users to learn about your case, promote your fundraising campaigns and house your donation form.  ",
  },
  {
    name: "Increase SEO Performance",
    text: "Bring your website to the first page of Google. We build with a “search first” approach and incorporate key structured data components.",
  },
]
