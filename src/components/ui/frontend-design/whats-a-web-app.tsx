import { WindowActions, NextJsLogo, Devices } from '@components';

import { useMediaQuery } from '@hooks/use-media-query';
import {
  Button,
  Grid,
  Row,
  Spacer,
  StyledButton,
  Text,
} from '@nextui-org/react';
import { BgGradient, Box, Section, StyledImg } from '@primitives';
import { darkTheme } from '@theme/shared';
import { pulse } from '@utils/animations';
import { useRouter } from 'next/router';

const WhatsAWebApp: React.FC = () => {
  const isMobile = useMediaQuery(960);
  const router = useRouter();
  const handlePwa = () => {
    router.push('/full-stack-development');
  };
  const handleSsg = () => {
    router.push('/showcase-portfolio');
  };
  return (
    <Section>
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
            Static Sites (SSG)
            <Text
              css={{
                lineHeight: '2rem',
                color: '#888888',
                fontWeight: 400,
                fontSize: '1.25rem',
              }}
            >
              Static sites are blazing fast, require no server maintenance, and
              are easy to deploy. They are perfect for marketing sites,
              professional services, and general informational websites. Static
              sites are built for preformance and search engine indexability.
            </Text>
            <Row
              css={{
                mt: '$15',
                '@smMax': {
                  justifyContent: 'center',
                },
              }}
            >
              <Button
                auto
                shadow
                ghost
                onClick={handleSsg}
                color="error"
                icon={
                  <NextJsLogo size={20} fill="var(--nextui-colors-red900)" />
                }
                css={{
                  bg: '$gray50',
                  color: '$text',
                  px: '$6',
                  '@mdMax': {},
                  '& .nextui-button-icon': {
                    mr: '$4',
                  },
                  '& .nextui-button-icon svg': {
                    transition: '$default',
                  },
                  '&:hover': {
                    bg: '--nextui-colors-red600',
                    '& .nextui-button-icon svg': {
                      animation: `${pulse} 1s infinite`,
                    },
                  },
                  [`.${darkTheme} &`]: {
                    bg: 'rgba(51, 51,51,0.56)',
                    '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))':
                      {
                        bf: 'saturate(180%) blur(50px)',
                      },
                  },
                }}
              >
                Showcase Portfolio
              </Button>
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
            color="purple" />
          <StyledImg
            css={{
              px: '$20',
              mt: '80px',
              '@xsMax': { px: '$0' },
            }}
            src="/content/just-code-head.svg"
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
                  <Button
                    auto
                    shadow
                    ghost
                    onClick={handlePwa}
                    icon={
                      <Devices size={20} fill="var(--nextui-colors-blue900)" />
                    }
                    css={{
                      bg: '$gray50',
                      border: '2px solid var(--nextui-colors-blue600)',
                      color: '$text',
                      px: '$6',
                      '@mdMax': {},
                      '& .nextui-button-icon': {
                        mr: '$4',
                      },
                      '& .nextui-button-icon svg': {
                        transition: '$default',
                      },
                      '&:hover': {
                        bg: '--nextui-colors-red600',
                        '& .nextui-button-icon svg': {
                          animation: `${pulse} 1s infinite`,
                        },
                      },
                      [`.${darkTheme} &`]: {
                        bg: 'rgba(51, 51,51,0.56)',
                        '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))':
                          {
                            bf: 'saturate(180%) blur(50px)',
                          },
                      },
                    }}
                  >
                    Learn More
                  </Button>
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
                <Button
                  auto
                  shadow
                  ghost
                  onClick={handlePwa}
                  icon={
                    <Devices size={20} fill="var(--nextui-colors-blue900)" />
                  }
                  css={{
                    bg: '$gray50',
                    border: '2px solid var(--nextui-colors-blue600)',
                    color: '$text',
                    px: '$6',
                    '@mdMax': {},
                    '& .nextui-button-icon': {
                      mr: '$4',
                    },
                    '& .nextui-button-icon svg': {
                      transition: '$default',
                    },
                    '&:hover': {
                      bg: '--nextui-colors-red600',
                      '& .nextui-button-icon svg': {
                        animation: `${pulse} 1s infinite`,
                      },
                    },
                    [`.${darkTheme} &`]: {
                      bg: 'rgba(51, 51,51,0.56)',
                      '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))':
                        {
                          bf: 'saturate(180%) blur(50px)',
                        },
                    },
                  }}
                >
                  Learn More
                </Button>
              </Row>
            </Text>
          </Grid>
        </Grid.Container>
      )}
    </Section>
  );
};

export default WhatsAWebApp;
