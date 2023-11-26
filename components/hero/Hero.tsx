import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

import Norwex from "@/public/bussin/norwex.webp"
import Michigan from "@/public/bussin/um.webp"

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
            Accelerate Your Online Presence.
          </h1>
          <p className="mt-6 px-3 text-lg text-black  max-w-3xl mx-auto dark:text-slate-400">
            As your trusted web design partner, we specialize in crafting{" "}
            <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
              custom websites
            </code>
            ,{" "}
            <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
              e-commerce solutions
            </code>
            ,{" "}
            <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
              SEO
            </code>{" "}
            and{" "}
            <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
              ongoing maintenance
            </code>{" "}
            . Our coding prioritizes performance and structured data for a
            robust online experience.
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
              <div className="relative z-10 overflow-hidden rounded h-[550px] w-[264px] ">
                <picture>
                  {/* Check for AVIF support */}
                  <source
                    srcSet="/bussin/hero-animation.avif"
                    type="image/avif"
                  />
                  {/* If AVIF is not supported, load WebP */}
                  <source srcSet="/bussin/aflac.webp" type="image/webp" />
                  <img
                    alt={"Web Design Hero Buchanan DevOps Hero Item"}
                    className="h-[550px] w-[392px] object-cover"
                    height={700}
                    src="/bussin/hero-animation.png"
                    // priority={true} // This prop might not be required for the img element
                    width={500}
                  />
                </picture>
              </div>
              <div className="z-0">
                <div className="absolute -right-12 left-0 top-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                <div className="absolute -top-8 bottom-0 left-12 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                <div className="absolute -right-12 bottom-14 left-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                <div className="absolute -bottom-8 -top-2 right-0 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                <div className="absolute bottom-full right-10 -mb-px flex h-8 items-end overflow-hidden">
                  <div className="flex -mb-px h-[2px] w-80 -scale-x-100">
                    <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
                    <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-14 flex-shrink-0 p-4">
              <div className="overflow-hidden rounded-[2.1rem] shadow-xl ring-1 ring-slate-900/5">
                <Image
                  alt={"Web Design Hero Buchanan DevOps Hero Item"}
                  className="h-[550px] w-[264px]"
                  height={801}
                  priority={true}
                  src={Norwex}
                  width={384}
                />
              </div>
              <div>
                <div className="absolute -left-4 -right-8 top-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                <div className="absolute -bottom-12 -top-20 right-0 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                <div className="absolute -left-4 -right-8 bottom-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                <div className="absolute right-10 top-[calc(100%-1px)] -mb-px flex h-8 items-start overflow-hidden">
                  <div className="flex -mt-px h-[2px] w-80 -scale-x-100">
                    <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
                    <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex-shrink-0 p-4">
              <div className="overflow-hidden rounded-[2.1rem] ring-1 ring-slate-900/5">
                <Image
                  alt={"Web Design Hero Buchanan DevOps Hero Item"}
                  className="h-[550px] w-[264px]"
                  height={801}
                  priority={true}
                  src={Michigan}
                  width={384}
                />
              </div>
              <div>
                <div className="absolute -left-12 -right-8 top-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
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
