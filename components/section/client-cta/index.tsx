import Image from "next/image"
import { FC } from "react"

import { Tab } from "@headlessui/react"

import { clients } from "@/lib/clients"

const ClientCta: FC = () => {
  return (
    <section className="max-w-container mx-auto" id="client_tabs">
      <div
        className="py-4 px-4 sm:px-6 lg:px-8 mx-4 lg:mx-0"
        id="client_tabs_container"
      >
        <Tab.Group>
          <Tab.List>
            {clients.map(({ icon, company }) => (
              <Tab key={`${company}`}>
                <Image
                  alt={`${company}-logo`}
                  height={50}
                  src={icon}
                  width={50}
                />
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {clients.map(({ logo, image, company, author, description }) => (
              <Tab.Panel key={`${company}`} className="">
                <div
                  className="grid grid-flow-row grid-cols-12"
                  id="tab_panel_information"
                >
                  <div
                    className="col-span-6 before:bg-slate-800 before:p-8 before:absolute before:-z-10  before:rounded-3xl relative"
                    id="company-information"
                  >
                    <div className="" id={`${company}-logo`}>
                      <Image
                        alt={`${company}-logo_image`}
                        height={40}
                        src={logo}
                        width={150}
                      />
                    </div>
                    <p
                      className=" mt-14 text-2xl"
                      id={`${company}-description`}
                    >
                      {description}
                    </p>
                    <div className="" id="author-company">
                      <p className="" id={`${author}`}>
                        {author}
                      </p>
                      <p className="" id={`${company}`}>
                        {company}
                      </p>
                    </div>
                  </div>
                  <div
                    className=" col-span-6 flex flex-col items-center"
                    id="company-image"
                  >
                    <Image
                      alt={`${company}-image`}
                      height={410}
                      src={image}
                      width={540}
                    />
                  </div>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  )
}

export default ClientCta
