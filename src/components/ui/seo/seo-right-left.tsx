import { Devices, NextJsLogo } from "@components"
import { useIsMobile, useMediaQuery } from "@hooks/use-media-query"
import { Grid, Text, Row, Button, Spacer, Container } from "@nextui-org/react"
import { BgGradient, Section, StyledImg } from "@primitives"
import { darkTheme } from "@theme/shared"
import { pulse } from "@utils/animations"


const SeoRightLeft: React.FC = () => {
    const isMobile = useMediaQuery(960)

    return (
        <Section>
      <Container>
      <Grid.Container
        gap={3}
        css={{
          mt: '2rem',
        }}
      >
        <Grid
          css={{
            mt: '$15',
            mr: '$25',
            '@xsMax': { textAlign: 'center' },
            '@mdMax': { textAlign: 'center' },
          }}
          xs={12}
          sm={6}
          lg={6}
        >
          <Text
            h3
            css={{
              fontWeight: 700,
              fontSize: '2.5rem',
              letterSpacing: '-0.058125em',
              marginBlockStart: '1em',
              marginBlockEnd: '1em',
            }}
          >
            Every metric matters
            <Text
              css={{
                lineHeight: '2rem',
                color: '#888888',
                fontWeight: 400,
                fontSize: '1.25rem',
              }}
            >
              Metrics in SEO are the key to success. We track and analyze every
              metric to review and improve your exisiting SEO strategy. We
                provide you with a detailed report of your SEO performance.
            

            </Text>
            <Row
              css={{
                mt: '$15',
                '@smMax': {
                  justifyContent: 'center',
                },
              }}
            >
            </Row>
          </Text>
        </Grid>
        <Grid
          css={{
            '@smMax': {
              mt: '-80px',
            },
          }}
          xs={12}
          sm={6}
        >
          <BgGradient
            css={{
              width: '500px',
              height: '550px',
              right: '10%',
            }}
            color="purple"
          />
          <StyledImg
            css={{
              px: '$20',
              mt: '80px',
              opacity: 0.7,
              '@xsMax': { px: '$0' },
            }}
            src="/content/search-engine-performance.svg"
            alt="Static Site Generation Svg Product Image"
          />
        </Grid>
      </Grid.Container>
      {isMobile ? (
        <>
          <Spacer y={2} />
          <Grid.Container gap={3}>
            <Grid
              css={{
                mt: '$15',
                mr: '$25',
                '@xsMax': { textAlign: 'center' },
                '@mdMax': { textAlign: 'center' },
              }}
              xs={12}
              sm={6}
              lg={6}
            >
              <Text
                h3
                css={{
                  fontWeight: 700,
                  fontSize: '2.5rem',
                  letterSpacing: '-0.058125em',
                  marginBlockStart: '1em',
                  marginBlockEnd: '1em',
                }}
              >
                Progressive Web Apps (PWA)
                <Text
                  css={{
                    lineHeight: '2rem',
                    color: '#888888',
                    fontWeight: 400,
                    fontSize: '1.25rem',
                  }}
                >
                  The difference between a website and a web app is that a web
                  app is interactive. It allows you to do things like create an
                  account, log in, and interact with other users. A web app is a
                  website that has a backend.
                </Text>
                <Row
                  css={{
                    mt: '$15',
                    '@smMax': {
                      justifyContent: 'center',
                    },
                  }}
                >
                </Row>
              </Text>
            </Grid>
            <Grid css={{ mt: '-80px' }} xs={12} sm={6}>
              <BgGradient color="lightBlue" />
              <StyledImg
                css={{ px: '$20', mt: '80px', '@xsMax': { px: '$0' } }}
                src="/content/just-product.svg"
                alt="Static Site Generation Svg Product Image"
              />
            </Grid>
          </Grid.Container>
        </>
      ) : (
        <Grid.Container gap={3}>
          <Grid xs={12} sm={6}>
            <BgGradient color="lightBlue" />
            <StyledImg
              css={{ px: '$20', mt: '80px', '@xsMax': { px: '$0' } }}
              src="/content/just-product.svg"
              alt="Static Site Generation Svg Product Image"
            />
          </Grid>
          <Grid
            css={{
              mt: '$15',
              mr: '$25',
              '@xsMax': { textAlign: 'center' },
              '@mdMax': { textAlign: 'center' },
            }}
            xs={12}
            sm={6}
            lg={6}
          >
            <Text
              h3
              css={{
                fontWeight: 700,
                fontSize: '2.5rem',
                letterSpacing: '-0.058125em',
                marginBlockStart: '1em',
                marginBlockEnd: '1em',
              }}
            >
              Progressive Web Apps (PWA)
              <Text
                css={{
                  lineHeight: '2rem',
                  color: '#888888',
                  fontWeight: 400,
                  fontSize: '1.25rem',
                }}
              >
                The difference between a website and a web app is that a web app
                is interactive. It allows you to do things like create an
                account, log in, and interact with other users. A web app is a
                website that has a backend.
              </Text>
              <Row
                css={{
                  mt: '$15',
                  '@smMax': {
                    justifyContent: 'center',
                  },
                }}
              >

              </Row>
            </Text>
          </Grid>
        </Grid.Container>
      )}
      </Container>
    </Section>
    )
}

export default SeoRightLeft