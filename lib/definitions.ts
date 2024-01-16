import React from "react"

export type Author = {
  id?: string
  name: string
  image: string
  email?: string
}

export type Article = {
  slug: string
  author: {
    id?: string
    name: string
    image: string
    email?: string
  }
  aggregateRating: "1" | "2" | "3" | "4" | "5"
  alternateHeading?: string
  articleBody: {
    articleSection?: string
    paragraph: string
    image?: string
    alt?: string
    component?: React.ReactNode
  }[]
  backstory: string
  citation?: {
    // Change from object to array
    lastName?: string
    firstName?: string
    sourceTitle: string
    containerTitle?: string
    number?: string
    datePublished?: string
    location?: string
    link: string
  }[]
  category: "Web Design" | "Seo" | "Development"
  datePublished: string
  description: string
  headline: string
  keywords: string[]
  mentions?: {
    title: string
    link: string
  }[]
  url: string
  title: string
  thumbnail: string
  thumbnailUrl: string
  image: string
  timeRequired: string
  wordCount: string // Change from number to string
}
