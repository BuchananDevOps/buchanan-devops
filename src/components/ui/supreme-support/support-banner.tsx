import React from 'react';
import { useRouter } from 'next/router';
import {
  FeaturesGrid,
  Note,
  NextJsLogo,
  StyledCardBlur,
  Title,
  Subtitle,
  ContactModal,
} from '@components';
import { Button, Container, Grid, Snippet } from '@nextui-org/react';

const bannerSuggestions = [
  {
    title: 'Level Up Your Business',
    description:
      'Our team, is passionate, young and fun with a lot of experience in the diverse development fields and technologies. Leverage our expertise to build your next big thing.',
    icon: <Note fill="#FF4ECD" />,
    href: '/docs/guide/getting-started',
  },
  {
    title: 'Less Stress,  More Success',
    description:
      'Hiring in-house can be a stressful onboarding process and costly. By contracting with a dedicated team, you can reduce your overhead and minimize your risk.',
    icon: <NextJsLogo fill="#FF4ECD" />,
    href: '/docs/guide/nextui-plus-nextjs',
  },
];

const SupportBanner: React.FC = () => {
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
              Let us handle the heavy lifting
            </Title>
            <Title color="violet" css={{ fontSize: '2.4rem' }}>
              Focus on your business
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
              We stive for lasting relationships with our clients. We are
              dedicated to providing the best support and maintenance in the
              industry for your project.
            </Subtitle>
            <Grid.Container xs={12} alignItems="center">
              <Grid xs={12} sm={3}>
                <ContactModal />
              </Grid>
              <Grid xs={12} sm={3}>
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
                  Schedule a call
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

export default SupportBanner;
