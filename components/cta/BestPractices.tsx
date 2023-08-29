import Image from "next/image"
import { FC } from "react"

import Section from "../page/Section"

const BestPractices: FC = () => {
  return (
    <Section id="best-practices">
      <h2 className="text-slate-900 text-center text-4xl tracking-tight font-extrabold sm:text-5xl dark:text-white">
        “Best practices” don’t actually work.
      </h2>
      <figure>
        <blockquote>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-center">
            I’ve written{" "}
            <span className="text-sky-500 font-semibold dark:text-sky-400">
              a few thousand words
            </span>{" "}
            on why traditional &lsquo;web design&rsquo; and &lsquo;search engine
            optimization&rsquo; strategy is antiquated and hard to maintain, but
            the truth is you&apos;re never going to believe me until you
            actually see the increased website traffic and revenue from building
            a custom website vs. wordpress, wix or templating providers.
          </p>
        </blockquote>
        <figcaption className="mt-6 flex items-center justify-center space-x-4 text-left">
          <Image
            alt=""
            className="w-14 h-14 rounded-full"
            decoding="async"
            height={56}
            loading="lazy"
            src={"/brand/personal.webp"}
            width={56}
          />
          <div>
            <div className="text-slate-900 font-semibold dark:text-white">
              John Buchanan
            </div>
            <div className="mt-0.5 text-sm leading-6">DevOps Engineer</div>
          </div>
        </figcaption>
      </figure>
    </Section>
  )
}

export default BestPractices
