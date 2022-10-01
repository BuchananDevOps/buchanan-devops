import { NextPage } from 'next';
import { Section } from '@primitives';
import { Text, Row, Grid, Spacer, Col } from '@nextui-org/react';
import { ShowcaseItem } from '@components';

const ShowcasePortfolio: NextPage = () => {
  return (
    <>
      <Section>
        <Spacer y={7} />
        <Row justify="center">
          <Text h1 css={{ fontSize: '6rem' }}>
            Showcase Portfolio
          </Text>
        </Row>
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
    </>
  );
};

export default ShowcasePortfolio;
