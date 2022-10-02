import { CtxContainer } from './styles';
import { Row, Text, Col, Grid } from '@nextui-org/react';
import { Section, Box } from '@primitives';
import { ShowcaseItem } from '@components';
import { darkTheme } from '@theme/shared';

const StuffWeDesign: React.FC = () => {
  return (
    <CtxContainer>
      <Row align="center">
        <Text h2 css={{ justifyItems: 'center' }}>
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
            <Box
          css={{
            position: 'fixed',
            top: '-25%',
            left: '-20%',
            zIndex: '-$1',
            [`.${darkTheme} &`]: {
              left: '30%',
              right: '-30%',
              '@xsMax': {
                right: '-50%',
              },
            },
            '@xsMax': {
              top: '10%',
              right: '-50%',
              left: '0',
            },
          }}
        >
          <img src="/customization-gradient.svg" alt="theming background" />
        </Box>
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
      <Section>
        <Grid.Container gap={2}>
          <Grid css={{ '@xsMax': { display: 'hidden' } }} sm={6} lg={6}>
            <Text h3>
              Professional Service
              <Text>
                To keep it brief, if your a lawyer, plumber, general contractor
                or offering professional services. Common sense dictates that a
                website can open up the entire world to your business.
                Generating leads 24/7 and allowing you to scale your business to
                new heights.
              </Text>
            </Text>
          </Grid>
          <Grid xs={12} sm={6} lg={6}>
            <img src="/customization-gradient.svg" alt="theming background" />
          </Grid>
        </Grid.Container>
      </Section>
      <Section>
        <Grid.Container gap={2}>
          <Grid xs={12} sm={6} lg={6}>
            <img src="/customization-gradient.svg" alt="theming background" />
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
      <Section>
        <Grid.Container gap={2}>
          <Grid css={{ '@xsMax': { display: 'hidden' } }} sm={6} lg={6}>
            <Text h3>
              Just about anything
              <Text>
                If you build it, they will come. We encourage you to reach out
                whether your a small business or an enterprise client. We have
                diverse network of developers and engineers that can construct
                just about anything you can imagine.
              </Text>
            </Text>
          </Grid>
          <Grid xs={12} sm={6} lg={6}>
            <img src="/customization-gradient.svg" alt="theming background" />
          </Grid>
        </Grid.Container>
      </Section>
    </CtxContainer>
  );
};

export default StuffWeDesign;
