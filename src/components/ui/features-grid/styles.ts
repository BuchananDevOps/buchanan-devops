import { Grid, styled } from '@nextui-org/react';
import { darkTheme, lightTheme } from '@theme/shared';
import { StyledCardBlur } from '@components';

export const FeatureItem = styled(Grid, StyledCardBlur, {
  transition: '$default',
  minWidth: '100%',
  '& .icon-wrapper': {
    dflex: 'center',
    br: '$pill',
    p: '$4',
  },
  [`.${lightTheme} &`]: {
    '& .icon-wrapper': {
      background: 'linear-gradient(116deg, rgba(243, 36, 95, .15) 0%, rgba(196, 60, 130, .15) 100%)',
    },
    '& .icon-wrapper svg': {
      stroke: 'linear-gradient(116deg, rgba(243, 36, 95, 1) 0%, rgba(196, 60, 130, 1) 100%)',
    },
  },
  [`.${darkTheme} &`]: {
    background: 'linear-gradient(-90deg, rgba(50, 134, 241, .15) 0%, rgba(196, 58, 196, .15) 100%)',
    '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))':
      {
        bf: 'saturate(180%) blur(14px)',
      },
      '& .icon-wrapper': {
        background: 'linear-gradient(116deg, rgba(243, 36, 95, .15) 0%, rgba(196, 60, 130, .15) 100%)',
      },
      '& .icon-wrapper svg': {
        fill: 'linear-gradient(116deg, rgba(243, 36, 95, 1) 0%, rgba(196, 60, 130, 1) 100%)',
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
