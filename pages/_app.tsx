import type { AppProps } from "next/app"
import dynamic from "next/dynamic"
import { FC } from "react"

import { useAnalytics } from "@/lib/analytics"

import "../css/fonts.css"
import "../css/main.css"

const Head = dynamic(() => import("@/data/head/Head"))
const Page = dynamic(() => import("@/components/page/Page"))

const App: FC<AppProps> = ({ Component, pageProps }) => {
  useAnalytics()
  return (
    <>
      <Head />
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  )
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
})
