import NextDocument, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document"
import Script from "next/script"

import clsx from "clsx"

import { gtagUrl, renderSnippet } from "@/lib/analytics"

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html
        lang="en"
        className=" [--scroll-mt:9.875rem] lg:[--scroll-mt:6.3125rem]"
      >
        <Head>
          <Script async src={gtagUrl} />
          <Script
            dangerouslySetInnerHTML={{ __html: renderSnippet() as string }}
          />
        </Head>
        <body className={clsx("antialiased text-slate-400")}>
          <Main />
          <NextScript />
          <script> </script>
        </body>
      </Html>
    )
  }
}
