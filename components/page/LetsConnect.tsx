import dynamic from "next/dynamic"
import { FC } from "react"

const DevOpsForm = dynamic(() => import("@/components/form/DevOpsForm"))

const LetsConnect: FC = () => {
  return (
    <div className=" overflow-hidden sm:mb-16 md:mb-20 sm:px-6 md:px-8">
      <div className="relative max-w-container mx-auto pt-10 sm:pt-24 lg:pt-16">
        <section className=" my-8 grid gap-x-6 space-y-10 lg:my-12 lg:grid-cols-2 lg:space-y-0 items-center">
          <div className="flex flex-col space-y-3">
            <span className="text-base px-4 font-semibold leading-7 text-sky-500">
              Contact us
            </span>
            <h1 className="text-4xl px-4 font-extrabold tracking-tight text-slate-900 xl:text-5xl xl:leading-[3.5rem]">
              Let’s Connect
            </h1>
            <div className="prose max-w-none px-4">
              <p>
                Discover how you can add power to your business with a modern
                website, structured data integration, built-in high performing
                seo, analyze real-time data, and more.
              </p>
              <p />
              <table>
                <tbody>
                  <tr>
                    <td>
                      <p>
                        <i>
                          “Hiring Buchanan DevOps was a no-brainer for us just
                          on the technology and support alone, but we were also
                          able to generate a meaningful ranking in the search
                          engine results, reinvent our brands digital presence
                          and grow our business.” - Kevin Riddett, CEO of
                          RailWorks
                        </i>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p />
            </div>
          </div>
          <DevOpsForm />
        </section>
      </div>
    </div>
  )
}

export default LetsConnect
