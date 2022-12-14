import React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import {
  Container,
  Row,
  Col,
  Spacer,
  Button,
  Grid,
  Snippet,
} from '@nextui-org/react';

import { StyledTitle, StyledGradientTitle, StyledSubtitle } from './styles';

const DynamicLopperBG = dynamic(() => import('../looper-bg'), {
  ssr: true,
});

const DevOpsHero: React.FC = () => {
  const router = useRouter();

  const handleGetStartedClick = () => {
    router.push('docs/guide/getting-started');
  };

  return (
    <Container
      alignItems="center"
      as="section"
      className="hero__container"
      css={{
        position: 'relative',
        height: 'calc(84vh - 76px)',
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
      <Row
        align="center"
        className="hero__content"
        css={{
          zIndex: '$2',
          '@mdMax': {
            mt: '80px',
            p: '0 8px',
          },
          '@xsMax': {
            mt: '0px',
          },
        }}
        wrap="wrap"
      >
        <Col
          className="hero__left-container"
          css={{
            position: 'relative',
            zIndex: '$2',
            '@md': {
              width: '50%',
            },
            '@mdMax': {
              width: '100%',
            },
          }}
        >
          <StyledGradientTitle css={{ mb: 0 }}>
            Full-Stack&nbsp;
          </StyledGradientTitle>
          <StyledTitle css={{ mb: 0, '@xsMax': { d: 'inline-block' } }}>
            Application design &amp; development.
          </StyledTitle>

          <StyledSubtitle className="hero__text-subtitle">
            Powerful, fast and seo optimized apps.
          </StyledSubtitle>
          <Spacer y={1.5} />
          <Button.Group>
            <Button
              auto
              ghost
              className="hero__get-started-button"
              css={{
                maxHeight: '$space$14',
                '@xsMax': {
                  width: '100%',
                  marginBottom: '$8',
                },
              }}
              size="lg"
              onClick={handleGetStartedClick}
            >
              Website Design
            </Button>

            <Button
              auto
              ghost
              color="error"
              className="hero__get-started-button"
              css={{
                maxHeight: '$space$14',
                '@xsMax': {
                  width: '100%',
                  marginBottom: '$8',
                  marginTop: '$8',
                },
                '@mdMax': {
                  marginTop: '$8',
                },
              }}
              size="lg"
              onClick={handleGetStartedClick}
            >
              SEO / SEM
            </Button>

            <Button
              auto
              ghost
              color="success"
              className="hero__get-started-button"
              css={{
                maxHeight: '$space$14',
                '@xsMax': {
                  width: '100%',
                  marginBottom: '$8',
                  marginTop: '$8',
                },
                '@mdMax': {
                  marginTop: '$8',
                },
              }}
              size="lg"
              onClick={handleGetStartedClick}
            >
              Full-Stack Development
            </Button>
          </Button.Group>
        </Col>
        <Col
          className="hero__right-container"
          css={{
            position: 'relative',
            height: '100%',
            '@mdMax': {
              display: 'none',
            },
          }}
          span={6}
        ></Col>
      </Row>
      <DynamicLopperBG
        css={{
          zIndex: '0',
          position: 'absolute',
          transform: 'translate(10%, 5%)',
        }}
      />
    </Container>
  );
};

export default DevOpsHero;
