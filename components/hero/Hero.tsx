import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

import ProductionDark from "@/public/content/production-dark.svg"

const Hero: FC = () => {
  return (
    <div className="relative -mt-[5.75rem] overflow-hidden bg-white pt-12 md:pt-[5.75rem]">
      <div className="absolute inset-y-0 hidden w-full min-w-[1360px] bg-[url('/public/img/beams-templates-header.png')] bg-[length:2000px_100%] bg-[position:calc(50%_+_220px)_-50px] bg-no-repeat lg:block" />
      <div className="mx-auto max-w-container px-4 pt-4 sm:px-6 lg:flex lg:px-8">
        <div className="relative z-20 mx-auto max-w-[40rem] pb-16 pt-16 lg:mx-0 lg:w-[40rem] lg:max-w-none lg:flex-none lg:pb-24 lg:pr-4 lg:pt-20">
          <div
            aria-hidden="true"
            className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-sky-500"
          >
            Buchanan DevOps
          </div>
          <h1 className="col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-black sm:text-7xl xl:max-w-[43.5rem]">
            Build your next idea even faster.
          </h1>
          <p className="mt-6 px-3 text-lg text-black  max-w-3xl mx-auto dark:text-slate-400">
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
          <div className="mt-8 flex gap-4">
            <Link
              className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700"
              href="/web-design"
            >
              <span>
                Web <span className="hidden sm:inline"> Design</span>{" "}
                <span aria-hidden="true" className="text-slate-400 sm:inline">
                  →
                </span>
              </span>
            </Link>
            <Link
              className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 "
              href="/seo"
            >
              <span>
                Seo <span className="hidden sm:inline">Specialist</span>{" "}
                <span aria-hidden="true" className="text-black/25 sm:inline">
                  →
                </span>
              </span>
            </Link>
          </div>
        </div>
        <div className="relative z-10 hidden lg:block">
          <div className="mt-6 flex">
            <div className="relative flex-shrink-0 p-4">
              <div className="relative z-10 overflow-hidden ">
                <Image
                  alt={"Web Design Hero Buchanan DevOps Hero Item"}
                  className="h-[540px] w-full -mt-10"
                  priority={true}
                  src={ProductionDark}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_-1px_1px_rgba(0,0,0,0.06)]" />
    </div>
  )
}

export default Hero
