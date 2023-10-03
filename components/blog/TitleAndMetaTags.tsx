import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"

type TitleAndMetaTagsProps = {
  title?: string
  description?: string
  image?: string
  url?: string
  pathname?: string
}

export const TitleAndMetaTags = ({
  title = "Buchanan DevOps",
  description = "Everything you need to develop a design, website or web app.",
  image,
  url = "https://buchanandevops.com",
  pathname,
}: TitleAndMetaTagsProps) => {
  const router = useRouter()

  const imageUrl = `${url}/social/${image || "default.png"}`
  const path = pathname || router.pathname

  return (
    <Head>
      <title>{title}</title>
      <meta content={description} name="description" />
      <meta content={`${url}${path}`} property="og:url" />
      <meta content={title} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content={imageUrl} property="og:image" />
      <meta content="@buchanandevops" name="twitter:site" />
      <meta content="summary_large_image" name="twitter:card" />
    </Head>
  )
}
