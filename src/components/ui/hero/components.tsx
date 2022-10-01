import React, { useEffect } from 'react';
import {
  Input,
  Card,
  Row,
  Col,
  Loading,
  Text,
  styled,
  Grid,
  Pagination,
  Tooltip,
  Button,
  StyledButton,
} from '@nextui-org/react';
import { useRouter } from 'next/router';
import { levitating } from '@utils/animations';
import {
  LogoStacked,
  UserTwitterCard,
  ThemeSwitch,
  QuickContact,
} from '@components';
import { useIsMobile } from '@hooks/use-media-query';
import { darkTheme } from '@theme/shared';

const StyledContainer = styled('div', {
  dflex: 'center',
  position: 'absolute',
  zIndex: '$max',
  '@xsMax': {
    display: 'none',
  },
});

const HeroComponents = () => {
  const router = useRouter();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      const element = document.getElementById('nextui-tooltip');

      if (element) {
        element.remove();
      }
    }
  }, [isMobile]);

  return (
    <StyledContainer>
      <ThemeSwitch
        css={{
          color: '$black',
          position: 'absolute',
          top: '-170%',
          right: '-120%',
          animation: `${levitating} 13s ease infinite 1s reverse`,
          '.nextui-switch-circle': {
            bg: '$white',
          },
        }}
      />
      <UserTwitterCard
        avatarProps={{
          squared: false,
          color: 'default',
          css: {
            '.nextui-avatar-img': {
              borderColor: '#FF1CF7',
            },
          },
        }}
        avatarUrl="/images/next-card.png"
        css={{
          position: 'relative',
          cursor: 'pointer',
          top: '-190px',
          left: '100px',
          px: '$8',
          mw: '280px',
          animation: `${levitating} 12s ease infinite`,
          backgroundColor: '$logoBackground',
          boxShadow: '$sm',
        }}
      />
      <Grid
        css={{
          position: 'absolute',
          bottom: '-200px',
          left: '400px',
          animation: `${levitating} 14s ease infinite`,
        }}
      >
        <QuickContact />
      </Grid>
      <Card
        css={{
          p: 0,
          w: '120px',
          h: '120px',
          position: 'absolute',
          right: '-240px',
          top: '-240px',
          animation: `${levitating} 13s ease infinite 1s`,
        }}
      >
        <Card.Header css={{ position: 'absolute', zIndex: 1, top: -5 }}>
          <Col>
            <Text
              color="#ffffffAA"
              size={10}
              transform="uppercase"
              weight="bold"
            >
              Static Sites
            </Text>
          </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            alt="Card example background"
            css={{
              width: '100%',
              transform: 'translateY(-30%)',
              height: '100%',
              mt: '25%',
            }}
            objectFit="cover"
            src="/images/next-card.png"
            width="100%"
          />
        </Card.Body>
        <Card.Footer
          css={{
            position: 'absolute',
            bf: 'saturate(180%) blur(10px)',
            bg: '$backgroundBlur',
            maxHeight: '$space$12',
            borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
            px: '$6',
            bottom: '0px',
            zIndex: '$max',
          }}
        >
          <Row justify="space-between">
            <Text
              color="#fff"
              css={{
                fontWeight: '$semibold',
                textShadow: '0 2px 2px rgba(0,0,0,0.3)',
              }}
              size={12}
            >
              SSG
            </Text>
            <Text
              color="#fff"
              css={{
                fontWeight: '$semibold',
                textShadow: '0 2px 2px rgba(0,0,0,0.3)',
              }}
              size={12}
            >
              $949
            </Text>
          </Row>
        </Card.Footer>
      </Card>
      <Button.Group
        bordered
        vertical
        borderWeight="bold"
        color="gradient"
        className="rainbowRadialGradient"
        css={{
          position: 'absolute',
          top: '-160px',
          left: '200%',
          animation: `${levitating} 16s ease infinite`,
          [`& ${StyledButton}`]: {
            '&:not(:last-child)&:not(:first-child)': {
              filter: 'hue-rotate(-45deg)',
            },
          },
        }}
      >
        <Button>Web Design</Button>
        <Button>SEO</Button>
        <Button>App Development</Button>
      </Button.Group>
      <Grid
        css={{
          position: 'absolute',
          size: '140px',
          cursor: 'pointer',
          top: '-110px',
          right: '-250px',
          dflex: 'center',
          zIndex: '$max',
          animation: `${levitating} 18s ease infinite`,
          backgroundColor: '$logoBackground',
          boxShadow: '$sm',
          borderRadius: '$lg',
        }}
        onClick={() => {
          router.push('/portfolio');
        }}
      >
        <LogoStacked small size={120} />
      </Grid>

      <Card
        css={{
          p: 0,
          w: '250px',
          h: '250px',
          zIndex: '$2',
          position: 'absolute',
          right: '-35%',
          top: '0px',
          animation: `${levitating} 18s ease infinite 1s`,
        }}
      >
        <Card.Header
          css={{
            backdropFilter: 'saturate(180%) blur(10px)',
            position: 'absolute',
            zIndex: 1,
            top: -5,
          }}
        >
          <Col>
            <Text
              css={{
                textShadow: '0 2px 2px rgba(0,0,0,0.3)',
                color: '$white',
              }}
              size={12}
            >
              Building the Future with Dapp's
            </Text>
          </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            alt="Hero Card background"
            height={400}
            objectFit="cover"
            src="/images/hero-card.webp"
            width="100%"
          />
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: 'absolute',
            bf: 'saturate(180%) blur(10px)',
            bg: '$backgroundBlur',
            px: '$6',
            py: '$4',
            borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row align="center">
            <Col>
              <Text
                css={{
                  textShadow: '0 2px 2px rgba(0,0,0,0.3)',
                  color: '$white',
                }}
                size={12}
              >
                Join The Matrix.
              </Text>
            </Col>
            <Col>
              <Row align="center" justify="flex-end">
                <Button
                  auto
                  rounded
                  color="success"
                  css={{
                    px: '$4',
                    height: '$space$10',
                    color: '$white',
                    [`.${darkTheme} &`]: {
                      bg: '$green900',
                      color: '$green300',
                    },
                  }}
                  size="sm"
                >
                  Blog Articles
                </Button>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </StyledContainer>
  );
};

export default HeroComponents;
