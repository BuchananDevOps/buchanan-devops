import { CtxContainer } from './styles';
import { Row, Text, Col, Grid, Spacer } from '@nextui-org/react';
import { Section, Box } from '@primitives';
import { ShowcaseItem } from '@components';
import { darkTheme } from '@theme/shared';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@hooks/use-media-query';

const StuffWeDesign: React.FC = () => {
  const router = useRouter();
  const isMobile = useMediaQuery(960);

  return (
    <CtxContainer>
      <Row align="center">
        <Text h2 css={{ justifyItems: 'center', fontSize: '3rem' }}>
          Stuff We Design
        </Text>
      </Row>
      <Section>
        <Grid.Container gap={2}>
          <Grid
            xs={12}
            sm={6}
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
          <Grid xs={12} sm={6} lg={6}>
            <Text h3>
              Retail | E-Commerce | Marketplace
              <Spacer y={0.5} />
              <Text>
                E-Business is the activity of buying or selling of products over
                the Internet. Electronic business draws on technologies such as
                mobile commerce, electronic funds transfer, supply chain
                management, Internet marketing, online transaction processing,
                electronic data interchange (EDI), and inventory management
                systems. E-Business is also known as electronic business,
                e-business, e-commerce, or e-tailing.
              </Text>
            </Text>
          </Grid>
        </Grid.Container>
      </Section>
      {isMobile ? (
        <Section css={{ my: '50px' }}>
          <Grid.Container gap={2}>
            <Grid
              xs={12}
              sm={6}
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
                  title={'The Service King'}
                  description={
                    'Leafly is the leading destination to learn about, find, and order cannabis. Learn more about types of weed strains and discover marijuana dispensaries near you.'
                  }
                  image="/showcase/port-10.png"
                  link="https://www.serviceking.com/"
                />
              </Col>
            </Grid>
            <Grid sm={6} lg={6}>
              <Text h3>
                Professional Service
                <Spacer y={0.5} />
                <Text>
                  To keep it brief, if your a lawyer, plumber, general
                  contractor or offering professional services. Common sense
                  dictates that a website can open up the entire world to your
                  business. Generating leads 24/7 and allowing you to scale your
                  business to new heights.
                </Text>
              </Text>
            </Grid>
          </Grid.Container>
        </Section>
      ) : (
        <Section
          css={{
            my: '50px',
          }}
        >
          <Grid.Container gap={2}>
            <Grid sm={6} lg={6}>
              <Text h3>
                Professional Service
                <Spacer y={0.5} />
                <Text>
                  To keep it brief, if your a lawyer, plumber, general
                  contractor or offering professional services. Common sense
                  dictates that a website can open up the entire world to your
                  business. Generating leads 24/7 and allowing you to scale your
                  business to new heights.
                </Text>
              </Text>
            </Grid>
            <Grid
              xs={12}
              sm={6}
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
                  title={'The Service King'}
                  description={
                    'Leafly is the leading destination to learn about, find, and order cannabis. Learn more about types of weed strains and discover marijuana dispensaries near you.'
                  }
                  image="/showcase/port-10.png"
                  link="https://www.serviceking.com/"
                />
              </Col>
            </Grid>
          </Grid.Container>
        </Section>
      )}

      <Section>
        <Grid.Container gap={2}>
        <Grid
            xs={12}
            sm={6}
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
                description={
                  'Leafly is the leading destination to learn about, find, and order cannabis. Learn more about types of weed strains and discover marijuana dispensaries near you.'
                }
                image="/showcase/port-4.png"
                link="https://backtrace.io/"
              />
            </Col>
          </Grid>
          <Grid xs={12} sm={6} lg={6}>
            <Text h3>
              Redesign &amp; Rebrand Old Apps
              <Text>
                Already have a website or web app? We can redesign and rebrand
                your existing website or web app. We can also add new features
                and functionality while increasing your exposure in the search
                engines with blazing fast and explosive SEO performance!
              </Text>
            </Text>
          </Grid>
        </Grid.Container>
      </Section>
      {isMobile ? (
        <Section css={{ my: '50px' }}>
          <Grid.Container gap={2}>
            <Grid
              xs={12}
              sm={6}
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
                  title={'Unreal Estate'}
                  description={
                    'Leafly is the leading destination to learn about, find, and order cannabis. Learn more about types of weed strains and discover marijuana dispensaries near you.'
                  }
                  image="/showcase/port-2.png"
                  link="https://www.unrealestate.com/"
                />
              </Col>
            </Grid>
            <Grid sm={6} lg={6}>
              <Text h3>
                Just about anything
                <Spacer y={0.5} />
                <Text>
                  Unless you are selling illegal drugs or weapons, we can build
                  you a website or web app. If you are, we'd recommend using a 
                  decentralized blockchain platform for annonymity. All jokes aside, 
                  we develop high quality projects, built to perform and scale. For us, 
                  it's less about what the project is and more about if we believe in the 
                  people behind it. Your success is our success! 
                </Text>
              </Text>
            </Grid>
          </Grid.Container>
        </Section>
      ) : (
        <Section
          css={{
            my: '50px',
          }}
        >
          <Grid.Container gap={2}>
          <Grid sm={6} lg={6}>
              <Text h3>
                Just about anything
                <Spacer y={0.5} />
                <Text>
                  Unless you are selling illegal drugs or weapons, we can build
                  you a website or web app. If you are, we'd recommend using a 
                  decentralized blockchain platform for annonymity. All jokes aside, 
                  we develop high quality projects, built to perform and scale. For us, 
                  it's less about what the project is and more about if we believe in the 
                  people behind it. Your success is our success! 
                </Text>
              </Text>
            </Grid>
            <Grid
              xs={12}
              sm={6}
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
                  title={'Unreal Estate'}
                  description={
                    'Leafly is the leading destination to learn about, find, and order cannabis. Learn more about types of weed strains and discover marijuana dispensaries near you.'
                  }
                  image="/showcase/port-2.png"
                  link="https://www.unrealestate.com/"
                />
              </Col>
            </Grid>
          </Grid.Container>
        </Section>
      )}
    </CtxContainer>
  );
};

export default StuffWeDesign;
