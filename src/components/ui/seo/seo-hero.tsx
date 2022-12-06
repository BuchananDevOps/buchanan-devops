import { RequestEstimate, SeoAudit } from '@components';
import { Text, Container, Row,  Grid } from '@nextui-org/react';
import { Section,  HeroButton } from '@primitives';
import { GradientHero, } from './styles';

export default function SeoHero() {

  return (
    <Container
      alignItems="center"
      as="section"
      className="hero__container"
      css={{
        position: 'relative',
        minHeight: 'calc(100vh - 76px)',
        '@xsMax': {
          minHeight: 'calc(100vh - 64px)',
        },
      }}
      display="flex"
      gap={0}
      justify="space-between"
      lg={true}
      wrap="nowrap"
    >
      <Section >
        <Container>
          {/*
          </Row>
          <Row justify="center">
        <Box css={{
          border: '1px solid #333',
          borderRadius: '5px',
          py: '6px',
          px: '12px',
        }}>

        <StyledContent>
          <Spacer x={0.3} />
            <Sparkles activeOnHover>
              <Text
                css={{ 
                  fs: '1rem',
                  fontWeight: '400',
                  lh: '1.25rem',
                  cursor: 'pointer', 
                  userSelect: 'none' }}
              >
                Organic SEO Services. 
              </Text>
            </Sparkles>
            <NextLink href="/contact" passHref>
              <Text 
                css={{
                  color: '#3291ff',
                  fs: '.875rem',
                  fontWeight: '400',
                  lh: '1.25rem',
                }}>&nbsp;Learn more</Text>
            </NextLink>
        </StyledContent>
            </Box>
          </Row> */}
          <Row justify="center">
            
            <Text
              css={{
                fontSize: '5rem',
                textAlign: 'center',
                '@xsMax': {
                  fontSize: '3rem',
                },
              }}
              h1
            >
              Search Engine
              <GradientHero>Optimization</GradientHero>
            </Text>
          </Row>
          <Row justify="center">
          <Text
            css={{
              fs: '24px',
              lh: '32px',
              fontWeight: '400',
              margin: '0 0 40px',
              textAlign: 'center',
              maxWidth: '790px',
              textRendering: 'optimizeLegibility',
              '@smMax': {
                fontSize: '20px',
              },
            }}
          >
            The value of SEO is undeniable. Organic SEO is the most cost-effective way to increase your website traffic and grow your business.
          </Text>
        </Row>
        <Row justify="center" css={{ mb: '80px' }}>
            <Grid.Container gap={2} justify="center">
                <Grid xs={12} sm={6} md={4} lg={3}> 
                   <SeoAudit />
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3}>
                 <RequestEstimate />
              </Grid>
            </Grid.Container>
          </Row>
        </Container>
      </Section>
    </Container>
  );
}
