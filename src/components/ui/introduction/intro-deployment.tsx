import { Col, Container, Grid, Row, Text } from '@nextui-org/react';
import { Box } from '@primitives';
import { WindowActions } from '@components';
import Image from 'next/image';
import NextLink from 'next/link';
import { DeployPathLine, DeploySectionLabel } from './styles';

const IntroDeploymentSection = () => {
  return (
    <Container css={{ maxWidth: '1000px' }}>
      <Col className="sub-header_col">
        <Row
          css={{
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <DeployPathLine />
        </Row>
        <Row
          css={{
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <DeploySectionLabel>
            3
          </DeploySectionLabel>
        </Row>
        <Row
          css={{
            justifyContent: 'center',
            textAlign: 'center',
            marginBottom: '1.5rem',
          }}
        >
          <NextLink title='Search Engine Optimization' href="/search-engine-optimization">
          <Text
            css={{
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundImage: 'linear-gradient(90deg, #FF4D4D, #F9CB28)',
              fontWeight: 'bolder',
            }}
            h2
          >
            Optimize
          </Text>
          </NextLink>
        </Row>

        <Row
          css={{
            justifyContent: 'center',
            textAlign: 'center',
            marginBottom: '3rem',
          }}
        >
          <NextLink title='Search Engine Optimization' href="/search-engine-optimization">
          <Text
            css={{
              fontSize: '3.75rem',
              letterSpacing: '-.05em',
              '@xsMax': { fontSize: '2.5rem' },
            }}
            h1
          >
            Search Engine Optimization
          </Text>
          </NextLink>
        </Row>
        <Grid.Container>
          <Grid css={{ '@xsMax': { marginBottom: '$5' } }} xs={12} md={6}>
            <Text css={{ color: '#888' }}>
              <a title='Search Engine Optimization' href="/search-engine-optimization" style={{ color: '#FF5B4F' }}>
                Search Engine Optimization
              </a>
              , better known as &quot;seo&quot; is the process of incorporating metadata, schema$apos;s and certain strategies to ensure your company is found under the proper context and specific searches which as advantageous to your company.{' '}
            </Text>
          </Grid>
          <Grid css={{ '@mdMax': { marginTop: '$5' } }} xs={12} md={6}>
            <Text css={{ color: '#888' }}>
            From local seo to ecommerce seo, our approach to the process is a powerful way to bring traffic to your website and gain the notoriety your company deserves. We&apos;ve been nominated as a top digital marketing agency in the United States with clutch. {' '}
            </Text>
          </Grid>
        </Grid.Container>
        <Grid.Container css={{ mt: '30px' }}>
          <Grid css={{ '@xsMax': { marginBottom: '$5' } }} xs={12} md={6}>
            <Box
              css={{
                marginTop: '$5',
                mr: '$10',
                backgroundColor: '$codeBackground',
                px: '$10',
                boxShadow: '0 0 0 1px $colors$border, 0 4px 16px $colors$shadow',
                borderRadius: '$sm',
                textAlign: 'center',
              }}
            >
              <WindowActions />
              <Image
                width={1567}
                height={847}
                src="/images/digital-marketing-analytics.png"
                alt="Digital Marketing Analytics"
              />
              <Text css={{ color: '#fff' }} h6>Analytics Dashboard</Text>
            </Box>
          </Grid>
          <Grid css={{ '@mdMax': { marginTop: '$5' } }} xs={12} md={6}>
            <Box
              css={{
                marginTop: '$5',
                mr: '$10',
                backgroundColor: '$codeBackground',
                boxShadow: '0 0 0 1px $colors$border, 0 4px 16px $colors$shadow',
                px: '$10',
                borderRadius: '$sm',
                textAlign: 'center',
              }}
            >
              <WindowActions />
              <Image
                width={1567}
                height={847}
                src="/images/digital-marketing-snapshot.png"
                alt="Digital Marketing Analytics"
              />
              <Text css={{ color: '#fff' }} h6>Ecommerce Dashboard</Text>
            </Box>
          </Grid>
        </Grid.Container>
      </Col>

    </Container>
  );
};

export default IntroDeploymentSection;
