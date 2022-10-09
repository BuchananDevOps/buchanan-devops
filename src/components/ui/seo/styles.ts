import { styled, keyframes, VariantProps, Grid, Text } from '@nextui-org/react';
import { lightTheme } from '@theme/shared';
import { spin, growAndShrink, spin2, spin3 } from '@utils/animations';
import { StyledCardBlur } from '@components';

export const StyledTitle = styled(Text, {
  marginTop: '-30px',
  fontSize: '100px',
  fontWeight: '700',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundImage: 'linear-gradient(90deg, #FF4D4D 0%, #F9CB28 100%)',
});

export const GradientHero = styled('h1', {
  mt: '-50px',
  fontSize: '7rem',
  fontWeight: '$extrabold',
  letterSpacing: '-0.05em',
  $$colorA: '#FF4D4D',
  $$colorB: '#F9CB28',
  $$gradient: 'linear-gradient(90deg, $$colorA 0%, $$colorB 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundImage: '$$gradient',
  '@xsMax': {
    mt: '-30px',
    fontSize: '4rem',
  },
});

export const StyledGradientWrapper = styled('div', {
  position: 'absolute',
  height: '100vh',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 0,
  overflow: 'hidden',
  filter: 'blur(70px)',
  userSelect: 'none',
  pointerEvents: 'none',
});

export const FeatureGradient = styled('div', {
  position: 'absolute',
  borderRadius: '100%',
  variants: {
    color: {
      purple: {
        background: '#ff0080',
        opacity: 0.3,
        width: '600px',
        height: '600px',
        zIndex: -1,
        animation: `${spin} 13s infinite alternate`,
      },
      lightBlue: {
        background: '#0070f3',
        opacity: 0.3,
        width: '500px',
        height: '500px',
        zIndex: -3,
        animation: `${spin2} 13s infinite alternate`,
      },
      green: {
        zIndex: -2,
        background: '#7928ca',
        opacity: 0.2,
        width: '800px',
        height: '800px',
        borderRadius: '30%',
        animation: `${spin3} 15s infinite alternate`,
      },
    },
  },
});

export const SeoFeatureItem = styled(Grid, StyledCardBlur, {
  transition: '$default',
  minWidth: '100%',
  '& .icon-wrapper': {
    dflex: 'center',
    background: 'rgb(42,22,60)',
    br: '$pill',
    p: '$4',
  },
  [`.${lightTheme} &`]: {
    '& .icon-wrapper': {
      background: '$pink100',
    },
  },
  variants: {
    clickable: {
      true: {
        cursor: 'pointer',
        '&:hover': {
          opacity: 0.8,
        },
      },
    },
  },
});

export const StyledContent = styled('a', {
  display: 'flex',
  position: 'relative',
  zIndex: '$10',
  fd: 'row',
  alignItems: 'center',
  textDecoration: 'none',
  color: '$text',
  cursor: 'pointer',
  transition: '$default',
  '& .chevron-right-icon': {
    transition: 'transform cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
  },
  '&:hover': {
    opacity: 0.8,
    '& .chevron-right-icon': {
      transform: 'translateX(2px)',
    },
  },
});