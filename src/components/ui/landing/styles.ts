import { keyframes, styled } from "@nextui-org/react";

const animatedText = keyframes({
  '100%': {
    backgroundPosition: '-200% center',
  }

});


const animatedBorder = keyframes({
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

export const GradientBorder = styled('span', {
  $$gradient: 'linear-gradient(90deg,#c42d01 0%,#d4542c 10%,#f2f240 20%,#67e217 30%,#00e754 40%,#4dba8b 50%,#00b4dc 60%,#00eef4 70%,#b100f2 80%,#c82f92 90%,#ed2290 95%,#c33126 100%)',
  borderImage: '$$gradient 1',
  background: '$$gradient',
  borderImageSlice: '1',
  borderImageWidth: '5px',
  borderImageOutset: '0',
  borderImageRepeat: 'stretch',
  backgroundSize: '200% 100%',
  backgroundPosition: '0 0',
  backgroundClip: 'text',
  opacity: '0.8',
  filter: 'blur(2px)',

  overflow: 'visible',
  animation: `5s linear 0s infinite normal forwards running ${animatedBorder}`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: 'transparent',
  display: 'inline-block',
})

export const GradientHero = styled('h1', {
    mt: '-50px',
    fontSize: '7rem',
    fontWeight: '$extrabold',
    letterSpacing: '-0.05em',
    $$gradient: 'linear-gradient(90deg,#c42d01 0%,#d4542c 10%,#f2f240 20%,#67e217 30%,#00e754 40%,#4dba8b 50%,#00b4dc 60%,#00eef4 70%,#b100f2 80%,#c82f92 90%,#ed2290 95%,#c33126 100%)',

    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundImage: '$$gradient',
    backgroundOrigin: 'padding-box',
    backgroundSize: '200%',
    WebkitBoxDecorationBreak: 'clone',
    color: 'unset',
  overflow: 'visible',
  animation: `10s linear 0s infinite normal forwards running ${animatedText}`,
    backgroundClip: 'text',
    '@xsMax': {
      mt: '-30px',
      fontSize: '3.7rem',
    },
  });

  export const Rainbow = styled('div', {
    position: 'relative',
    zIndex: 0,
    width: '400px',
    height: '300px',
    background: '$text',
    borderRadius: '10px',
    overflow: 'hidden',
    padding: '2rem',

    '&::before': {
      content: '""',
      position: 'absolute',
      zIndex: -1,
      left: '-50%',
      top: '-50%',
      width: '200%',
      height: '200%',
      backgroundColor: '#399953',
      backgroundSize: '100%%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'linear-gradient(90deg,#c42d01 0%,#d4542c 10%,#f2f240 20%,#67e217 30%,#00e754 40%,#4dba8b 50%,#00b4dc 60%,#00eef4 70%,#b100f2 80%,#c82f92 90%,#ed2290 95%,#c33126 100%)',
      animation: `${animatedBorder} 4s linear infinite`,
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      zIndex: -2,
      left: '6px',
      top: '6px',
      width: 'calc(100% - 12px)',
      height: 'calc(100% - 12px)',
      backgroundColor: '#white',
      borderRadius: '5px',
    }

  });