import { FC } from "react"

import IntroServices from "../section/IntroServices"

const IntroHero: FC = () => {
  return (
    <section
      className="relative bg-black bg-gradient-to-r from-gray-850 to-gray-900 shadow-black/45 "
      id="intro-hero"
    >
      <div className="bg-[url('/grid.svg')]">
        <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32 ">
        <h1 className="col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-white sm:text-7xl xl:max-w-[43.5rem]">
          Build your next idea even faster.
        </h1>
          <p className="mt-6 px-3 text-lg text-slate-300 text-center max-w-3xl mx-auto dark:text-slate-400">
            We&apos;re the go-to web design company, specializing in{" "}
            <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
              custom websites
            </code>
            ,{" "}
            <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
              e-commerce web design
            </code>
            ,{" "}
            <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
              seo
            </code>{" "}
            and{" "}
            <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
              maintenance
            </code>{" "}
            . We code with an emphasis on performance and structured data.
          </p>
        </div>
        <div className="relative max-w-7xl mx-auto pt-20 pb-28">
          <IntroServices />
        </div>
      </div>
    </section>
  )
}

export default IntroHero
