import { styled } from '@nextui-org/react';
import { calcLength } from 'framer-motion';

export const AngledSectionHeader = styled('div', {
  background: '$background',
  pointerEvents: 'none',
  position: 'relative',
  zIndex: 5,
});

export const AngledGradientWrapper = styled('div', {
  height: '150px',
  position: 'relative',
  transform: 'rotate(-20deg)',
  gradientWidth: '520px',
});

export const AngledGradient = styled('div', {
  position: 'absolute',
  zIndex: 2,
  pointerEvents: 'none',
  userSelect: 'none',
  height: '100%',
  width: '100%',
  filter: 'blur(75px)',
  backgroundBlendMode: 'screen',
  clipPath: 'polygon(-100% -100%,200% -100%,200% 50%,-100% 50%)',
  background:
    'linear-gradient( 90deg, rgba(255, 205, 159, 0.4) 25%, rgba(119, 222, 255, 0.5) 50%, rgba(221, 14, 255, 0.25) 75% )',
});
