import { GradientHero } from './styles';
import { Container, Grid, Row, Spacer, Text } from '@nextui-org/react';
import { HeroButton, HeroButtonWrapper, Section, StyledImg } from '@primitives';
import { lightTheme } from '@theme/shared';
import { useMediaQuery } from '@hooks/use-media-query';
import { ServiceProviders } from '@components';

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

const FullStackHero: React.FC = () => {
  const isMobile = useMediaQuery(960);
  return (
    <Container
      alignItems="center"
      as="section"
      className="hero__container"
      css={{
        position: 'relative',
        height: 'calc(100vh - 76px)',
        '@xsMax': {
          height: 'calc(100vh - 64px)',
        },
      }}
      display="flex"
      gap={0}
      justify="space-between"
      lg={true}
      wrap="nowrap"
    >
      <Section css={{ position: 'relative' }}>

          <Row justify="center">
            <StyledImg
              height={70}
              src="/full/sp-hero.svg"
              alt="Full Stack App Development Hero image with GraphQL and NextJS"
              css={{
                height: '70px;',
                '@xsMax': {
                  height: '50px;',
                },
                [`.${lightTheme} &`]: {
                  filter: 'invert(1)',
                },
              }}
            />
          </Row>

          <Row justify="center">
            <Text
              css={{
                fontSize: '5rem',
                textAlign: 'center',
                '@xsMax': {
                  fontSize: '3rem',
                },
              }}
              h1
            >
              Full Stack App
              <GradientHero>Development.</GradientHero>
            </Text>
          </Row>
          <Row justify="center">
            <Text
              css={{
                fs: '24px',
                lh: '32px',
                fontWeight: '400',
                margin: '0 0 40px',
                textAlign: 'center',
                maxWidth: '790px',
                textRendering: 'optimizeLegibility',
                '@smMax': {
                  fontSize: '20px',
                },
              }}
            >
              We build full stack applications with incredible performance and
              love for the craft. If you&apos;ve made it this far, you&apos;re
              ready to unlock your full potential.
            </Text>
          </Row>
          <Row justify="center">
            <HeroButtonWrapper>
              <HeroButton color="white">Start Dreaming</HeroButton>
              <HeroButton color="black">Request Estimate</HeroButton>
            </HeroButtonWrapper>
          </Row>
          <Row justify="center">
            <Text
              css={{
                color: '$gray700',
                fontSize: '.75rem',
                fontWeight: '600',
                letterSpacing: '.02rem',
                textAlign: 'center',
                textTransform: 'uppercase',
                '@xsMax': {
                  fontSize: '.75rem',
                },
              }}
            >
              We prefer to work with people who are passionate and kind
            </Text>
          </Row>
          <ServiceProviders />
      </Section>
    </Container>
  );
};

export default FullStackHero;
