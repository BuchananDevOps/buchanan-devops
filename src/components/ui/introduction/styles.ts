import { styled } from '@nextui-org/react';
import { Button } from '@nextui-org/react';

export const HeroTitle = styled('h1', {
  display: 'block',
  color: '$text',
  position: 'relative',
  textAlign: 'center',
  fontSize: '8rem',
  lineHeight: '1',
  fontWeight: '800',
  letterSpacing: '-0.06em',
  '@xsMax': {
    fontSize: '5rem',
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

export const TitleDevelop = styled('span', {
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  zIndex: '1',
  backgroundImage: 'linear-gradient(90deg, #7928CA 0%, #ff0080 100%)',
  animationDuration: '3s',
  animationTimingFunction: 'ease-in-out',
  animationIterationCount: 'infinite',
  animationDelay: '0s',
  animationDirection: 'normal',
  animationFillMode: 'both',
  animationPlayState: 'running',
});

export const TitleOptimize = styled('span', {
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  zIndex: '1',
  backgroundImage: 'linear-gradient(90deg, #FF4D4D 0%, #F9CB28 100%)',
  animationDuration: '3s',
  animationTimingFunction: 'ease-in-out',
  animationIterationCount: 'infinite',
  animationDelay: '0s',
  animationDirection: 'normal',
  animationFillMode: 'both',
  animationPlayState: 'running',
});

export const StyledGradientButton = styled('button', {
  padding: '0.5rem 1rem',
  background: '$transparent',
  backgroundImage: 'linear-gradient(to right, #000000bf, #000000bf)',
  color: '$foreground',
  borderColor: '$transparent',
  borderRadius: '0.2rem',
  borderWidth: '1px',
  backgroundClip: 'padding-box',
  boxShadow: '0 4px 4px 0 #00000040',
  transitionProperty: 'color, backgroundColor boxShadow, ',
  transitionDuration: '0.15s',
  transitionTimingFunction: 'ease-in-out',
});

export const DesignSectionLabel = styled('span', {
  display: 'inline-block',
  borderRadius: '50%',
  color: '$background',
  width: '40px',
  height: '40px',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '700',
  mb: '24px',
  pt: '8px',
  background: 'linear-gradient(90deg, #007cf0, #00dfd8)',
});

export const DesignPathLine = styled('span', {
  height: '100px',
  width: '1px',
  background: 'linear-gradient($background, #019ae9)',
});

export const DevelopSectionLabel = styled('span', {
  display: 'inline-block',
  borderRadius: '50%',
  color: '$background',
  width: '40px',
  height: '40px',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '700',
  mb: '24px',
  pt: '8px',
  background: 'linear-gradient(90deg, #9a1fb8, #ff0080)',
});

export const DevelopPathLine = styled('span', {
  height: '100px',
  width: '1px',
  background: 'linear-gradient($background, #9a1fb8)',
});

export const DeploySectionLabel = styled('span', {
  display: 'inline-block',
  borderRadius: '50%',
  color: '$background',
  width: '40px',
  height: '40px',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '700',
  mb: '24px',
  pt: '8px',
  background: 'linear-gradient(90deg, #ff4d4d, #f9cb28)',
});

export const DeployPathLine = styled('span', {
  height: '100px',
  width: '1px',
  background: 'linear-gradient($background, #f9cb28)',
});
