import { StyledGradientTitle, StyledSubtitle, StyledTitle } from './styles';
import {
  Container,
  Text,
  Button,
  Grid,
  Row,
  Col,
  Spacer,
} from '@nextui-org/react';
import { Server, VideoOff } from '@components';
import { pulse } from '@utils/animations';
import { darkTheme } from '@theme/shared';

const SupportHero: React.FC = () => {
  const handleLongTermSupport = () => {
    const longTermSupport = document.getElementById('long-term-support');
    if (longTermSupport) {
      longTermSupport.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Container
      alignItems="center"
      as="section"
      className="hero__container"
      css={{
        position: 'relative',
        height: 'calc(84vh - 76px)',
        '@xsMax': {
          height: 'calc(100vh - 64px)',
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
          <StyledTitle css={{ mb: 0 }}>Supreme&nbsp;</StyledTitle>
          <StyledGradientTitle css={{ mb: 0 }}>
            support&nbsp;
          </StyledGradientTitle>
          <StyledTitle css={{ mb: 0, '@xsMax': { d: 'inline-block' } }}>
            builds lasting relationships.
          </StyledTitle>

          <StyledSubtitle className="hero__text-subtitle">
            Sticking to our strong ethos, we provide a high level of support for
            our clients with the belief that your success is our success!
          </StyledSubtitle>
          <Spacer y={1.5} />
          <Grid.Container gap={1}>
            <Grid>
              <Button
                onClick={handleLongTermSupport}
                auto
                className="hero__get-started-button"
                icon={<Server size={20} fill="var(--nextui-colors-green800)" />}
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
                Long Term Support
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
        ></Col>
      </Row>
    </Container>
  );
};

export default SupportHero;
