import Image from "next/image"
import { FC } from "react"

import AcresCta from "@/public/portfolio/hero/7acres-cta.webp"
import JpCta from "@/public/portfolio/hero/jp-cxp-cta.webp"
import PierreCta from "@/public/portfolio/hero/pierre-cta.webp"
import WhislCta from "@/public/portfolio/hero/whisl-cta.webp"

import GradientSectionBorder from "../GradientSectionBorder"
import Heading from "../page/Heading"

const PortfolioCta: FC = () => {
  return (
    <GradientSectionBorder>
      <div className="relative -mt-[5.75rem] overflow-x-scroll overflow-y-hidden lg:overflow-hidden  py-12 md:py-[5.75rem]">
        <div className="mx-auto max-w-container px-4 pt-4 sm:px-6 lg:flex lg:px-8 items-center">
          <div className="relative z-20 mx-auto pb-16 pt-16 lg:mx-0 lg:w-[26rem] lg:max-w-none lg:flex-none lg:pb-24 lg:pr-4 lg:pt-20">
            <Heading
              isDark
              button={{
                name: "View Full Portfolio",
                route: "/showcase",
              }}
              description="Checkout some of our favorite projects we designed and developed over the past 13 years."
              heading="Our Work Portfolio"
              subHeading="Client Showcase"
            />
          </div>
          <div className="relative z-10 lg:block">
            <div className="mt-6 flex">
              <div className="relative flex-shrink-0 p-4">
                <div className="relative z-10 rounded shadow-xl ring-1 ring-slate-200/5">
                  <Image
                    alt={"Web Design Portfolio Buchanan DevOps Item"}
                    className="h-[404px] w-[336px]"
                    src={JpCta}
                  />
                </div>
                <div className="z-0">
                  <div className="absolute -right-12 left-0 top-0 h-px bg-slate-200/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                  <div className="absolute -top-8 bottom-0 left-12 w-px bg-slate-200/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                  <div className="absolute -right-12 bottom-14 left-0 h-px bg-slate-200/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                  <div className="absolute -bottom-8 -top-2 right-0 w-px bg-slate-200/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                </div>
              </div>
              <div className="relative mt-14 flex-shrink-0 p-4">
                <div className=" rounded shadow-xl ring-1 ring-slate-900/5">
                  <Image
                    alt={"Web Design Portfolio Buchanan DevOps Item"}
                    className="h-[404px] w-[336px]"
                    src={WhislCta}
                  />
                </div>
                <div>
                  <div className="absolute -left-4 -right-8 top-0 h-px bg-slate-200/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                  <div className="absolute -bottom-12 -top-20 right-0 w-px bg-slate-200/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                  <div className="absolute -left-4 -right-8 bottom-0 h-px bg-slate-200/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                  <div className="absolute right-10 top-[calc(100%-1px)] -mb-px flex h-8 items-start">
                    <div className="flex -mt-px h-[2px] w-80 -scale-x-100">
                      <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
                      <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex-shrink-0 p-4">
                <div className=" rounded shadow-xl ring-1 ring-slate-900/5">
                  <Image
                    alt={"Web Design Portfolio Buchanan DevOps Item"}
                    className="h-[404px] w-[336px]"
                    src={AcresCta}
                  />
                </div>
                <div>
                  <div className="absolute -left-12 -right-8 top-0 h-px bg-slate-200/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                </div>
              </div>
              <div className="relative mt-14 flex-shrink-0 p-4">
                <div className=" rounded shadow-xl ring-1 ring-slate-900/5">
                  <Image
                    alt={"Web Design Portfolio Buchanan DevOps Item"}
                    className="h-[404px] w-[336px]"
                    src={PierreCta}
                  />
                </div>
                <div>
                  <div className="absolute -left-4 -right-8 top-0 h-px bg-slate-200/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                  <div className="absolute -bottom-12 -top-20 right-0 w-px bg-slate-200/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                  <div className="absolute -left-4 -right-8 bottom-0 h-px bg-slate-200/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                  <div className="absolute right-10 top-[calc(100%-1px)] -mb-px flex h-8 items-start">
                    <div className="flex -mt-px h-[2px] w-80 -scale-x-100">
                      <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#FF3358_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
                      <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#FF3358_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_-1px_1px_rgba(0,0,0,0.06)]" />
      </div>
    </GradientSectionBorder>
  )
}

export default PortfolioCta
