import {
  styled,
  Link,
  Text,
  keyframes,
  Button,
  StyledButton,
} from '@nextui-org/react';
import { darkTheme, lightTheme } from '@theme/shared';
import { pulse } from '@utils/animations';

const animatedText = keyframes({
  '100%': {
    backgroundPosition: '-200% center',
  },
});

export const Title = styled('h1', {
  display: 'inline',
  fontWeight: '$bold',
  color: '$text',
  lh: '1.2',
  fs: '2.5rem',
  mb: 0,
  '@sm': {
    fs: '3rem',
  },
  '@lg': {
    fs: '3.5rem',
  },
  '&::selection': {
    WebkitTextFillColor: '$colors$text',
  },
  variants: {
    color: {
      violet: {
        textGradient: '180deg, #FF1CF7 25%, #b249f8 100%',
      },
      warning: {
        textGradient: '180deg, #f36534 25%, #F69F27 100%',
      },
      blue: {
        textGradient: '180deg, #5EA2EF 25%, #0072F5 100%',
      },
      cyan: {
        textGradient: '180deg, #00b7fa 25%, #01cfea 100%',
      },
      green: {
        textGradient: '180deg, #6FEE8D 25%, #17c964 100%',
      },
      pink: {
        textGradient: '180deg, #FF4ECD 25%, #F21361 100%',
      },
    },
    fullWidth: {
      true: {
        display: 'block',
        width: '100%',
      },
    },
  },
});

export const Subtitle = styled('p', {
  pl: '$1',
  fs: '$xl',
  fontWeight: '$medium',
  color: '$accents7',
  display: 'block',
  mw: '100%',
  width: '100%',
  '@sm': {
    mw: '50%',
  },
});

export const Section = styled('section', {
  zIndex: '$2',
  width: '100%',
});

export const Box = styled('div', {
  // Reset
  boxSizing: 'border-box',
});

export const BlockLink = styled(Link, {
  mt: '$12',
  py: '$2',
  px: '$6',
  br: '$pill',
  bg: '$blockLinkBackground',
  fontSize: '$xs',
  color: '$blockLinkColor',
  fontWeight: '$medium',
  '&:hover': {
    bg: '$blockLinkHoverBackground',
  },
  variants: {
    color: {
      default: {
        color: '$blockLinkColor',
      },
      green: {
        color: '$green800',
        bg: '$green100',
        '&:hover': {
          bg: '$green300',
        },
      },
      pink: {
        color: '$pink600',
        bg: '$pink100',
        '&:hover': {
          bg: '$pink300',
        },
      },
      violet: {
        color: '$purple600',
        bg: '$purple100',
        '&:hover': {
          bg: '$purple300',
        },
      },
      blue: {
        color: '$blue700',
        bg: '$blue100',
        '&:hover': {
          bg: '$blue300',
        },
      },
    },
  },
  defaultVariants: {
    color: 'default',
  },
});

export const StyledCardBlur = styled('div', {
  background: '$accents1',
  boxShadow: '$sm',
  borderRadius: '$lg',
  display: 'flex',
  flexDirection: 'column',
  p: '$8',
  bg: '$backgroundContrast',
  '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))': {
    bf: 'saturate(180%) blur(14px)',
    bg: 'rgba(255, 255, 255, 0.05)',
  },
});

export const StyledImg = styled('img', {});

export const AnimatedText = styled(Text, {
  $$colorA: '$colors$pink700',
  $$colorB: '$colors$secondary',
  cursor: 'default',
  position: 'relative',
  fontWeight: '$semibold',
  backgroundImage:
    'linear-gradient(120deg, $$colorA 0%, $$colorB 50%, $$colorA 100%)',
  backgroundOrigin: 'padding-box',
  backgroundSize: '200%',
  WebkitBoxDecorationBreak: 'clone',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: 'unset',
  overflow: 'visible',
  animation: `3s linear 0s infinite normal forwards running ${animatedText}`,
  [`.${darkTheme} &`]: {
    $$colorA: '$colors$pink900',
    $$colorB: '$colors$purple700',
  },
});

export const AnimatedTitle = styled(Text, {
  cursor: 'default',
  position: 'relative',
  fontWeight: '$bold',
  backgroundOrigin: 'padding-box',
  backgroundSize: '200%',
  WebkitBoxDecorationBreak: 'clone',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: 'unset',
  overflow: 'visible',
  animation: `3s linear 0s infinite normal forwards running ${animatedText}`,
  variants: {
    type: {
      seo: {
        $$colorA: '#FF4D4D',
        $$colorB: '#F9CB28',
        backgroundImage:
          'linear-gradient(90deg, $$colorA 0%, $$colorB 50%, $$colorA 100%)',
      },
    },
    size: {
      header: {
        fontSize: '5.5rem',
        lineHeight: '1.2',
        marginBlockStart: '-.55em',
      },
    },
  },
});

