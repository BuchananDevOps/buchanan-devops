import { styled, keyframes, VariantProps, Grid } from '@nextui-org/react';
import { lightTheme } from '@theme/shared';
import { spin, growAndShrink } from '@utils/animations';
import { StyledCardBlur } from '@components';

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

export const FeatureGradientOrange = styled('div', {
  position: 'absolute',
  borderRadius: '100%',
  top: '10%',
  left: '40%',
  background: '#29bc9b',
  opacity: 0.5,
  width: '700px',
  height: '700px',
  zIndex: -2,
});

export const FeatureGradientPurple = styled('div', {
  position: 'absolute',
  borderRadius: '100%',
  top: '30%',
  left: '10%',
  background: '#7928ca',
  opacity: 0.4,
  width: '600px',
  height: '600px',
  zIndex: -1,
});

export const FeatureGradientLight = styled('div', {
  position: 'absolute',

  top: '50%',
  left: '50%',
  background: '#137dc0',
  opacity: 0.4,
  width: '500px',
  height: '500px',
  zIndex: -3,
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
