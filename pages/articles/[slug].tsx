import { useRouter } from "next/router"
import { FC } from "react"

import ArticleBody from "@/components/article/article-body"
import ArticleFooter from "@/components/article/article-footer"
import Heading from "@/components/article/heading"
import { articles } from "@/data/articles"

const Article: FC = () => {
  const router = useRouter()
  const { slug } = router.query
  const currentArticle = articles.find(article => article.slug === slug)

  if (!currentArticle) {
    return <div>Article not found</div>
  }

  return (
    <article
      itemScope
      className="max-w-3xl mx-auto px-6"
      id="article"
      itemProp="https://schema.org/Article"
    >
      <Heading
        category={currentArticle.category}
        datePublished={currentArticle.datePublished}
        headline={currentArticle.headline}
        timeRequired={currentArticle.timeRequired}
      />
      <ArticleBody
        articleBody={currentArticle.articleBody}
        backstory={currentArticle.backstory}
      />
      <ArticleFooter
        citation={currentArticle.citation}
        keywords={currentArticle.keywords}
        mentions={currentArticle.mentions}
      />
    </article>
  )
}

export default Article
