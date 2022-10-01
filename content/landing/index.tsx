import React from 'react';
import {
  Moon,
  Magic,
  Flash,
  Devices,
  Server,
  TagUser,
  RoundPointer,
  Maximize,
  CodeDocument,
  HtmlLogo,
} from '@components';

export default {
  topFeatures: [
    {
      title: 'Search Engine Optimization',
      description:
        'Our search engine optimization strategy is battle-tested with proven techniques, focused on organic seo. ',
      icon: <Magic fill="#FF4ECD" />,
      href: '/search-engine-optimization',
    },
    {
      title: 'UI/UX - Frontend Developer',
      description:
        'Bring your business the exposure you deserve with an elegant, simplified user experience.',
      icon: <Flash fill="#FF4ECD" />,
      href: '/ui-ux-frontend-design',
    },
    {
      title: 'Full-Stack Development',
      description:
        'Web App (PWA) Development, Mobile App Development, and anything else related to React.',
      icon: <Moon fill="#FF4ECD" />,
      href: '/full-stack-development',
    },
    {
      title: 'Dapp Development',
      description:
        'Decentralized applications (Dapps) are the future of the internet. Blockchains are more then currencies...',
      icon: <Devices fill="#FF4ECD" />,
      href: '/dapps',
    },
  ],
  fullFeatures: [
    {
      title: 'Search Marketing (SEM)',
      description:
        'SEM combined with SEO will drive traffic and increase brand awareness for your business.',
      icon: <Server fill="#FF4ECD" />,
    },
    {
      title: 'Digital Marketing',
      description:
        'Branding, Social Media Marketing, Email Marketing, and more. Establishing your brand is key.',
      icon: <TagUser fill="#FF4ECD" />,
    },
    {
      title: 'Business Development',
      description:
        'Focus of your journey while implementing our strategies and tactics for revenue growth.',
      icon: <RoundPointer fill="#FF4ECD" />,
    },
    {
      title: 'Graphic Design',
      description:
        'We offer complete graphic design services for your business. From logo design to business cards.',
      icon: <Maximize fill="#FF4ECD" />,
    },
    {
      title: 'GraphQL API Development',
      description:
        'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.',
      icon: <CodeDocument filled={false} fill="#FF4ECD" />,
    },
    {
      title: 'Static Site Generation',
      description:
        'The fastest websites are static sites. We use Next.js to generate static sites with React.',
      icon: <HtmlLogo fill="#FF4ECD" />,
    },
    {
      title: 'Decentralized Applications',
      description:
        "The future of the internet is decentralized. We'd love to incorporate blockchain technology into your business.",
      icon: <Flash fill="#FF4ECD" />,
    },
    {
      title: 'Project Management',
      description:
        'Managing digital projects is a complex process. We have a proven process to manage your project.',
      icon: <Magic fill="#FF4ECD" />,
    },
  ],
  seoUtilitiesCode: `
    Kenmore White 17" Microwave
    <img src="kenmore-microwave-17in.jpg" alt='Kenmore 17" Microwave' />
    Rated 3.5/5 based on 11 customer reviews
    
    $55.00
    In stock
    
    Product description-
    0.7 cubic feet countertop microwave. Has six preset cooking categories and
     convenience features like Add-A-Minute and Child Lock.
    
    Customer reviews:
    
    Not a happy camper - by Ellie, April 1, 2011
    1/5 stars
    The lamp burned out and now I have to replace it.
    
     Value purchase - by Lucas, March 25, 2011
    4/5 stars
    Great microwave for the price. It is small and fits in my apartment.

    <div itemscope itemtype="https://schema.org/Product">
  <span itemprop="name">Kenmore White 17" Microwave</span>
  <img itemprop="image" src="kenmore-microwave-17in.jpg"  />
  <div itemprop="aggregateRating"
    itemscope itemtype="https://schema.org/AggregateRating">
   Rated <span itemprop="ratingValue">3.5</span>/5
   based on <span itemprop="reviewCount">11</span> customer reviews
  </div>
  <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
    <span itemprop="priceCurrency" content="USD">$</span><span
          itemprop="price" content="1000.00">1,000.00</span>
    <link itemprop="availability" href="https://schema.org/InStock" />In stock
  </div>

  Product description:
  <span itemprop="description">0.7 cubic feet countertop microwave.
  Has six preset cooking categories and convenience features like
  Add-A-Minute and Child Lock.</span>

  Customer reviews:

  <div itemprop="review" itemscope itemtype="https://schema.org/Review">
    <span itemprop="name">Not a happy camper</span> -
    by <span itemprop="author">Ellie</span>,
    <meta itemprop="datePublished" content="2020-04-01">April 1, 2020
    <div itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
      <meta itemprop="worstRating" content = "1">
      <span itemprop="ratingValue">1</span>/
      <span itemprop="bestRating">5</span>stars
    </div>
    <span itemprop="reviewBody">The lamp burned out and now I have to replace
    it. </span>
  </div>

  <div itemprop="review" itemscope itemtype="https://schema.org/Review">
    <span itemprop="name">Value purchase</span> -
    by <span itemprop="author">Lucas</span>,
    <meta itemprop="datePublished" content="2011-03-25">March 25, 2011
    <div itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
      <meta itemprop="worstRating" content = "1"/>
      <span itemprop="ratingValue">4</span>/
      <span itemprop="bestRating">5</span>stars
    </div>
    <span itemprop="reviewBody">Great microwave for the price. It is small and
    fits in my apartment.</span>
  </div>
  ...
</div>

GreatFood
4 stars - based on 250 reviews
1901 Lemur Ave
Sunnyvale, CA 94086
(408) 714-1489
<a href="http://www.greatfood.com">www.greatfood.com</a>

Hours:
Mon-Sat 11am - 2:30pm
Mon-Thur 5pm - 9:30pm
Fri-Sat 5pm - 10pm

Categories: Middle Eastern, Mediterranean
Price Range: $$
Takes Reservations: Yes

<div itemscope itemtype="https://schema.org/Restaurant">
  <span itemprop="name">GreatFood</span>

  <div itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">
    <span itemprop="ratingValue">4</span> stars -
    based on <span itemprop="reviewCount">250</span> reviews
  </div>

  <div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
    <span itemprop="streetAddress">1901 Lemur Ave</span>
    <span itemprop="addressLocality">Sunnyvale</span>,
    <span itemprop="addressRegion">CA</span> <span itemprop="postalCode">
    94086
    </span>
  </div>
  <span itemprop="telephone">(408) 714-1489</span>
  <a itemprop="url" href="http://www.greatfood.com">www.greatfood.com</a>

  Hours:
  <meta itemprop="openingHours" content="Mo-Sa 11:00-14:30">
  Mon-Sat 11am - 2:30pm
  <meta itemprop="openingHours" content="Mo-Th 17:00-21:30">
  Mon-Thu 5pm - 9:30pm
  <meta itemprop="openingHours" content="Fr-Sa 17:00-22:00">
  Fri-Sat 5pm - 10:00pm

  Categories:
  <span itemprop="servesCuisine">
    Middle Eastern
  </span>,
  <span itemprop="servesCuisine">
    Mediterranean
  </span>

  Price Range: <span itemprop="priceRange">$$</span>
  Takes Reservations: Yes
</div>
  }`,
};