export const HeroImgBackground = styled('div', {
  background: '$accents1',
  boxShadow: '$sm',
  borderRadius: '$lg',
  display: 'flex',
  flexDirection: 'column',
  p: '$8',
  bg: '$backgroundContrast',
  '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))': {
    bf: 'saturate(180%) blur(14px)',
    bg: 'rgba(255, 255, 255, 0.05)',
  },
});

export const BgGradient = styled('div', {
  position: 'absolute',

  height: '100vh',
  overflow: 'hidden',
  filter: 'blur(70px)',
  userSelect: 'none',
  pointerEvents: 'none',
  variants: {
    color: {
      purple: {
        background: '#ff0080',
        opacity: 0.3,
        width: '600px',
        height: '400px',
        zIndex: -1,
      },
      lightBlue: {
        background: '#0070f3',
        opacity: 0.3,
        width: '600px',
        height: '400px',
        zIndex: -2,
      },
      matrixGreen: {
        $$colorA: '#6fee8d',
        $$colorB: '#17c964',
        top: '10%',
        left: '55%',
        $$gradient: 'linear-gradient( $$colorA 25%, $$colorB 100%)',
        background: '$$gradient',
        opacity: 0.1,

        zIndex: -10,
      },
    },
  },
});

export const PageNav = styled(StyledButton, {
  display: 'flex',
  background: 'none',
  position: 'absolute',
  verticalAlign: 'middle',
  variants: {
    selector: {
      left: {
        justifyContent: 'flex-start',
        top: '35%',
        left: '0%',
        minHeight: '25%',
      },
      right: {
        justifyContent: 'flex-end',
        top: '35%',
        right: '0%',
        bottom: '5%',
        minHeight: '25%',
      },
    },
  },
  '@mdMax': {},
  '& .nextui-button-icon': {
    mr: '$2',
  },
  '& .nextui-button-icon svg': {
    transition: '$default',
    fill: '#13181A',
  },
  '&:hover': {
    '& .nextui-button-icon svg': {
      animation: `${pulse} 1s infinite`,
    },
  },
  [`.${darkTheme} &`]: {
    bg: 'rgba(51, 51,51,0.1)',
    '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))': {
      bf: 'saturate(180%) blur(1px)',
    },
  },
  [`.${lightTheme} &`]: {
    bg: 'rgba(51, 51,51,0.1)',
    '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))': {
      bf: 'saturate(180%) blur(14px)',
    },
  },
});

export const HeroButtonWrapper = styled('div', {
  mb: '80px',

  smDirection: 'column',
  mdDirection: 'row',
  lgDirection: 'row',
  align: 'stretch',
  justify: 'flex-start',
  '@xsMax': {
    mb: '40px',
  },
});

export const HeroButton = styled('button', {
  position: 'relative',
  display: 'inline-flex',
  height: '48px',
  fs: '1rem',
  lh: '1.5rem',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '5px',

  fontWeight: '500',
  padding: '0 $8',
  maxWidth: '100%',
  textDecoration: 'none',
  transitionProperty:
    'background, border-color, color, opacity, box-shadow, transform',
  transitionDuration: '0.15s',
  transitionTimingFunction: 'ease-in-out',
  cursor: 'pointer',
  variants: {
    color: {
      white: {
        color: '$background',
        background: '$foreground',
        border: '1px solid $foreground',
        '&:hover': {
          color: '$text',
          background: '$background',
          border: '1px solid $foreground',
        },
      },
      black: {
        color: '$text',
        background: '$background',
        border: '1px solid $backgroundContrast',
        ml: '16px',
        '&:hover': {
          color: '$text',
          background: '$background',
          border: '1px solid $foreground',
        },
      },
    },
  },
});

{
  /* //Below GradientBackground a link reference then a component but feel free to use this for a quick background or such  */
}

export const SupportCard = styled(Box, {
  opacity: 1,
  backgroundPosition: '50px -330px',
  content: '',
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  zIndex: -1,
  variants: {
    cards: {
      security: {
        backgroundImage: 'url(/gradients/enterprise-security-bg-dark.svg)',
      },
      support: {
        backgroundImage: 'url(/gradients/enterprise-suppurt-bg-dark.svg)',
      },
      blue: {
        backgroundImage: 'url(/gradients/insights-bg.svg)',
      },
      mixed: {
        backgroundImage: 'url(/gradients/artifacts-bg.svg)',
      },
      red: {
        backgroundImage: 'url(gradients/cicd-bg.svg)',
      },
    },
  },
});


