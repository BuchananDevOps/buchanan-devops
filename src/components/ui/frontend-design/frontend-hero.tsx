import { Container, Row, Spacer, Text } from '@nextui-org/react';
import {
  Section,
  HeroImgBackground,
  Subtitle,
  StyledCardBlur,
} from '@primitives';
import { darkTheme, lightTheme } from '@theme/shared';
import { HeroTitle, TitleDesign } from './styles';

const FrontendHero: React.FC = () => {
  return (
    <>
      <StyledCardBlur
        css={{
          br: 0,
          p: 0,
          dflex: 'center',
          width: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          ml: '-50vw',
          mr: '-50vw',
          pt: '$20',
          pb: '$20',
          border: '0px solid $border',
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          bgBlur: '$background',
          backgroundSize: 'cover',
          [`.${lightTheme} &`]: {
            backgroundImage: 'url(/images/aztec-background-light.svg)',
          },
          [`.${darkTheme} &`]: {
            backgroundImage: 'url(/images/aztec-background-green.svg)',
          },
        }}
      >
        <Container
          lg
          css={{
            ml: 0,
            mr: 0,
            py: '$8',
            '@xsMax': {
              px: '$4',
            },
          }}
        >
          <Row justify="center">
            <HeroTitle>
              <TitleDesign>UI / UX - Frontend Design</TitleDesign>
            </HeroTitle>
          </Row>
        </Container>
      </StyledCardBlur>
    </>
  );
};

export default FrontendHero;
