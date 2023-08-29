import { FC } from "react"

import { HeroText } from "./Headings"
import { FadeIn } from "./motion/FadeIn"

const ClientLetter: FC = () => {
  return (
    <section
      className="bg-black relative flex flex-col items-center px-6 py-16 font-sans md:py-24 lg:py-16 gap-14"
      id="client-cta"
    >
      <FadeIn>
        <HeroText>Lets change the game</HeroText>
      </FadeIn>
      <div className="flex flex-col max-w-xl leading-6 md:text-lg lg:text-lg">
        <FadeIn className="opacity-70">
          <p>
            It&apos;s time for a new beginning in compiler infrastructure for
            the entire web ecosystem. Webpack has been downloaded over 3 billion
            times. It&apos;s become an integral part of building for the web.
            But just like Babel and Terser, it&apos;s time to go all-in on
            native. I joined Vercel and assembled a team of world class
            engineers to build the web&apos;s next generation bundler.
          </p>
          <br />
          <p>
            This team has taken lessons from 10 years of Webpack, combined with
            the innovations in incremental computation from Turborepo and
            Google&apos;s Bazel, and invented an architecture ready to withstand
            the next 10 years.
          </p>
          <br />
          <p>
            With that, we&apos;re excited to introduce Turbopack, our
            Rust-powered successor to Webpack. It will harness the power of our
            build system, Turborepo, for massive performance improvements.
            Turbopack is the new foundation of high-performance bare-metal
            tooling and is now open source—we&apos;re excited to share it with
            you.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

export default ClientLetter
