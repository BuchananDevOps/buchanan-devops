import { Grid, Spacer, Text } from '@nextui-org/react';
import { Section, StyledImg } from '@primitives';
import { lightTheme } from '@theme/shared';

const items = [
  {
    title: 'Tailwinds CSS',
    href: 'https://tailwindcss.com',
    src: '/tools/tailwindscss.svg',
  },
  {
    title: 'Vercel',
    href: 'https://vercel.com',
    src: '/tools/vercel.svg',
  },
  {
    title: 'Algolia',
    href: 'https://www.algolia.com',
    src: '/tools/algolia.svg',
  },
  {
    title: 'Stripe',
    href: 'https://stripe.com',
    src: '/tools/stripe.svg',
  },

  {
    title: 'Shopify',
    href: 'https://www.shopify.com',
    src: '/tools/shopify-other.svg',
  },
  {
    title: 'Auth0',
    href: 'https://auth0.com',
    src: '/tools/auth0.svg',
  },
  {
    title: 'Prismic',
    href: 'https://prismic.io',
    src: '/tools/prismic.svg',
  },
];

const Technology: React.FC = () => {
  return (
    <Section css={{ textJustify: 'inter-character' }}>
      <Spacer y={3} />
      <Text h4 css={{ fontSize: '3rem' }}>
        Some technologies we use
      </Text>
      <Spacer y={2} />
      <Grid.Container gap={2}>
        {items.map((item, index) => (
          <Grid alignContent="center" xs={6} sm={4} md={3} key={index}>
            <a
              href={item.href}
              title={item.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledImg
                height={75}
                src={item.src}
                alt={item.title}
                css={{
                  [`.${lightTheme} &`]: {
                    filter: 'invert(1)',
                  },
                }}
              />
            </a>
          </Grid>
        ))}
      </Grid.Container>
    </Section>
  );
};

export default Technology;
