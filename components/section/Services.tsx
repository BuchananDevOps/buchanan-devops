import Image from "next/image"
import { FC } from "react"

import { process } from "@/lib/process"

const Services: FC = () => {
  return (
    <section className=" text-black">
      <div className=" max-w-container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {process.map(({ image, title, description }) => (
            <div key={title} className="flex flex-col md:flex-row">
              <Image
                alt={`${title} Image`}
                height={250}
                src={image}
                width={250}
              />
              <div className="flex flex-col">
                <h2 className="impact_title">{title}</h2>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
