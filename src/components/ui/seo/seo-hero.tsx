import { Text, styled, Container, Row, Spacer, Grid } from '@nextui-org/react';
import { Section, AnimatedText, AnimatedTitle, Title, Box, HeroButton } from '@primitives';
import { GradientHero, StyledTitle, StyledContent } from './styles';
import { spin, spin2 } from '@utils/animations';
import { Badge, ChevronRight, Sparkles } from '@components';
import { darkTheme } from '@theme/shared';
import NextLink from 'next/link';

export default function SeoHero() {
  return (
    <Container
      alignItems="center"
      as="section"
      className="hero__container"
      css={{
        position: 'relative',
        height: 'calc(100vh - 76px)',
        '@xsMax': {
          height: 'calc(60vh - 64px)',
        },
      }}
      display="flex"
      gap={0}
      justify="space-between"
      lg={true}
      wrap="nowrap"
    >
      <Section css={{ position: 'relative' }}>
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

            <Grid.Container  alignContent='center' gap={2}>
              <Grid xs={0} sm={0} md={3.5} />
              <Grid xs={12} sm={4} md={2.5} lg={2.5}>
                <HeroButton  css={{ width: '100%' }} color="white">
                  SEO Audit
                </HeroButton>
              </Grid>
              <Grid xs={12} sm={12} md={2.5} lg={2.5}>
                <HeroButton css={{ width: '100%' }} color="black">
                Talk to an Expert
                </HeroButton>
              </Grid>
              <Grid xs={0} sm={0} md={3.5} />
            </Grid.Container>
        </Container>
      </Section>
    </Container>
  );
}
