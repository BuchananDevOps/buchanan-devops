import React, { useState } from 'react';
import NextLink from 'next/link';
import { InView } from 'react-intersection-observer';
import { Grid, Row, Col, Link, Spacer } from '@nextui-org/react';
import { darkTheme } from '@theme/shared';
import {
  Blockholder,
  Box,
  Section,
  Title,
  Subtitle,
  BlockLink,
  ShowcaseItem,
} from '@components';

const CustomizationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <InView as="section" className="inview-section" onChange={setIsVisible}>
      <Section css={{ position: 'relative' }}>
        <Box
          css={{
            position: 'absolute',
            top: '-30%',
            right: '-35%',
            zIndex: '-$1',
            [`.${darkTheme} &`]: {
              top: '-30%',
              left: '-35%',
            },
          }}
        >
          <img
            src="/customization-gradient.svg"
            alt="customization background"
          />
        </Box>
        <Row justify="flex-start">
          <Title>Develop with</Title>
        </Row>
        <Row justify="flex-start">
          <Title color="green">confidence</Title>
        </Row>
        <Subtitle css={{ marginBottom: '40px' }}>
          Instead of seeing our clients as just another contract, we have a
          strong ethos to believe your success is our success. Let us guide your
          company in the right direction based on our past experience.
        </Subtitle>
        <NextLink href="/showcase-portfolio">
          <BlockLink css={{ mb: '25px' }} color="green">
            Showcase Portfolio
          </BlockLink>
        </NextLink>
        <Grid.Container gap={2}>
          <Grid
            xs={12}
            sm={4}
            css={{
              pl: 0,
              '@xsMax': {
                pr: '0',
              },
            }}
          >
            <Col
              css={{
                dflex: 'center',
                fd: 'column',
                ai: 'flex-start',
                h: '100%',
              }}
            >
              <ShowcaseItem
                title={'Backtrace'}
                description={''}
                image="/showcase/port-4.png"
                link="https://backtrace.io/"
              />
            </Col>
          </Grid>
          <Grid
            xs={12}
            sm={4}
            css={{
              pl: 0,
              '@xsMax': {
                pr: '0',
              },
            }}
          >
            <Col
              css={{
                dflex: 'center',
                fd: 'column',
                ai: 'flex-start',
                h: '100%',
              }}
            >
              <ShowcaseItem
                title={'Leafly'}
                description={
                  'Leafly is the leading destination to learn about, find, and order cannabis. Learn more about types of weed strains and discover marijuana dispensaries near you.'
                }
                image="/showcase/port-5.png"
                link="https://www.leafly.com"
              />
            </Col>
          </Grid>
          <Grid
            xs={12}
            sm={4}
            css={{
              pl: 0,
              '@xsMax': {
                pr: '0',
              },
            }}
          >
            <Col
              css={{
                dflex: 'center',
                fd: 'column',
                ai: 'flex-start',
                h: '100%',
              }}
            >
              <ShowcaseItem
                title={'Inflect'}
                description={''}
                image="/showcase/port-8.png"
                link="https://www.inflect.com"
              />
            </Col>
          </Grid>
          <Grid
            xs={12}
            sm={4}
            css={{
              pl: 0,
              '@xsMax': {
                pr: '0',
              },
            }}
          >
            <Col
              css={{
                dflex: 'center',
                fd: 'column',
                ai: 'flex-start',
                h: '100%',
              }}
            >
              <ShowcaseItem
                title={'Purina'}
                description={''}
                image="/showcase/port-6.png"
                link="https://www.purina.com/"
              />
            </Col>
          </Grid>
          <Grid
            xs={12}
            sm={4}
            css={{
              pl: 0,
              '@xsMax': {
                pr: '0',
              },
            }}
          >
            <Col
              css={{
                dflex: 'center',
                fd: 'column',
                ai: 'flex-start',
                h: '100%',
              }}
            >
              <ShowcaseItem
                title={'Wired'}
                description={
                  'WIRED - The Latest in Technology, Science, Culture and Business | WIRED'
                }
                image="/showcase/port-7.png"
                link="https://www.wired.com/"
              />
            </Col>
          </Grid>
          <Grid
            xs={12}
            sm={4}
            css={{
              pl: 0,
              '@xsMax': {
                pr: '0',
              },
            }}
          >
            <Col
              css={{
                dflex: 'center',
                fd: 'column',
                ai: 'flex-start',
                h: '100%',
              }}
            >
              <ShowcaseItem
                title={'Inflect'}
                description={''}
                image="/showcase/port-9.png"
                link="https://www.thepierreny.com/"
              />
            </Col>
          </Grid>
        </Grid.Container>
      </Section>
    </InView>
  );
};

export default CustomizationSection;
