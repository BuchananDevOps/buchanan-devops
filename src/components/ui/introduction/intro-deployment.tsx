import { Col, Container, Grid, Row, Text } from '@nextui-org/react';
import { Box } from '@primitives';
import { WindowActions } from '@components';
import Image from 'next/image';
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
          <span className="path-line"></span>
        </Row>
        <Row
          css={{
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <span className="section-label-number">3</span>
        </Row>
        <Row
          css={{
            justifyContent: 'center',
            textAlign: 'center',
            marginBottom: '1.5rem',
          }}
        >
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
        </Row>

        <Row
          css={{
            justifyContent: 'center',
            textAlign: 'center',
            marginBottom: '3rem',
          }}
        >
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
        </Row>
        <Grid.Container>
          <Grid css={{ '@xsMax': { marginBottom: '$5' } }} xs={12} md={6}>
            <Text css={{ color: '#888' }}>
              <a style={{ color: '#FF5B4F' }} href="">
                Search Engine Optimization
              </a>
              , better known as "seo" is the process of incorporating metadata,
              schema's and certain straitegies to ensure your company is found
              under the proper context and specific searches which as
              advantageous to your company.{' '}
            </Text>
          </Grid>
          <Grid css={{ '@mdMax': { marginTop: '$5' } }} xs={12} md={6}>
            <Text css={{ color: '#888' }}>
              From local seo to ecommerce seo, our approach to the process is a
              pwoerful way to bring traffic to your website and gain the
              notarity your company deserves. We've been nominated as a top
              digital marketing agency in the United States with clutch.{' '}
            </Text>
          </Grid>
        </Grid.Container>
        <Grid.Container css={{ mt: '30px' }}>
          <Grid css={{ '@xsMax': { marginBottom: '$5' } }} xs={12} md={6}>
            <Box
              css={{
                marginTop: '$5',
                mr: '$10',
                backgroundColor: '#111111',
                px: '$10',
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
              <Text h6>Analytics Dashboard</Text>
            </Box>
          </Grid>
          <Grid css={{ '@mdMax': { marginTop: '$5' } }} xs={12} md={6}>
            <Box
              css={{
                marginTop: '$5',
                mr: '$10',
                backgroundColor: '#111111',
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
              <Text h6>Ecommerce Dashboard</Text>
            </Box>
          </Grid>
        </Grid.Container>
      </Col>
      <style jsx>{`
        .path-line {
          height: 100px;
          width: 1px;
          background: linear-gradient(#444, #f9cb28);
        }
        .section-label-number {
          display: inline-felx;
          border-radius: 100%;
          color: #000;
          width: 40px;
          height: 40px;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          margin-bottom: 24px;
          padding-top: 8px;
          background: linear-gradient(90deg, #ff4d4d, #f9cb28);
        }
      `}</style>
    </Container>
  );
};

export default IntroDeploymentSection;
