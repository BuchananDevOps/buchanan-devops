import {
  Password,
  StyledCardBlur,
  Section,
  Box,
  StyledImg,
  Devices,
  Bug,
  FloatingPills,
} from '@components';
import {
  Container,
  Row,
  Col,
  Spacer,
  Grid,
  Button,
  Card,
} from '@nextui-org/react';
import { darkTheme } from '@theme/shared';
import { appears, pulse } from '@utils/animations';
import FloatingLogos from './floating-logos';
import { StyledGradientTitle, StyledSubtitle, StyledTitle } from './styles';
import { useMediaQuery } from '@hooks/use-media-query';

const DappHero: React.FC = () => {
  const isMobile = useMediaQuery(960);

  const handleDappTechnology = () => {
    const dappTechnology = document.getElementById('dapp-technology');
    if (dappTechnology) {
      dappTechnology.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Section>
      <Box
        css={{
          position: 'absolute',
          top: '-20%',
          left: '-20%',
          zIndex: '-$1',
          '@xsMax': {
            top: '0%',
            left: '-90%',
          },
        }}
      >
        <img src="/customization-gradient.svg" alt="theming background" />
      </Box>

      <Container
        alignItems="center"
        as="section"
        className="hero__container"
        css={{
          position: 'relative',
          height: 'calc(100vh - 76px)',
          '@xsMax': {
            height: 'calc(100vh - 64px)',
            mt: '85px',
          },
        }}
        display="flex"
        gap={0}
        justify="space-between"
        lg={true}
        wrap="nowrap"
      >
        <Row
          align="center"
          className="hero__content"
          css={{
            zIndex: '$2',
            '@mdMax': {
              mt: '80px',
              p: '0 8px',
            },
            '@xsMax': {
              mt: '0px',
            },
          }}
          wrap="wrap"
        >
          <Col
            className="hero__left-container"
            css={{
              position: 'relative',
              zIndex: '$2',
              '@md': {
                width: '50%',
              },
              '@mdMax': {
                width: '100%',
              },
            }}
          >
            <StyledTitle css={{ mb: 0 }}>Welcome to the &nbsp;</StyledTitle>
            <StyledGradientTitle css={{ mb: 0 }}>
              Matrix.&nbsp;
            </StyledGradientTitle>

            <StyledSubtitle className="hero__text-subtitle">
              Decentralized Apps (Dapps) are the future of the internet. They
              are applications that run on a decentralized network (blockchain),
              such as Ethereum, and are not controlled or hosted by third party
              services. Dapp&apos;s bring complete freedom to a business with no
              restrcitions, <br></br>no censorship, and no fees.
            </StyledSubtitle>
            <Spacer y={1.5} />
            <Grid.Container gap={2}>
              <Grid>
                <Button
                  onClick={handleDappTechnology}
                  auto
                  className="hero__get-started-button"
                  icon={<Bug size={20} fill="var(--nextui-colors-green800)" />}
                  css={{
                    bg: '$gray50',
                    color: '$text',
                    maxH: '38px',
                    px: '$6',
                    '@mdMax': {},
                    '& .nextui-button-icon': {
                      mr: '$2',
                    },
                    '& .nextui-button-icon svg': {
                      transition: '$default',
                    },
                    '&:hover': {
                      '& .nextui-button-icon svg': {
                        animation: `${pulse} 1s infinite`,
                      },
                    },
                    [`.${darkTheme} &`]: {
                      bg: 'rgba(51, 51,51,0.7)',
                      '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))':
                        {
                          bf: 'saturate(180%) blur(14px)',
                        },
                    },
                  }}
                >
                  Dapp Technology
                </Button>
              </Grid>
              <Grid>
                <Button
                  auto
                  className="hero__get-started-button"
                  icon={
                    <Devices size={20} fill="var(--nextui-colors-green800)" />
                  }
                  css={{
                    bg: '$gray50',
                    color: '$text',
                    maxH: '38px',
                    px: '$6',
                    '@mdMax': {},
                    '& .nextui-button-icon': {
                      mr: '$2',
                    },
                    '& .nextui-button-icon svg': {
                      transition: '$default',
                    },
                    '&:hover': {
                      '& .nextui-button-icon svg': {
                        animation: `${pulse} 1s infinite`,
                      },
                    },
                    [`.${darkTheme} &`]: {
                      bg: 'rgba(51, 51,51,0.7)',
                      '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))':
                        {
                          bf: 'saturate(180%) blur(14px)',
                        },
                    },
                  }}
                >
                  Evolution of Dapps
                </Button>
              </Grid>
            </Grid.Container>
          </Col>
          <Col
            className="hero__right-container"
            css={{
              position: 'relative',
              height: '100%',
              '@mdMax': {
                display: 'none',
              },
            }}
            span={6}
          >
            <FloatingPills />
          </Col>
          <StyledImg
            alt="gradient blue background"
            className="docs__gradient-blue"
            css={{
              display: 'none',
              opacity: 0,
              position: 'fixed',
              zIndex: '$1',
              bottom: '-20%',
              left: '30%',
              right: '50%',
              animation: `${appears} 200ms 100ms ease forwards`,
              [`.${darkTheme} &`]: {
                display: 'block',
              },
            }}
            src="/gradient-left-dark.svg"
          />
          <StyledImg
            alt="gradient violet background"
            className="docs__gradient-violet"
            css={{
              display: 'none',
              top: 0,
              opacity: 0,
              position: 'fixed',
              animation: `${appears} 200ms 100ms ease forwards`,
              '@lg': {
                top: '-50%',
                right: '-50%',
              },
              '@mdMax': {
                top: '-35%',
                right: '-45%',
              },
              [`.${darkTheme} &`]: {
                display: 'block',
              },
            }}
            src="/gradient-right-dark.svg"
          />
        </Row>
      </Container>
    </Section>
  );
};

export default DappHero;
