import Image from "next/image"

type NextImageSrc = Parameters<typeof Image>[0]["src"]

export type Feature = {
  name: string
  text: string
  icon?: NextImageSrc
  page: "all" | "website" | "seo"
}

export type Features = Array<Feature>

export const WEB_FEATURES: Features = [
  {
    name: "Basic SEO",
    text: `On-Page SEO to get you started.`,
    icon: "/icons/heroicons/document-magnify.svg",
    page: "website",
  },
  {
    name: "Structured Data",
    text: `Applied to each type of content.`,
    icon: "/icons/heroicons/code-box.svg",
    page: "website",
  },
  {
    name: `Headless CMS`,
    text: `Content management system.`,
    icon: "/icons/heroicons/identification.svg",
    page: "website",
  },
  {
    name: "Contact Form(s)",
    text: `Submissions stored in your CMS.`,
    icon: "/icons/heroicons/envelope.svg",
    page: "website",
  },
  {
    name: "Custom Website",
    text: `Next.JS website to match branding.`,
    icon: "/icons/heroicons/window.svg",
    page: "website",
  },
  {
    name: `Mobile Optimization`,
    text: `Website looks great on any device.`,
    icon: "/icons/heroicons/mobile-phone.svg",
    page: "website",
  },
]

export const WEB_UI_FEATURES: Features = [
  {
    name: "Functionality",
    text: `Minimal Fuss, quick result. `,
    icon: "/icons/heroicons/adjustments.svg",
    page: "website",
  },
  {
    name: "Response Time",
    text: `Users go back after 3 seconds.`,
    icon: "/icons/heroicons/clock.svg",
    page: "website",
  },
  {
    name: "Universal Branding",
    text: `Logos, components, and copy.`,
    icon: "/icons/heroicons/swatch.svg",
    page: "website",
  },
  {
    name: "Ease of Use",
    text: `Users can accomplish tasks fast.`,
    icon: "/icons/heroicons/qr-code.svg",
    page: "website",
  },
  {
    name: "Data Collection",
    text: `Prioritize based on user data.`,
    icon: "/icons/heroicons/server.svg",
    page: "website",
  },
  {
    name: "Brand Reputation",
    text: `First impressions are everything.`,
    icon: "/icons/heroicons/trophy.svg",
    page: "website",
  },
  {
    name: "Company Visibility",
    text: `Google ranking boost for UI/UX.`,
    icon: "/icons/heroicons/eye-slash.svg",
    page: "website",
  },
  {
    name: "Increased Conversions",
    text: `Signups, purchases, subscriptions.`,
    icon: "/icons/heroicons/chart-increase.svg",
    page: "website",
  },
]

export const WEB_APP_FEATURES: Features = [
  {
    name: `Site Search`,
    text: `Digital search and discovery.`,
    icon: "/icons/heroicons/search.svg",
    page: "website",
  },
  {
    name: `Push Notifications`,
    text: `Powerful mobile communication.`,
    icon: "/icons/heroicons/bell-alert.svg",
    page: "website",
  },
  {
    name: `User Accounts`,
    text: `Store sensitive user data.`,
    icon: "/icons/heroicons/user.svg",
    page: "website",
  },
  {
    name: `Subscriptions`,
    text: `Membership business models.`,
    icon: "/icons/heroicons/dollar.svg",
    page: "website",
  },
  {
    name: `E-Commerce`,
    text: `Connect buyers with merchandise.`,
    icon: "/icons/heroicons/ecommerce.svg",
    page: "website",
  },
  {
    name: `Live Chat`,
    text: `Solve customers’ problems fast.`,
    icon: "/icons/heroicons/chat-bubble.svg",
    page: "website",
  },
  {
    name: `Payment Processing`,
    text: `Digital payment transactions.`,
    icon: "/icons/heroicons/credit-card.svg",
    page: "website",
  },
  {
    name: `Inventory / Orders`,
    text: `Streamline customer fulfillment.`,
    icon: "/icons/heroicons/truck.svg",
    page: "website",
  },
]

