import { Logo, RequestEstimate, ServiceProviders } from "@components";
import { Container, Grid, Row, Text } from "@nextui-org/react";
import { HeroButton, Section } from "@primitives";
import { useRouter } from "next/router";
import { GradientBorder, GradientHero, Rainbow } from "./styles";


const Landing: React.FC = () => {
    const router = useRouter();

    const handleLink = () => {
        router.push('/devops');
    };

    return (
        <Container
        alignItems="center"
        as="section"
        className="hero__container"
        css={{
          position: 'relative',
          minHeight: 'calc(100vh)',
          '@xsMax': {
            minHeight: 'calc(100vh)',
          },
        }}
        display="flex"
        gap={0}
        justify="space-between"
        lg={true}
        wrap="nowrap"
      >
        <Section>
          
          <Row justify="center">
            <Text
              css={{
                fontSize: '5rem',
                textAlign: 'center',
                
                '@xsMax': {
                  fontSize: '2.7rem',
                },
              }}
              h1
            ><GradientBorder
            css={{
                position: 'absolute',
                zIndex: -10,
                '@xsMax': {
                  fontSize: '2.7rem',
                },
            }}
          >
                    Freelance Digital
                </GradientBorder>
                Freelance Digital
              <GradientHero>Development.</GradientHero>
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
              We build full stack applications with incredible performance and
              love for the craft. If you&apos;ve made it this far, you&apos;re
              ready to unlock your full potential.
            </Text>
          </Row>
          <Row justify="center" css={{ mb: '80px' }}>
            <Grid.Container gap={2} justify="center">
                <Grid xs={12} sm={6} md={4} lg={3}> 
                    <HeroButton onClick={handleLink} css={{ width: '100%' }} color="white">The Process</HeroButton>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3}>
                 <RequestEstimate />
              </Grid>
            </Grid.Container>
          </Row>
          <Row justify="center">
            <Text
              css={{
                color: '$gray700',
                fontSize: '.75rem',
                fontWeight: '600',
                letterSpacing: '.02rem',
                textAlign: 'center',
                textTransform: 'uppercase',
                '@xsMax': {
                  fontSize: '.75rem',
                },
              }}
            >
              We prefer to work with people who are passionate and kind
              <ServiceProviders />
            </Text>
          </Row>
        </Section>
      </Container>
    )
}

export default Landing