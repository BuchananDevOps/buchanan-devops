import { useRouter } from "next/router"
import type { FC } from "react"

import contact_page from "@/data/contact_page.json"
import creative_work from "@/data/creative_work.json"
import local_business from "@/data/local_business.json"
import seo_service from "@/data/seo_service.json"
import web_service from "@/data/web_service.json"
import { gtagUrl, renderSnippet } from "@/lib/analytics"

import { articles } from "../articles"
import seoFaq from "../seoFaq.json"
import webFaq from "../webFaq.json"
import SEO from "./Seo"

function getSchema() {
  const router = useRouter()
  const pathname = useRouter().pathname
  const { slug } = router.query
  const currentArticle = articles.find(article => article.slug === slug)

  switch (pathname) {
    case "/":
      return { local_business }
    case "/seo":
      return { seo_service, seoFaq }

    case "/web-design":
      return { web_service, webFaq }
      case "/articles/[slug]":
      if (currentArticle) {
        return {
          "@context": "https://schema.org/Article",
          "@type": "Article",
          headline: currentArticle.headline,
          alternativeHeadline: currentArticle.alternateHeading,
          image: currentArticle.image,
          author: "John Buchanan",
          genre: currentArticle.genre,
          keywords: currentArticle.keywords,
          wordcount: currentArticle.wordCount,
          publisher: {
            "@type": "Organization",
            name: "Buchanan DevOps",
            logo: {
              "@type": "ImageObject",
              url: "https://buchanandevops.com/logo-black.svg",
            },
          },
          url: `http://www.buchanandevops.com/articles/${slug}`,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://buchanandevops.com/articles/${slug}`,
          },
          datePublished: currentArticle.datePublished, // Set dynamically
          description: currentArticle.description,
          articleBody: currentArticle.articleBody,
        };
      }
      return {};
    case "/showcase":
      return { creative_work }
    case "/contact":
      return { contact_page }
    default:
      return {}
  }
}

const Head: FC = () => {
  const schema = getSchema()
  return (
    <SEO>
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script async src={gtagUrl} />
      <script dangerouslySetInnerHTML={{ __html: renderSnippet() as string }} />
    </SEO>
  )
}

export default Head