export const SEO_ON_PAGE: Features = [
  {
    name: "Technical SEO",
    text: `We'll identify how you’re business is currently indexed with the search engines, discover usability flaws, and find bad code that may be affecting your SEO performance.`,

    page: "seo",
  },
  {
    name: "Structured Data",
    text: `Integrating structured data provides key information to the search engines when indexed pertaining to classification, type of business and offerings.`,

    page: "seo",
  },
  {
    name: "Mobile Responsiveness",
    text: "Google favors sites that are optimized for faster mobile speeds - even for desktop searches. It's critical that your website's readable and navigable on mobile devices.",
    page: "seo",
  },
  {
    name: "Keyword Strategy",
    text: `We research and select industry specific, highly searched keywords with high conversion rates. Then we update content and meta data to target those keywords.`,

    page: "seo",
  },
]

export const SEO_OFF_PAGE: Features = [
  {
    name: "Google My Business",
    text: `Listing and optimizing your Google Business Listing with complete and accurate information with Google Verification adds authenticity and authority for your customers.`,
    page: "seo",
  },
  {
    name: "Social Media",
    text: "It's important to consistently engage your community on social media and use it for content distribution. More engagement will encourage backlinks, shares, and increase site traffic.",
    page: "seo",
  },
  {
    name: "Citations",
    text: `We add and add your business information with authority websites that list your business name, address, and phone number (BBB) which generates backlinks.`,
    page: "seo",
  },
  {
    name: "Ratings & Reviews",
    text: "We integrate email automation software to reach out to customers after a sale has taken place to encourage them to rate and review your company on multiple platforms.",
    page: "seo",
  },
]

export const SEO_SERVICES: Features = [
  {
    name: "Technical SEO",
    text: `We conduct an audit of your website to identify how your indexing with the search engines, usability issues and identify issues that may be affecting your SEO performance.`,

    page: "seo",
  },
  {
    name: "Structured Data",
    text: `Integrating structured data provides revelvant information to the search engines pertaining to webpage classification, business information and service offerings.`,

    page: "seo",
  },
  {
    name: "Keyword Strategy",
    text: `We research and select industry specific, highly searched keywords with high conversion rates. We use these targeted keywords as the basis for your SEO strategy`,

    page: "seo",
  },
  {
    name: "On-Page SEO",
    text: `Optimize content to be inline with our keyword strategy. This includes titles, meta descriptions, link building, structured data integrations and image optimization.`,

    page: "seo",
  },
  {
    name: "Page Optimization",
    text: `We write and optimize content to obtain high rank in search engines, which drives traffic, generates sales leads and increases ecommerce revenue for your business.`,

    page: "seo",
  },
  {
    name: "Google My Business",
    text: `Listing and optimizing your Google Business Listing with complete and accurate information with Google Verifcation adds authenticity and authority for your customers.`,

    page: "seo",
  },
  {
    name: "Citations",
    text: `We add and add your business information with authority websites that list your business name, address and phone number (BBB) which generates backlinks.`,

    page: "seo",
  },
  {
    name: "Tracking & Reporting",
    text: `Buchanan DevOps sets up real time reporting to allow you to closely monitor your search engine optimization campaign results and success.`,

    page: "seo",
  },
]

export const SEO_BENEFITS: Features = [
  {
    name: "Increased Revenue",
    text: ``,

    page: "seo",
  },
  {
    name: "Reach New Audience",
    text: ``,

    page: "seo",
  },
  {
    name: "Improve Credibility",
    text: ``,

    page: "seo",
  },
  {
    name: "Grow Website Traffic",
    text: ``,

    page: "seo",
  },
  {
    name: "Increase Search Ranking",
    text: ``,

    page: "seo",
  },
  {
    name: "Raise Brand Visibility",
    text: ``,

    page: "seo",
  },
]
