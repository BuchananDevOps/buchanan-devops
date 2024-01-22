import Link from "next/link"
import { FC } from "react"

import GenreBadge from "@/components/article/badge"
import { articles } from "@/data/articles"

type Props = {
  title: string
  description: string
  datePublished: string
  genre: any
  slug: string
  author: {
    name: string
  }
}

const ArticleItem: FC<Props> = ({
  title,
  description,
  datePublished,
  genre,
  slug,
  author,
}) => {
  return (
    <li className="text-black">
      <Link href={`/articles/${slug}`} title={title}>
        <h2 className="col-start-1 row-start-2 mt-4 max-w-[36rem] text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl xl:max-w-[43.5rem] ">
          {title}
        </h2>
      </Link>
      <div className="flex flex-row items-center my-2 text-sm">
        <div className="">{datePublished} &nbsp;</div>
        <div className="">by {author.name} &nbsp;</div>
        <div className="">
          <GenreBadge genre={genre} />
        </div>
      </div>
      <div className="">
        <p>{description}</p>
      </div>
    </li>
  )
}

const Articles: FC = () => {
  return (
    <section className=" max-w-3xl mx-auto px-6" id="articles">
      <ul>
        {articles.map(article => (
          <ArticleItem
            key={article.title}
            author={{
              name: "John Buchanan",
            }}
            datePublished={article.datePublished}
            description={article.description}
            genre={article.genre}
            slug={article.slug}
            title={article.headline}
          />
        ))}
      </ul>
    </section>
  )
}

export default Articles
