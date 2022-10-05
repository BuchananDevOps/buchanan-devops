import { Grid, styled } from '@nextui-org/react';
import { lightTheme } from '@theme/shared';
import { StyledCardBlur } from '@components';

export const ProcessItem = styled(Grid, StyledCardBlur, {
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
      background: '$cyan400',
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

export const GradientHero = styled('h1', {
  mt: '-50px',
  fontSize: '7rem',
  fontWeight: '$extrabold',
  letterSpacing: '-0.05em',
  $$colorA: '#9A1FB8',
  $$colorB: '#FF0080',
  $$gradient: 'linear-gradient(90deg, $$colorA 0%, $$colorB 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundImage: '$$gradient',
  '@xsMax': {
    mt: '-30px',
    fontSize: '4rem',
  },
});
