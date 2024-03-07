import Link from "next/link"
import { FC } from "react"

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"

type Props = {
  mentions?: {
    title: string
    link: string
  }[]
  citation?: {
    lastName?: string
    firstName?: string
    sourceTitle: string
    containerTitle?: string
    number?: string
    datePublished?: string
    location?: string
    link: string
  }[]
  keywords?: string
  className?: string
}

const ArticleFooter: FC<Props> = ({
  mentions,
  citation,
  keywords,
  className,
}) => {
  return (
    <div className={`${className} text-black`} id="article_footer">
      <div className="" id="article_footer_keywords">
        {keywords && (
          <h6 className="font-extrabold tracking-tight text-slate-900 mt-4">
            Tags:
          </h6>
        )}
        <span
          key={keywords}
          className="p-1 text-white text-sm bg-sky-600 rounded-sm mr-1"
          itemProp="keywords"
        >
          {keywords}
        </span>
      </div>
      <div id="article_footer_mentions">
        {mentions && (
          <h6 className="font-extrabold tracking-tight text-slate-900 mt-4">
            Mentions:
          </h6>
        )}
        {mentions &&
          mentions.map(item => (
            <Link
              key={item.title}
              className="pr-1 mr-1 text-blue-600 border-r"
              href={item.link}
              itemProp="mention"
              target="_blank"
              title={item.title}
            >
              {item.title}
            </Link>
          ))}
      </div>
      <div className="" id="article_footer_citations">
        {citation && (
          <h6 className="font-extrabold tracking-tight text-slate-900 mt-4">
            Citations:
          </h6>
        )}
        {citation &&
          citation.map(item => (
            <div
              key={item.containerTitle}
              className="flex flex-wrap text-xs border-b my-2"
              id="citation"
              itemProp="citation"
            >
              {item.lastName && item.firstName && (
                <span className="" id="name">
                  {item.lastName}, {item.firstName}.
                </span>
              )}
              <Link
                className=" text-blue-600"
                href={item.link}
                target="_blank"
                title={item.sourceTitle}
              >
                <span className="flex flex-row items-center" id="source_title">
                  &nbsp;&quot;{item.sourceTitle}{" "}
                  <ArrowTopRightOnSquareIcon className=" font-light w-4 h-4 ml-1" />
                  &quot;.
                </span>
              </Link>
              {item.containerTitle && (
                <span
                  className="citation citation-container-title"
                  id="container_title"
                >
                  &nbsp;{item.containerTitle},
                </span>
              )}
              {item.number && (
                <span className="citation citation-number" id="number">
                  &nbsp;{item.number},
                </span>
              )}
              {item.datePublished && (
                <span className="citation citation-date" id="date">
                  &nbsp;({item.datePublished})
                </span>
              )}
              {item.location && (
                <span className="citation citation-location" id="location">
                  &nbsp;{item.location}.
                </span>
              )}
            </div>
          ))}
      </div>
    </div>
  )
}

export default ArticleFooter
