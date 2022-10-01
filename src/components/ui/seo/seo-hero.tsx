import { Text, styled, Container } from '@nextui-org/react';
import { Section } from '@primitives';
import {
  FeatureGradientOrange,
  FeatureGradientPurple,
  FeatureGradientLight,
  StyledGradientWrapper,
} from './styles';
import { spin, spin2 } from '@utils/animations';

const StyledTitle = styled(Text, {
  marginTop: '-30px',
  fontSize: '100px',
  fontWeight: '700',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundImage: 'linear-gradient(90deg, #FF4D4D 0%, #F9CB28 100%)',
});

export default function SeoHero() {
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
      <StyledGradientWrapper>
        <FeatureGradientOrange
          css={{
            animation: `${spin} 15s infinite`,
          }}
        />
        <FeatureGradientPurple
          css={{
            animation: `${spin2} 20s  reverse`,
          }}
        />
        <FeatureGradientLight
          css={{
            animation: `${spin} 15s`,
          }}
        />
      </StyledGradientWrapper>
      <Section css={{ marginTop: '200px', position: 'relative' }}>
        <Container>
          <Text css={{ fontSize: '80px', textAlign: 'center' }} h1>
            Search Engine <br /> <StyledTitle> Optimization.</StyledTitle>
          </Text>
        </Container>
      </Section>
    </Container>
  );
}
