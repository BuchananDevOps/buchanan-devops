import React from 'react';
import { useRouter } from 'next/router';
import {
  FeaturesGrid,
  Note,
  NextJsLogo,
  StyledCardBlur,
  Title,
  Subtitle,
} from '@components';
import { Button, Container, Grid, Snippet } from '@nextui-org/react';

const bannerSuggestions = [
  {
    title: 'Getting Started',
    description:
      'Schedule a call with our team to discuss your project and get a free quote. We will help you put together a plan to get your project started.',
    icon: <Note fill="#FF4ECD" />,
    href: '/docs/guide/getting-started',
  },
  {
    title: 'Next.js + GraphQL',
    description:
      'Buchanan Devops produces modern, and fast websites/applications built to with Next.js and Facebooks GraphQL backend API technology.',
    icon: <NextJsLogo fill="#FF4ECD" />,
    href: '/docs/guide/nextui-plus-nextjs',
  },
];

const InstallBanner: React.FC = () => {
  const router = useRouter();

  const handleGetStartedClick = () => {
    router.push('docs/guide/getting-started');
  };

  return (
    <StyledCardBlur
      css={{
        br: 0,
        p: 0,
        dflex: 'center',
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        ml: '-50vw',
        mr: '-50vw',
        border: '1.5px solid $border',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
      }}
    >
      <Container
        lg
        css={{
          ml: 0,
          mr: 0,
          py: '$8',
          '@xsMax': {
            px: '$4',
          },
        }}
      >
        <Grid.Container gap={2}>
          <Grid xs={12} md={6} direction="column" justify="center">
            <Title css={{ fontSize: '2.4rem' }}>
              Simplify development with
            </Title>
            <Title color="violet" css={{ fontSize: '2.4rem' }}>
              Buchanan Devops
            </Title>
            <Subtitle
              css={{
                my: '$2',
                fs: '1.2rem',
                maxW: '100%',
                '@xsMax': {
                  my: '$8',
                },
              }}
            >
              Try it for yourself, and share with us what youve built!
            </Subtitle>
            <Grid.Container xs={12} alignItems="center">
              <Grid xs={12} sm={2.5}>
                <Button
                  auto
                  rounded
                  ghost
                  color="secondary"
                  css={{
                    '@xsMax': {
                      width: '100%',
                      mb: '$6',
                    },
                  }}
                  onClick={handleGetStartedClick}
                >
                  Get started
                </Button>
              </Grid>
              <Grid xs={12} sm={2.5}>
                <Button
                  auto
                  rounded
                  ghost
                  color="success"
                  css={{
                    '@xsMax': {
                      width: '100%',
                      mb: '$6',
                    },
                  }}
                  onClick={handleGetStartedClick}
                >
                  Schedule Zoom
                </Button>
              </Grid>
            </Grid.Container>
          </Grid>
          <Grid xs={12} md={6} css={{ py: '$10' }}>
            <FeaturesGrid
              xs={12}
              sm={6}
              lg={6}
              features={bannerSuggestions}
              itemCss={{
                bg: 'rgba(255, 255, 255, 0)',
              }}
            />
          </Grid>
        </Grid.Container>
      </Container>
    </StyledCardBlur>
  );
};

export default InstallBanner;
