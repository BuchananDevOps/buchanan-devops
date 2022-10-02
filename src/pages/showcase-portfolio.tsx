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
          <Text h1 css={{ fontSize: '6rem', 
          '@xsMax': { fontSize: '4rem', lineHeight:'3.5rem' },
          '@mdMax': { fontSize: '4rem', lineHeight:'3.5rem' },
          "@lgMax": { fontSize: '5rem', lineHeight:'4rem' },  
          }}>
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
    </>
  );
};

export default ShowcasePortfolio;
