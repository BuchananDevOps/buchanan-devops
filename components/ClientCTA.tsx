import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

const ClientCta: FC = () => {
  return (
    <section className="bg-black" id="client-cta">
      <div className="mx-auto max-w-4xl flex flex-col text-center justify-center">
        <div className="flex justify-center" id="client-cta_p-container">
          <p className="text-white max-w-3xl mx-auto text-lg" id="client-cta_p">
            With years of web design experience, we can provide tailored
            solutions for small to medium businesses as well as solo
            entrepreneurs. Our clients appreciate that they can rely on us for
            reliable advice and support throughout the entire process – from
            concept development through launch – ensuring a success every time.
          </p>
        </div>
        <div className=" my-10" id="client-cta_logos-container">
          <div
            className="grid grid-cols-4 gap-2 items-center align-middle place-items-center"
            id="client-cta_logo"
          >
            <Image
              alt="7 Acres Logo"
              className="client-cta_logo"
              height={150}
              src="/portfolio/client-logos/7acres.svg"
              width={150}
            />
            <Image
              alt="Casecade Naturals Logo"
              className="client-cta_logo"
              height={150}
              src="/portfolio/client-logos/cascade-logo-white.svg"
              width={150}
            />
            <Image
              alt="Companion Ag Logo"
              className="client-cta_logo"
              height={150}
              src="/portfolio/client-logos/companion-logo-white.svg"
              width={150}
            />
            <Image
              alt="CSA Logo"
              className="client-cta_logo"
              height={150}
              src="/portfolio/client-logos/csa-logo-white.svg"
              width={100}
            />
            <Image
              alt="Della Terra Logo"
              className="client-cta_logo"
              height={150}
              src="/portfolio/client-logos/della-terra-logo-white.svg"
              width={150}
            />
            <Image
              alt="Inflect Logo"
              className="client-cta_logo"
              height={150}
              src="/portfolio/client-logos/inflect-wordmark_white.svg"
              width={150}
            />
            <Image
              alt="Jordan process Logo"
              className="client-cta_logo"
              height={150}
              src="/portfolio/client-logos/jordanprocess-logo-white.svg"
              width={150}
            />
            <Image
              alt="Midrive Logo"
              className="client-cta_logo"
              height={150}
              src="/portfolio/client-logos/midrive-logo.svg"
              width={100}
            />
            <Image
              alt="Naturea Logo"
              className="client-cta_logo"
              height={150}
              src="/portfolio/client-logos/naturea-logo.png"
              width={150}
            />
            <Image
              alt="Olistica Group Logo"
              className="client-cta_logo"
              height={150}
              src="/portfolio/client-logos/olistica-logo.svg"
              width={100}
            />
            <Image
              alt="Railworks Logo"
              className="client-cta_logo"
              height={150}
              src="/portfolio/client-logos/railworks-logo.svg"
              width={150}
            />
          </div>
        </div>
        <div
          className="mt-8 flex flex-col items-center gap-4"
          id="client-cta_button"
        >
          <h4 className="font-bold text-xl -tracking-tight text-white">
            Check out some of our favorite designs
          </h4>
          <Link
            className="inline-flex w-60 justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-sky-700 text-white hover:bg-slate-700"
            href="#services"
          >
            <span>
              Browse <span className="hidden sm:inline">services</span>{" "}
              <span aria-hidden="true" className="text-slate-400 sm:inline">
                →
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ClientCta
