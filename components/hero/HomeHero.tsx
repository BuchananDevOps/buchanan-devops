import { FC } from "react"

const HomeHero: FC = () => {
  return (
    <div className=" overflow-hidden px-4 sm:px-6 md:px-8  bg-slate-50">
      <div className="relative max-w-5xl mx-auto py-20 sm:pt-24 lg:pt-32">
        <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
          Grow your business rapidly with a high performance website with
          built-in SEO.
        </h1>
        <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
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
    </div>
  )
}

export default HomeHero
