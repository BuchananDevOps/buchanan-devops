import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

const SeoHero: FC = () => {
  return (
    <div className="relative -mt-[5.75rem] overflow-hidden bg-slate-50 pt-12 md:pt-[5.75rem]">
      <div className="mx-auto max-w-container px-4 pt-4 sm:px-6 lg:flex lg:px-8">
        <div className="relative z-20 mx-auto max-w-[40rem] pb-16 pt-16 lg:mx-0 lg:w-[40rem] lg:max-w-none lg:flex-none lg:pb-24 lg:pr-4 lg:pt-20">
          <h1 className="text-base font-semibold leading-7 text-sky-500">
            SEO
          </h1>
          <p className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-black sm:text-5xl sm:leading-[3.5rem]">
            More Leads. More Sales. More Revenue.
          </p>
          <div className="flex flex-wrap mt-4">
            <div className="flex items-center text-sm font-medium text-slate-500">
              <Image
                alt="Google Premier 2023 Partner"
                className="h-8 w-8 grayscale"
                height={31}
                src="/portfolio/badges/google-g.webp"
                width={31}
              />
              <span className="ml-2.5">Google</span>
            </div>
            <div className="flex items-center text-sm font-medium text-slate-500 ml-6">
              <svg
                className="h-8 w-8 flex-none stroke-current text-slate-400"
                version="1.1"
                viewBox="0 0 27 28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs />
                <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                  <g fill="#a3a3a3">
                    <path d="M19.614233,20.1771162 C17.5228041,20.1771162 15.8274241,18.4993457 15.8274241,16.4299995 C15.8274241,14.3602937 17.5228041,12.6825232 19.614233,12.6825232 C21.7056619,12.6825232 23.4010418,14.3602937 23.4010418,16.4299995 C23.4010418,18.4993457 21.7056619,20.1771162 19.614233,20.1771162 M20.7478775,9.21551429 L20.7478775,5.88190722 C21.6271788,5.47091457 22.243053,4.59067833 22.243053,3.56912967 L22.243053,3.49218091 C22.243053,2.08229273 21.0774338,0.928780545 19.6527478,0.928780545 L19.5753548,0.928780545 C18.1506688,0.928780545 16.9850496,2.08229273 16.9850496,3.49218091 L16.9850496,3.56912967 C16.9850496,4.59067833 17.6009238,5.47127414 18.4802251,5.88226679 L18.4802251,9.21551429 C17.1710836,9.4157968 15.9749432,9.95012321 14.9884545,10.7365107 L5.73944086,3.61659339 C5.80048326,3.3846684 5.84335828,3.14591151 5.84372163,2.89492912 C5.84517502,1.29842223 4.53930368,0.00215931486 2.92531356,1.87311107e-06 C1.31205014,-0.00179599501 0.00181863138,1.29087118 1.8932965e-06,2.88773765 C-0.00181484479,4.48460412 1.30405649,5.78086703 2.91804661,5.7826649 C3.44381061,5.78338405 3.93069642,5.63559929 4.35726652,5.39540411 L13.4551275,12.3995387 C12.6815604,13.5552084 12.2281026,14.9395668 12.2281026,16.4299995 C12.2281026,17.9901894 12.7262522,19.433518 13.5677653,20.6204705 L10.8012365,23.3586237 C10.5825013,23.2935408 10.3557723,23.2482346 10.1152362,23.2482346 C8.78938076,23.2482346 7.71423516,24.3118533 7.71423516,25.6239375 C7.71423516,26.9363812 8.78938076,28 10.1152362,28 C11.441455,28 12.5162373,26.9363812 12.5162373,25.6239375 C12.5162373,25.3866189 12.4704555,25.1618854 12.4046896,24.9454221 L15.1414238,22.2371135 C16.3837093,23.1752411 17.9308435,23.7390526 19.614233,23.7390526 C23.6935367,23.7390526 27,20.466573 27,16.4299995 C27,12.7756527 24.2872467,9.7566726 20.7478775,9.21551429" />
                  </g>
                </g>
              </svg>
              <span className="ml-2.5">HubSpot</span>
            </div>
            <div className="flex items-center text-sm font-medium text-slate-500 ml-6">
              <Image
                alt="Microsoft Advertising Partner 2023 Partner"
                className="h-7 w-7 grayscale"
                height={28}
                src="/portfolio/badges/micrsoft-icon.webp"
                width={28}
              />
              <span className="ml-2.5">Microsoft</span>
            </div>
          </div>
          <p className="mt-4 text-base leading-7 text-slate-600">
            More business, more conversions, more sales. We guarantee the
            positive impact on your business will propel you&apos;re business to
            the next level. While we can&apos;t promise a specific ranking (no
            one can), we can promise you&apos;ll be thrilled with the results!
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700"
              href="/seo#seo-services"
            >
              <span>
                SEO Services{" "}
                <span aria-hidden="true" className="text-slate-400 sm:inline">
                  →
                </span>
              </span>
            </Link>
            <Link
              className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 "
              href="/seo#seo-audit"
            >
              <span>
                Request SEO Audit{" "}
                <span aria-hidden="true" className="text-black/25 sm:inline">
                  →
                </span>
              </span>
            </Link>
          </div>
        </div>
        <div className="relative z-10 mt-12 hidden select-none lg:flex">
          <div className="z-20 flex flex-col">
            <div className="relative p-4">
              <div className="absolute bottom-0 left-11 right-0 top-8 bg-slate-900/[0.03]" />
              <div className="pointer-events-auto p-4 relative z-10 w-[24.125rem] rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-700 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
                <div>
                  <Image
                    alt={""}
                    className="aspect-[444/314]"
                    height={314}
                    src="/portfolio/hero/user-data.webp"
                    width={444}
                  />
                </div>
              </div>
              <div className="z-0">
                <div className="absolute -right-[95%] left-0 top-8 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                <div className="absolute -bottom-16 -top-2 right-0 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                <div className="absolute -right-2/3 top-px -mb-px flex h-8 items-end overflow-hidden">
                  <div className="flex -mb-px h-[2px] w-80 -scale-x-100">
                    <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
                    <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative ml-6 flex items-center justify-end">
              <div className="relative p-4">
                <div className="pointer-events-auto relative inline-flex rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50 hover:text-slate-900">
                  <Image
                    alt=""
                    className="aspect-[509/100]"
                    height={100}
                    src="/portfolio/hero/seo-metrics-hero.webp"
                    width={509}
                  />
                </div>
                <div className="z-0">
                  <div className="absolute -bottom-8 -top-12 right-0 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                  <div className="absolute -bottom-8 -top-12 left-0 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                </div>
              </div>
              <div className="z-0">
                <div className="absolute -left-12 -right-4 top-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                <div className="absolute -right-4 bottom-0 left-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
              </div>
            </div>
          </div>
          <div className="relative z-10 mt-8">
            <div className="relative p-4">
              <div className="w-[19.875rem] rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
                <div className="flex items-center p-4">
                  <Image
                    alt=""
                    className="aspect-[281/125] flex-none"
                    height={125}
                    src="/portfolio/hero/seo-roi-increase.webp"
                    width={281}
                  />
                </div>
              </div>
              <div className="z-0">
                <div className="absolute -left-12 -right-4 bottom-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                <div className="absolute -bottom-16 -top-2 left-[21.875rem] w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
              </div>
            </div>
            <div className="relative p-4">
              <div className="w-[24.5rem] divide-y divide-slate-400/20 rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
                <Image
                  alt={""}
                  className="aspect-[516/314] p-4"
                  height={314}
                  src="/portfolio/hero/event-count.webp"
                  width={516}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-20 sm:z-auto">
        <div className="mx-auto max-w-container px-4 pb-16 sm:px-6 lg:px-8">
          <div className="relative mx-auto grid max-w-[40rem] grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            <div className="flex">
              <div className="p-0.5">
                <svg
                  className="h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-indigo-500/[.12]"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 40 40"
                >
                  <path
                    className="fill-sky-50 stroke-sky-500"
                    d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z"
                  />
                  <path
                    className="stroke-sky-500/50"
                    d="M27 25.335L30.25 27l-6.603 3.382a8 8 0 01-7.294 0L9.75 27 13 25.335m14-6.999L30.25 20l-6.603 3.382a8 8 0 01-7.294 0L9.75 20 13 18.336"
                  />
                  <path
                    className="stroke-sky-500"
                    d="M9.75 13l9.338-4.783a2 2 0 011.824 0L30.25 13l-6.603 3.382a8 8 0 01-7.294 0L9.75 13z"
                  />
                </svg>
              </div>
              <div className="ml-6">
                <h2 className="text-sm font-semibold leading-6 text-slate-900">
                  Valuable Beyond Estimation
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  SEO is an invaluable strategy for businesses to increase their
                  visibility, potential audience and drive more sales online.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="p-0.5">
                <svg
                  className="h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-indigo-500/[.12]"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 40 40"
                >
                  <path
                    className="fill-sky-50 stroke-sky-500"
                    d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z"
                  />
                  <path
                    className="stroke-sky-500/50"
                    d="M22.25 11.75l-4.5 16.5"
                  />
                  <path
                    className="stroke-sky-500"
                    d="M16.25 7.75h-.5a4 4 0 00-4 4v4.007a3 3 0 01-.88 2.122 3 3 0 000 4.242 3 3 0 01.88 2.122v4.007a4 4 0 004 4h.5m7.5-24.5h.5a4 4 0 014 4v4.007a3.002 3.002 0 00.878 2.122 3 3 0 010 4.242 3 3 0 00-.878 2.122v4.007a4 4 0 01-4 4h-.5"
                  />
                </svg>
              </div>
              <div className="ml-6">
                <h2 className="text-sm font-semibold leading-6 text-slate-900">
                  Key SEO Techniques
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  After thirteen years and hundreds of SEO clients we&apos;ve
                  narrowed down what works and what doesn&apos;t.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="p-0.5">
                <svg
                  className="h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-indigo-500/[.12]"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 40 40"
                >
                  <path
                    className="fill-sky-50 stroke-sky-500"
                    d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z"
                  />
                  <path
                    className="stroke-sky-500/50"
                    d="M7.75 21.25v-1.5a4 4 0 014-4h7.5m5 5v7.5a4 4 0 01-4 4h-1.5M27.75 32.25h.5a4 4 0 004-4v-10.5m-10-10h-10.5a4 4 0 00-4 4v.5"
                  />
                  <path className="stroke-sky-500" d="M31.5 8.5l-23 23" />
                  <path
                    className="stroke-sky-500"
                    d="M25.75 7.75h4.5a2 2 0 012 2v4.5m-18 18h-4.5a2 2 0 01-2-2v-4.5"
                  />
                </svg>
              </div>
              <div className="ml-6">
                <h2 className="text-sm font-semibold leading-6 text-slate-900">
                  Code. Content. Context.
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Bringing together code, content and context sparks a
                  synergistic boosting effect on your businesses search ranking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_-1px_1px_rgba(0,0,0,0.06)]" />
    </div>
  )
}

export default SeoHero
