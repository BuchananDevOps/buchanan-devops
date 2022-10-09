import { Grid, Row } from '@nextui-org/react';
import { Section, StyledImg } from '@primitives';
import { lightTheme } from '@theme/shared';

const items = [
  {
    title: 'Tailwinds CSS',
    href: 'https://tailwindcss.com',
    src: '/tools/tailwindscss.svg',
  },
  {
    title: 'Svelte',
    href: 'https://svelte.dev/',
    src: '/tools/svelte.svg',
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

const ServiceProviders: React.FC = () => {
  return (
    <Section>
      <Row justify="center">
        <Grid.Container gap={0.5} justify="center" css={{ marginTop: '40px' }}>
          {items.map((item) => (
            <Grid xs={2.4} sm={1.5} md={1.7} lg={1.5} key={item.title}>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <StyledImg
                  src={item.src}
                  alt={item.title}
                  css={{
                    height: '40px',
                    '@xsMax': {
                      height: '30px',
                    },
                    [`.${lightTheme} &`]: {
                      filter: 'invert(1)',
                    },
                  }}
                />
              </a>
            </Grid>
          ))}
        </Grid.Container>
      </Row>
    </Section>
  );
};

export default ServiceProviders;
