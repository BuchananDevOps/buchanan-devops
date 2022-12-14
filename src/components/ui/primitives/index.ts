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

const animatedBorder = keyframes({
  '100%': {
    transform: 'rotate(360deg)',
  },
});

const animatedGrowBorder = keyframes({
  '100%': {
    transform: 'scaleX(0.95)',
    backgroundPosition: '-200% center',
  },
  '50%': {
    transform: 'scaleX(1.05)',
  },
  '0%': {
    transform: 'scaleX(.95)',

  },
});

export const AnimationHelper = styled('div', {
  animationDuration: '.5s',
  easing: 'cubic-bezier(0.4,0.01,0.165,0.99)',
  animationDelay: '0s',
});

export const GradientBorder = styled('div', {
  position: 'relative',
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
        '&:hover': {
          color: '$text',
          background: '$background',
          border: '1px solid $foreground',
        },
      },
    },
  },
});


export const SummaryBannerWrapper = styled('section', {
  $$height: '240px',
  $$gradientOffset: '-200px',
  $$opacity: '0.15',
  $$borderRadius: '20px',
  $$borderColorA: 'rgba(211deg 95% 57% / 15%)',
  $$borderColorB: 'rgba(227,44,107,.15)',
  borderStyle: 'solid',
  borderWidth: '1px 0 0',
  borderImage: 'linear-gradient(90deg, $$borderColorA, $$borderColorB)',
  borderImageSlice: '1',
  pt: '115px',
  position: 'relative',
  overflow: 'hidden',

  [`.${darkTheme} &`]: {
    $$opacity: '0.35',
    $$borderColorA: 'rgba(40,140,249,.25)',
    $$borderColorB: 'rgba(227,44,107,.25)',
    borderImage: 'linear-gradient(90deg, $$borderColorA, $$borderColorB)',
  },

  '&::before': {
    content: '""',
    position: 'absolute',
    height: '$$height',
    width: '45vw',
    left: '0',
    top: '-250px',
    mixBlendMode: 'normal',
    opacity: '$$opacity',
    boxSizing: 'border-box',
    background: 'linear-gradient(180deg,#bebebe,#4b4b4b)',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    height: '$$height',
    width: '45vw',
    right: '0',
    top: '-250px',
    mixBlendMode: 'normal',
    opacity: '$$opacity',
    filter: 'blur(150px)',
    boxSizing: 'border-box',
    background: 'linear-gradient(180deg,#b8b8b8,#373737',
    bottomBorderLeftRadius: '$$borderRadius',
  },
});

export const GradientCard = styled('div', {
  border: '1px solid',
  borderRadius: '12px',
  padding: '56px',
  position: 'relative',
  flex: '1 1',
  backgroundPositionX: '50%',
  backgroundPositionY: '-330px',
  variants: {
    type: {
      artifact: {
        borderColor: '$$artifactBorder',
        '&::after': {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          opacity: 0.25,
          zIndex: -1,
          backgroundImage: 'url(${url})',
          '& .artifact-card': {
            backgroundImage: 'url(${url})',
          },
        },
      },
      support: {
        borderColor: '$$serviceBorder',
        backgroundColor: '$$serviceBg',
        color: '$$serviceText',
      },
    },
  },
  '& .feature-icon': {
    mb: '20px',
  },
  '& .feature-icon img': {
    maxWidth: '100%',
    height: 'auto',
  },
  '& .feature-title': {
    fs: '1.25rem',
    letterSpacing: '-.020625rem',
    fontWeight: '700',
    lineHeight: '1.5rem',
    mb: '8px',
  },
  '& .feature-description': {
    display: 'block',
    margin: '0px',
    color: '$featureP',
    fs: '1rem',
    fontWeight: '400',
    lineHeight: '1.5rem',
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
  },
});

export const SmallSubTitle = styled(Text, {
  fs: '.75rem',
  fontWeight: '500',
  lineHeight: '1.5rem',
  letterSpacing: '-.020625rem',
  mt: '$0',
  color: '$text',
  textTransform: 'uppercase',
})
