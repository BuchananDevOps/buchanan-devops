import { keyframes } from '@nextui-org/react';

export const levitating = keyframes({
  '0%': {
    transform: 'translateY(0)',
  },
  '30%': {
    transform: 'translateY(-10px)',
  },
  '50%': {
    transform: 'translateY(4px)',
  },
  '70%': {
    transform: 'translateY(-15px)',
  },
  '100%': {
    transform: 'translateY(0)',
  },
});

export const appears = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

export const pulse = keyframes({
  '0%': {
    transform: 'scale(1)',
  },
  '50%': {
    transform: 'scale(1.2)',
  },
  '100%': {
    transform: 'scale(1)',
  },
});

export const growAndShrink = keyframes({
  '0%': {
    transform: 'scale(0)',
  },
  '50%': {
    transform: 'scale(1)',
  },
  '100%': {
    transform: 'scale(0)',
  },
});

export const spin = keyframes({
  from: {
    top: '50%',
    transform: 'rotate(0deg)',
  },

  to: {
    top: '10%',
    transform: 'rotate(360deg)',
  },
});

export const spin2 = keyframes({
  from: {
    top: '20%',
    left: '30%',
    transform: 'rotate(0deg)',
  },
  to: {
    top: '35%',
    left: '65%',
    transform: 'rotate(360deg)',
  },
});
