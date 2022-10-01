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
      <Spacer y={10} css={{ '@xsMax': { mt: '$14' } }} />
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
          <Title>&nbsp; and style.</Title>
        </Row>
        <Subtitle css={{ marginBottom: '40px' }}>
          Instead of seeing our clients as just another contract, we have a
          strong ethos to believe your success is our success. Let us guide your
          company in the right direction based on our past experience.
        </Subtitle>
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
                title={'Jet Commerce'}
                description={''}
                image="/showcase/jet-showcase-item.jpg"
                link="https://www.jet.com"
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
                image="/showcase/leafly-showcase-item.jpg"
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
                image="/showcase/inflect-showcase-item.jpg"
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
                title={'Jet Commerce'}
                description={''}
                image="/showcase/jet-showcase-item.jpg"
                link="https://www.jet.com"
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
                image="/showcase/leafly-showcase-item.jpg"
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
                image="/showcase/inflect-showcase-item.jpg"
                link="https://www.inflect.com"
              />
            </Col>
          </Grid>
        </Grid.Container>
      </Section>
    </InView>
  );
};

export default CustomizationSection;
