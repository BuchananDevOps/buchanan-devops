import { NextPage } from "next"
import dynamic from "next/dynamic"
import Link from "next/link"

import { SEO_ON_PAGE } from "@/lib/features"

const GridItem = dynamic(() => import("@/components/GridItem"))
const OffPage = dynamic(() => import("@/components/page/OffPage"))
const SchemaEvent = dynamic(() => import("@/components/SchemaEvent"))
const SchemaLocal = dynamic(() => import("@/components/SchemaLocal"))
const SeoHero = dynamic(() => import("@/components/hero/SeoHero"))
const PartnerCTA = dynamic(() => import("@/components/cta/PartnerCTA"))
const SectionFlow = dynamic(() => import("@/components/page/SectionFlow"))
const Faq = dynamic(() => import("@/components/page/Faq"))
const SeoForm = dynamic(() => import("@/components/form/SeoForm"))
const SectionCenter = dynamic(() => import("@/components/page/SectionCenter"))

const SeoPage: NextPage = () => {
  return (
    <>
      <SeoHero />
      <PartnerCTA heading="Certified SEO Expert." page="seo" />
      <SectionFlow
        heading={"SEO Services"}
        height={592}
        id={"seo-services"}
        image={"/content/seo/analytics-graph.svg"}
        position={"left"}
        subHeading={"Search Engine Optimization"}
        width={794}
      >
        <p className="mt-4 space-y-6 text-slate-700  text-[15px]">
          Search engine optimization (SEO) is a complex and ever-evolving field
          that requires an ongoing effort to keep up with the latest trends. We
          specialize in helping businesses show up on the front page of search
          engines through a variety of tactics.
        </p>
        <p className="mt-4 space-y-6 text-slate-700  text-[15px]">
          Our tactics include a mix of {""}
          <Link
            className="font-mono font-medium text-sky-500"
            href="/seo#on-page-seo"
            title="On-Page SEO"
          >
            On-Page
          </Link>
          {""} and {""}
          <Link
            className="font-mono font-medium text-sky-500"
            href="/seo#off-page-seo"
            title="Off-Page SEO"
          >
            Off-Page
          </Link>
          {""} SEO. This includes optimizing website content for higher rankings
          in organic searches, improving technical SEO elements such as
          metadata, data schema integration, site structure, researching
          relevant keywords to target within content marketing campaigns,
          creating backlinks from authoritative websites to drive traffic and
          increasing visibility across social media platforms.
        </p>
        <p className="mt-4 space-y-6 text-slate-700  text-[15px]">
          We also provide comprehensive {""}
          <Link
            className="font-mono font-medium text-sky-500"
            href="/seo#seo-audit"
            title="SEO Audit"
          >
            SEO Audits
          </Link>{" "}
          {""}
          and monthly analysis reports so you can track your progress over time
          with us.
        </p>
      </SectionFlow>
      <SectionFlow
        heading={"On-Page SEO"}
        id={"on-page-seo"}
        position={"right"}
        secondary={
          <div className="flex flex-row gap-x-4">
            <SchemaEvent />
            <SchemaLocal />
          </div>
        }
        subHeading={"Google can't read english."}
      >
        <p className="mt-4 text-slate-700  text-[16px]">
          Search engines weren&apos;t built to comprehend our written language.
          Without structured data markup, when Google crawls
          (files/indexes/categorizes) your website, essentially it&apos;s blind.
        </p>
        <p className="mt-4 text-slate-700  text-[16px]">
          On-Page SEO directly communicates with Google about your website and
          what type of business you are, provided services and locality
          information. It defines your site for search engine crawls, indexing
          your information to be connected with future relevant searches.
        </p>
        <p className="mt-4 text-slate-700  text-[16px]">
          We integrate Microdata directly into HTML when possible and JSON-LD
          for dynamic (web app) content. We&apos;ve included two minimized
          examples of JSON-LD structured data in this section for a Local
          Business and Concert.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-1 ">
          {SEO_ON_PAGE.map(item => (
            <GridItem
              key={item.name}
              className="bg-white p-4 Z-50 ring-1 rounded-md ring-slate-900/5 shadow-sm"
              {...item}
            />
          ))}
        </div>
      </SectionFlow>
      <OffPage />
      <SectionCenter
        description={
          "Discover inisghts, trends, ranking, popular keywords, opportunities, and your site's overall SEO performance."
        }
        heading="Request an SEO audit."
        id={"seo-audit"}
        subHeading="How's your site performing?"
      >
        <div className="-mb-4 mt-4 relative lg:col-span-8 xl:col-span-7 xl:col-start-6 ring-1 ring-slate-900/5 sm:mx-0 sm:rounded-2xl -mx-5">
          <div className="flex absolute -bottom-px sm:ml-16 h-[2px] w-full sm:w-3/4">
            <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgb(88,165,255,0)_0%,#a67af4,#ff3358_67.19%,#ff4fd81f_100%)]" />
            <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgb(88,165,255,0)_0%,#a67af4,#ff3358_67.19%,#ff4fd81f_100%)]" />
            <div className="-ml-[100%] w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgb(88,165,255,0)_0%,#a67af4,#ff3358_67.19%,#ff4fd81f_100%)]" />
            <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgb(88,165,255,0)_0%,#a67af4,#ff3358_67.19%,#ff4fd81f_100%)]" />
          </div>
          <div className="relative flex flex-col bg-slate-900/50 px-5 pt-4 pb-5 sm:rounded-2xl">
            <SeoForm />
          </div>
        </div>
      </SectionCenter>
      <Faq
        heading={"Frequently asked SEO questions"}
        id={"seo-faq"}
        subHeading={"Everything you need to know."}
        type="seo"
      />
    </>
  )
}

export default SeoPage
