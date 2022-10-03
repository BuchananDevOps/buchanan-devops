import { styled, Container } from '@nextui-org/react';

export const CtxContainer = styled(Container, {
  mt: '150px',
  mb: '150px',
});

export const HeroTitle = styled('h1', {
  display: 'block',
  color: '$text',
  position: 'relative',
  textAlign: 'center',
  fontSize: '6rem',
  lineHeight: '1',
  fontWeight: '800',
  letterSpacing: '-0.06em',
  '@xsMax': {
    fontSize: '3rem',
  },
});

export const TitleDesign = styled('span', {
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  zIndex: '1',
  backgroundImage: 'linear-gradient(90deg, #007CF0 0%, #00DFD8 100%)',
  animationDuration: '3s',
  animationTimingFunction: 'ease-in-out',
  animationIterationCount: 'infinite',
  animationDelay: '0s',
  animationDirection: 'normal',
  animationFillMode: 'both',
  animationPlayState: 'running',
});
