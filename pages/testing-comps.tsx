import { NextPage } from "next"

import SeoForm from "@/components/form/SeoForm"
import GridItem from "@/components/GridItem"
import Heading from "@/components/page/Heading"
import Section from "@/components/page/Section"
import SectionComp from "@/components/page/SectionFlex"
import { WEB_DESIGN_BENEFITS, WEB_DESIGN_PROCESS } from "@/lib/webServices"

const TestingComps: NextPage = () => {
  return (
    <>
      <Section id="seo-audit">
        <div className="mx-auto items-center grid max-w-2xl grid-cols-1 gap-x-14 gap-y-4  md:gap-y-10 lg:max-w-5xl lg:px-8 xl:max-w-none xl:grid-cols-12 xl:px-0">
          <div className="lg:col-span-5">
            <Heading
              description={
                "Discover inisghts, trends, ranking, popular keywords, opportunities, and your site's overall SEO performance."
              }
              heading="Request an SEO audit."
              subHeading="How's your site performing?"
            />
          </div>
          <div className="-mb-4 relative lg:col-span-8 xl:col-span-7 xl:col-start-6 ring-1 ring-slate-900/5 sm:mx-0 sm:rounded-2xl -mx-5">
            <div className="flex absolute -bottom-px left-1/2 -ml-48 h-[2px] w-96">
              <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
              <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
              <div className="-ml-[100%] w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
              <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
            </div>
            <div className="relative flex flex-col bg-slate-50 px-5 py-8 sm:rounded-2xl">
              <SeoForm />
            </div>
          </div>
        </div>
      </Section>
      <SectionComp
        heading="Why design and develop a website?"
        height={0}
        id=""
        image={"/content/google-analytics-chart.svg"}
        position={"right"}
        subHeading="Increase your online presence."
        width={0}
      >
        <p className="mt-4 space-y-6 text-slate-700  text-[16px]">
          With thoughtful planning and consideration, we&apos;ll create a site
          that will successfully produce incredible results – whether focused on
          sales, leads or engagement with customers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-4">
          {WEB_DESIGN_BENEFITS.map(item => (
            <GridItem key={item.name} {...item} />
          ))}
        </div>
      </SectionComp>
      <SectionComp
        heading={"Web Design Process"}
        height={0}
        id={"web-design-process"}
        image={"/content/badge-desktop-wire-frame.svg"}
        position={"left"}
        subHeading={"Easy web design process."}
        width={0}
      >
        <p className="mt-4 space-y-6 text-slate-700  text-[16px]">
          Let Buchanan DevOps&apos;s expertise guide your web design project to
          create an engaging website that will lead to increased conversions. We
          build each website from scratch which allows us to design with intent
          for each brand and portray their message how they see fit.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-4">
          {WEB_DESIGN_PROCESS.map(item => (
            <GridItem key={item.name} {...item} />
          ))}
        </div>
      </SectionComp>
    </>
  )
}

export default TestingComps
