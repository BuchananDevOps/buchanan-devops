import { Col, Container, Grid, Row } from '@nextui-org/react';
import { useRouter } from 'next/router';
import {
  TitleDesign,
  HeroTitle,
  StyledGradientButton,
  TitleDevelop,
  TitleOptimize,
} from './styles';

const IntroHero: React.FC = () => {
  const router = useRouter();

  return (
    <Container
      as="section"
      className="intro-hero__container"
      css={{
        mt: '150px',
      }}
    >
      <Grid.Container css={{}} justify="center">
        <Grid>
          <HeroTitle>
            <TitleDesign>Design.</TitleDesign>
          </HeroTitle>
        </Grid>
        <Grid>
          <HeroTitle>
            <TitleDevelop>Develop.</TitleDevelop>
          </HeroTitle>
        </Grid>
        <Grid>
          <HeroTitle>
            <TitleOptimize>Optimize.</TitleOptimize>
          </HeroTitle>
        </Grid>
      </Grid.Container>

      <style jsx>{`
        .hero-button {
          cover: content;
          background: linear-gradient(160deg, #007cf0, #00dfd8);
          height: 100%;
          width: 100%;
          z-index: -2;
          animation: hero_background-1__GsyFC 8s infinite;
          animation-duration: 8s;
          animation-timing-function: ease;
          animation-delay: 0s;
          animation-iteration-count: infinite;
          animation-direction: normal;
          animation-fill-mode: none;
          animation-play-state: running;
          animation-name: hero_background-1__GsyFC;
        }
      `}</style>
    </Container>
  );
};

export default IntroHero;
