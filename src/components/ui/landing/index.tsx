import { Logo, ServiceProviders } from "@components";
import { Container, Grid, Row, Spacer, Text } from "@nextui-org/react";
import { HeroButton, HeroButtonWrapper, Section, StyledImg } from "@primitives";
import { lightTheme } from "@theme/shared";
import { GradientBorder, GradientHero, Rainbow } from "./styles";
import Infinity from '@geist-ui/icons/infinity'

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

const Landing: React.FC = () => {
    return (
        <Container
        alignItems="center"
        as="section"
        className="hero__container"
        css={{
          position: 'relative',
          height: 'calc(100vh - 76px)',
          '@xsMax': {
            height: 'calc(100vh)',
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
            <Text
              css={{
                fontSize: '5rem',
                textAlign: 'center',
                
                '@xsMax': {
                  fontSize: '2.7rem',
                },
              }}
              h1
            ><GradientBorder
            css={{
                position: 'absolute',
                zIndex: -10,
                '@xsMax': {
                  fontSize: '2.7rem',
                },
            }}
          >
                    Freelance Digital
                </GradientBorder>
                Freelance Digital
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
          <Row justify="center" css={{ mb: '80px' }}>
            <Grid.Container gap={2} justify="center">
                <Grid xs={12} sm={6} md={4} lg={3}> 
                    <HeroButton css={{ width: '100%' }} color="white">Start Dreaming</HeroButton>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3}>
                    <HeroButton css={{ width: '100%' }} color="black">Request Estimate</HeroButton>
              </Grid>
            </Grid.Container>
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
    )
}

export default Landing