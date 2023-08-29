import Image from "next/image"
import { FC } from "react"

import { SEO_OFF_PAGE } from "@/lib/features"
import GoogleStats from "@/public/content/seo/ops-1.webp"
import GoogleOptions from "@/public/content/seo/ops-2.webp"
import GoogleReviews from "@/public/content/seo/ops-4.webp"

import GridItem from "../GridItem"
import { FadeIn } from "../motion/FadeIn"

const OffPage: FC = () => {
  return (
    <FadeIn>
      <div className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50/50 pt-12">
        <div className="mx-auto max-w-container px-4 pt-4 sm:px-6 lg:flex lg:px-8">
          <div className="relative z-20 mx-auto max-w-[40rem] pb-16 pt-16 lg:mx-0 lg:w-[40rem] lg:max-w-none lg:flex-none lg:pb-24 lg:pr-4 lg:pt-5">
            <h2 className="text-base font-semibold leading-7 text-sky-500">
              Off-Page Seo
            </h2>
            <p className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-black sm:text-5xl sm:leading-[3.5rem]">
              You also need off-page seo.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Off-page SEO is defined by how reputable your business is. The
              goal is to become a respected source of information, known as Page
              Authority.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Building page authority within the search engine results takes
              time, the longer you&apos;ve been in business and optimized for
              the search engines the better chances your going to out rank your
              competition.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-1 ">
              {SEO_OFF_PAGE.map(item => (
                <GridItem
                  key={item.name}
                  className="bg-white p-4 Z-50 ring-1 rounded-md ring-slate-900/5 shadow-sm"
                  {...item}
                />
              ))}
            </div>
          </div>
          <div className="relative z-10 lg:block">
            <div className="mt-6 flex">
              <div className="relative flex-shrink-0 p-4">
                <div className="relative z-10 overflow-hidden  mt-[-65px] ml-[-45px]">
                  <Image
                    alt={"Web Design Hero Buchanan DevOps Hero Item"}
                    className="h-[713px] w-[458px]"
                    priority={true}
                    src={GoogleStats}
                  />
                </div>
                <div className="z-50">
                  <div className="absolute right-0 left-0 top-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                  <div className="absolute -top-8 bottom-16 left-18 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                  <div className="absolute -right-12 bottom-[7.5rem] left-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                  <div className="absolute bottom-10 -top-14 right-20 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                  <div className="absolute bottom-full right-28 -mb-px flex h-8 items-end overflow-hidden">
                    <div className="flex -mb-px h-[2px] w-80 -scale-x-100">
                      <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
                      <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative z-40 mt-14 flex-shrink-0 p-4">
                <div className="overflow-hidden   mt-[-65px] ml-[-165px]">
                  <Image
                    alt={"Web Design Hero Buchanan DevOps Hero Item"}
                    className="  h-[713px] w-[458px]"
                    priority={true}
                    src={GoogleReviews}
                  />
                </div>
                <div>
                  <div className="absolute -left-24 right-12 top-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                  <div className=" -z-50 absolute bottom-4 -top-[6.5rem] right-20 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                  <div className="absolute -right-1 -left-32 top-[calc(90%-1px)] h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                  <div className="absolute right-3 -left-24 top-[calc(90%-1px)] -mb-px flex h-8 items-start overflow-hidden">
                    <div className="flex -mt-px h-[2px] w-80 -scale-x-100">
                      <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
                      <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative z-30 flex-shrink-0 p-4">
                <div className="overflow-hidden  mt-[-65px] ml-[-155px]">
                  <Image
                    alt={"Web Design Hero Buchanan DevOps Hero Item"}
                    className="h-[713px] w-[458px]"
                    priority={true}
                    src={GoogleOptions}
                  />
                </div>
                <div>
                  <div className="absolute -left-32 right-8 top-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_-1px_1px_rgba(0,0,0,0.06)]" />
      </div>
    </FadeIn>
  )
}

export default OffPage
