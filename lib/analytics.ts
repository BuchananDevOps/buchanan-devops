import { Router } from "next/router"
import React from "react"

type WindowWithAnalytics = Window &
  typeof globalThis & {
    gtag: any
  }

const trackingID = "G-0QJM4LB7CT"

export const useAnalytics = () => {
  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (process.env.NODE_ENV === "production") {
        ;(window as WindowWithAnalytics).gtag("config", trackingID, {
          page_location: url,
          page_title: document.title,
        })
      }
    }
    Router.events.on("routeChangeComplete", handleRouteChange)
    return () => Router.events.off("routeChangeComplete", handleRouteChange)
  }, [])
}

export const gtagUrl = `https://www.googletagmanager.com/gtag/js?id=${trackingID}`

export function renderSnippet(): string | any {
  if (process.env.NODE_ENV === "production") {
    return `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${trackingID}');
    `
  }
}
