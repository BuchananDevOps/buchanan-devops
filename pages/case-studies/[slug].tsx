import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { FC } from "react"

import { Tab } from "@headlessui/react"

import { cases } from "@/lib/caseStudies"

const SectionNoHeader = dynamic(
  () => import("@/components/page/SectionNoHeader")
)
const LetsConnect = dynamic(() => import("@/components/page/LetsConnect"))
const ImageGallery = dynamic(() => import("@/components/ImageGallery"))

const Case: FC = () => {
  const router = useRouter()
  const { slug } = router.query
  const currentCaseStudy = cases.find(study => study.slug === slug)

  if (!currentCaseStudy) {
    return <div>Case study not found</div>
  }

  const {
    company,
    name,
    description,
    extended,
    introduction,
    introImage,
    challenge,
    solution,
    solutionImage,
    results,
    conclusion,
    images,
    logo,
    url,
    href,
    macbook,
  } = currentCaseStudy

  return (
    <>
      <div className="relative -mt-[5.75rem] overflow-hidden bg-slate-50 pt-12 md:pt-[5.75rem]">
        <div className="absolute inset-y-0 hidden w-full min-w-[1360px] bg-[url('/public/img/beams-templates-header.png')] bg-[length:2000px_100%] bg-[position:calc(50%_+_220px)_-50px] bg-no-repeat lg:block" />
        <div className="mx-auto max-w-container px-4 pt-4 sm:px-6 flex flex-col-reverse lg:flex-row lg:px-8">
          <div className="relative z-20 mx-auto max-w-[40rem] pb-16 pt-16 lg:mx-0 lg:w-[40rem] lg:max-w-none lg:flex-none lg:pb-24 lg:pr-4 lg:pt-20">
            <h1 className="text-base font-semibold leading-7 text-sky-500">
              {description}
            </h1>
            <p className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-black sm:text-5xl sm:leading-[3.5rem]">
              {name}.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {extended}
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700"
                href="#introduction"
              >
                <span>
                  Case Study{" "}
                  <span aria-hidden="true" className="text-slate-400 sm:inline">
                    →
                  </span>
                </span>
              </Link>
              <Link
                className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 "
                href={url}
                target="_blank"
                title={href}
              >
                <span>
                  Live Website Preview{" "}
                  <span aria-hidden="true" className="text-black/25 sm:inline">
                    →
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <div className="relative z-10 block self-center">
            <div className="mt-12 flex">
              <div className="relative flex-shrink-0">
                <div className="relative z-10 overflow-hidden flex flex-col">
                  <div
                    className="flex justify-center self-center -mb-9 z-50 items-center h-18 w-1/2 px-7 rounded-md bg-[rgba(9,9,11,0.97)] hover:bg-[rgba(9,9,11,0.85)] bg-[image:radial-gradient(221.02%_101.62%_at_50%_0%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_78.73%)] shadow-[0_2px_20px_rgba(0,0,0,0.5),0_20px_28px_rgba(0,0,0,0.4),inset_0_0.5px_0_rgba(153,253,255,0.1),inset_0_0_0_1px_rgba(255,255,255,0.06)]"
                    id="cs_logo_wrapper"
                  >
                    <div className="" id="cs_logo">
                      <Image
                        alt={`${company} Logo`}
                        className="h-12 w-full "
                        height={50}
                        src={logo}
                        width={50}
                      />
                    </div>
                  </div>
                  <Image
                    alt={"Web Design Hero Buchanan DevOps Hero Item"}
                    className="aspect-[1008/635] w-[350px] sm:w-[450px] h-full lg:w-[650px]"
                    height={635}
                    src={macbook}
                    width={1008}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_-1px_1px_rgba(0,0,0,0.06)]" />
      </div>
      <Tab.Group defaultIndex={0}>
        <Tab.List>
          <div className="relative z-20 sm:z-auto">
            <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
              <div className="relative mx-auto grid max-w-[40rem] grid-cols-3 gap-8 lg:max-w-none">
                <Tab className={"sticky top-0"}>
                  {({ selected }) => (
                    /* Use the `selected` state to conditionally style the selected tab. */
                    <button
                      className={
                        selected
                          ? " border-t border-sky-500 text-base font-semibold leading-7 text-sky-500 relative -mt-px pb-6 pt-4 text-left md:pb-10 md:pt-8 w-full"
                          : " w-full bg-white text-black text-base font-semibold leading-7 relative -mt-px pb-6 pt-4 text-left md:pb-10 md:pt-8"
                      }
                      type="button"
                    >
                      Introduction
                    </button>
                  )}
                </Tab>
                <Tab className={"sticky top-0"}>
                  {({ selected }) => (
                    /* Use the `selected` state to conditionally style the selected tab. */
                    <button
                      className={
                        selected
                          ? " border-t border-sky-500 text-base font-semibold leading-7 text-sky-500 relative -mt-px pb-6 pt-4 text-left md:pb-10 md:pt-8 w-full"
                          : " w-full bg-white text-black text-base font-semibold leading-7  relative -mt-px pb-6 pt-4 text-left md:pb-10 md:pt-8"
                      }
                      type="button"
                    >
                      Solution
                    </button>
                  )}
                </Tab>
                <Tab className={"sticky top-0"}>
                  {({ selected }) => (
                    /* Use the `selected` state to conditionally style the selected tab. */
                    <button
                      className={
                        selected
                          ? " border-t border-sky-500 text-base font-semibold leading-7 text-sky-500 relative -mt-px pb-6 pt-4 text-left md:pb-10 md:pt-8 w-full"
                          : " w-full bg-white text-black text-base font-semibold leading-7  relative -mt-px pb-6 pt-4 text-left md:pb-10 md:pt-8"
                      }
                      type="button"
                    >
                      Results
                    </button>
                  )}
                </Tab>
              </div>
            </div>
          </div>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <SectionNoHeader
              height={700}
              id={"introduction"}
              image={introImage}
              imageClass="max-h-[70rem] rounded-xl shadow-xl ring-1 ring-slate-900/5"
              position={"left"}
              width={794}
            >
              <ol className="">
                <li className="mt-8 marker:bg-black marker:w-14 marker:h-14">
                  <p className="mt-4 text-3xl sm:text-2xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50 ">
                    Introduction:
                  </p>
                  <p className="mt-4 text-base leading-7 text-slate-700">
                    {introduction}
                  </p>
                </li>
                <li className="mt-8 marker:bg-black marker:w-14 marker:h-14">
                  <p className="mt-4 text-3xl sm:text-2xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50 ">
                    Challenge:
                  </p>
                  <p className="mt-4 text-base leading-7 text-slate-700">
                    {challenge}
                  </p>
                </li>
                <li className="mt-8 marker:bg-black marker:w-14 marker:h-14">
                  <p className="mt-4 text-3xl sm:text-2xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50 ">
                    Serivces Provided:
                  </p>
                  <ul>
                    {solution?.map(({ name }) => (
                      <li
                        key={name}
                        className="items-center text-base font-semibold leading-7 text-sky-500"
                      >
                        <span className="mr-2.5">{name}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              </ol>
            </SectionNoHeader>
          </Tab.Panel>
          <Tab.Panel>
            <SectionNoHeader
              height={700}
              id={"solution"}
              image={solutionImage}
              imageClass="max-h-[70rem] rounded-xl shadow-xl ring-1 ring-slate-900/5"
              position={"left"}
              width={794}
            >
              <ol className="">
                {solution?.map(({ name, content }) => (
                  <li
                    key={name}
                    className="mt-8 marker:bg-black marker:w-14 marker:h-14"
                  >
                    <p className="mt-4 text-3xl sm:text-2xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50 ">
                      {name}:
                    </p>
                    <p className="mt-4 text-base leading-7 text-slate-700">
                      {content}
                    </p>
                  </li>
                ))}
              </ol>
            </SectionNoHeader>
          </Tab.Panel>
          <Tab.Panel>
            <SectionNoHeader
              id={"results"}
              position={"left"}
              secondary={<ImageGallery images={images} />}
            >
              <ol className="">
                {results?.map(({ name, content }) => (
                  <li
                    key={name}
                    className="mt-8 marker:bg-black marker:w-14 marker:h-14"
                  >
                    <p className="mt-4 text-3xl sm:text-2xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50 ">
                      {name}:
                    </p>
                    <p className="mt-4 text-base leading-7 text-slate-700">
                      {content}
                    </p>
                  </li>
                ))}
                <li className="mt-8 marker:bg-black marker:w-14 marker:h-14">
                  <p className="mt-4 text-3xl sm:text-2xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50 ">
                    Conclusion:
                  </p>
                  <p className="mt-4 text-base leading-7 text-slate-700">
                    {conclusion}
                  </p>
                </li>
              </ol>
            </SectionNoHeader>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <LetsConnect />
    </>
  )
}

export default Case
