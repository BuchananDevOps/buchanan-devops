import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

import { Client, clients } from "@/lib/showcase"

type Props = {
  name: string
  description: string
  image: string
  alt: string
  url: string
  href: string
}

const LetsConnect = dynamic(() => import("@/components/page/LetsConnect"))

const ShowcaseItem: FC<Props> = ({
  name,
  description,
  image,
  alt,
  url,
  href,
}) => {
  return (
    <li className="group relative rounded-md bg-[rgba(9,9,11,0.97)] hover:bg-[rgba(9,9,11,0.85)] bg-[image:radial-gradient(221.02%_101.62%_at_50%_0%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_78.73%)] shadow-[0_2px_20px_rgba(0,0,0,0.5),0_20px_28px_rgba(0,0,0,0.4),inset_0_0.5px_0_rgba(153,253,255,0.1),inset_0_0_0_1px_rgba(255,255,255,0.06)]">
      <div className="aspect-[544/306] relative rounded-t-md transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-700 border-b border-dashed border-white/10">
        <Image
          unoptimized
          alt={alt}
          className={
            "absolute inset-0 h-full w-full ring-1 ring-slate-700/50 contrast-125"
          }
          height={306}
          src={image}
          width={544}
        />
      </div>
      <div className="flex flex-wrap items-center  p-6">
        <h2 className="text-sm leading-6 text-white font-semibold group-hover:text-sky-400">
          <Link href={`${url}`} target="_blank" title={`View ${href} Here`}>
            <span className="absolute inset-0 rounded-3xl" />
            {name}
          </Link>
        </h2>
        <svg
          className="w-6 h-6 flex-none opacity-0 group-hover:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M9.75 15.25L15.25 9.75M15.25 9.75H10.85M15.25 9.75V14.15"
            stroke="#0EA5E9"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
        <p className="w-full flex-none text-[0.8125rem] leading-6 text-slate-400 dark:text-slate-400">
          {description}
        </p>
      </div>
    </li>
  )
}

type ShowcaseProps = {
  client: Client[]
}

const Showcase: FC<ShowcaseProps> = () => {
  return (
    <main className="mt-16 sm:mt-20 relative">
      <Image
        priority
        unoptimized
        alt=""
        className="hidden dark:sm:hidden sm:block absolute top-[-6.25rem] left-1/2 max-w-none w-[67.8125rem] ml-[-46.875rem] pointer-events-none"
        src={require("@/img/showcase/beams@75.jpg")}
      />
      <Image
        priority
        unoptimized
        alt=""
        className="hidden dark:block absolute top-[-5rem] left-1/2 max-w-none w-[41.1875rem] ml-[-40rem] pointer-events-none"
        src={require("@/img/showcase/beams-index-dark@75.jpg")}
      />
      <div className="relative max-w-3xl px-4 sm:px-6 lg:px-8 mx-auto sm:text-center">
        <h1 className="text-sm leading-6 font-semibold text-sky-500">
          Showcase
        </h1>
        <p className="text-4xl font-extrabold tracking-tight text-slate-900 xl:text-5xl xl:leading-[3.5rem]">
          Checkout some of our favorite websites we&apos;ve built.
        </p>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          You&apos;re company deserves a <em>professional website</em>. Starting
          at <em>$3,000 - $4,000</em> we&apos;d be happy to get things moving
          forward...
        </p>
      </div>
      <ul className="grid max-w-[26rem] sm:max-w-[52.5rem] mt-16 sm:mt-20 md:mt-32 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 lg:gap-y-8 xl:gap-x-8 lg:max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
        {clients.map(client => (
          <ShowcaseItem
            key={client.name}
            alt={client.alt}
            description={client.description}
            href={client.href}
            image={client.image}
            name={client.name}
            url={client.url}
          />
        ))}
      </ul>
      <LetsConnect />
    </main>
  )
}

export default Showcase
