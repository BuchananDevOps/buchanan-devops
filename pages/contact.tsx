import dynamic from "next/dynamic"
import Link from "next/link"
import { FC } from "react"

const ContactForm = dynamic(() => import("@/components/form/ContactForm"))
const Contact: FC = () => {
  return (
    <main className="pb-8 lg:pb-12">
      <div className=" overflow-hidden sm:mb-32 md:mb-40 sm:px-6 md:px-8">
        <div className="relative max-w-container mx-auto pt-10 sm:pt-24 lg:pt-16">
          <section className=" my-8 grid gap-x-6 space-y-10 lg:my-12 lg:grid-cols-2 lg:space-y-0 items-center">
            <div className="flex flex-col space-y-3">
              <span className="text-base px-4 font-semibold leading-7 text-indigo-500">
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
                <p>
                  Submit the form with your question or call{" "}
                  <Link href="tel:+13024648832">+1 302 464 8832</Link> and
                  we&apos;ll get back to you shortly. If you&apos;re an existing
                  client and have a technical support question, please{" "}
                  <Link
                    href="mailto:buchanancomp@gmail.com?subject=Project Support Request"
                    title="Email Address us for Support"
                  >
                    reach out through email.
                  </Link>
                  .{" "}
                </p>
                <p />
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <p>
                          <i>
                            “Hiring Buchanan DevOps was a no-brainer for us just
                            on the technology and support alone, but we were
                            also able to generate a meaningful ranking in the
                            search engine results, reinvent our brands digital
                            presence and grow our business.” - Kevin Riddett,
                            CEO of RailWorks
                          </i>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p />
              </div>
            </div>
            <ContactForm />
          </section>
        </div>
      </div>
    </main>
  )
}

export default Contact
