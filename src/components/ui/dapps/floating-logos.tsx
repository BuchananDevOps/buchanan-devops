import { LogoStacked, StyledImg } from '@components';
import { useIsMobile } from '@hooks/use-media-query';
import { Grid, styled } from '@nextui-org/react';
import { darkTheme } from '@theme/shared';
import { levitating } from '@utils/animations';
import { useEffect } from 'react';

const StyledContainer = styled('div', {
  dflex: 'center',

  zIndex: '$max',
  '@xsMax': {
    mt: '$50px'
  },
});

const FloatingLogos = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      const element = document.getElementById('nextui-tooltip');

      if (element) {
        element.remove();
      }
    }
  }, [isMobile]);
  return (
    <StyledContainer css={{ mt: '100px' }}>
      <StyledImg
        css={{
          position: 'relative',
          cursor: 'pointer',
          top: '-190px',
          left: '500px',
          px: '$8',
          animation: `${levitating} 12s ease infinite`,
          '@xsMax': {
            top: '-190px',
            left: '350px',
            width: '75px',
          },
        }}
        width={125}
        src="/providers/ceramic-logo.png"
        alt="floating logos"
      />
      <StyledImg
        css={{
          position: 'relative',
          cursor: 'pointer',
          top: '-100px',
          left: '500px',
          px: '$8',
          animation: `${levitating} 12s ease infinite`,
          '@xsMax': {
            top: '-140px',
            left: '325px',
            width: '155px',
          },
          [`.${darkTheme} &`]: {
            filter: 'invert(1)',
          },
        }}
        width={200}
        src="/providers/superfluid.svg"
        alt="floating logos"
      />

      <StyledImg
        css={{
          position: 'relative',
          cursor: 'pointer',
          top: '-200px',
          left: '400px',
          px: '$8',
          animation: `${levitating} 14s ease infinite`,
          '@xsMax': {
            top: '-200px',
            left: '250px',
            width: '155px',
          },
          [`.${darkTheme} &`]: {
            filter: 'invert(1)',
          },
        }}
        width={225}
        src="/providers/ethereum-logo.png"
        alt="floating logos"
      />

      <StyledImg
        css={{
          position: 'relative',
          cursor: 'pointer',
          top: '75px',
          left: '-50px',
          px: '$8',
          animation: `${levitating} 13s ease infinite`,
          '@xsMax': {
            top: '0px',
            left: '75px',
            width: '155px',
          },
          [`.${darkTheme} &`]: {
            filter: 'invert(1)',
          },
        }}
        width={225}
        src="/providers/gnosis.svg"
        alt="floating logos"
      />

      <StyledImg
        css={{
          position: 'relative',
          cursor: 'pointer',
          top: '-75px',
          left: '100px',
          px: '$8',
          animation: `${levitating} 15s ease infinite`,
          '@xsMax': {
            top: '-140px',
            left: '0px',
            width: '90px',
          },
          [`.${darkTheme} &`]: {
            filter: 'invert(1)',
          },
        }}
        width={125}
        src="/providers/ipfs-logo.png"
        alt="floating logos"
      />

      <StyledImg
        css={{
          position: 'relative',
          cursor: 'pointer',
          top: '-50px',
          left: '-400px',
          px: '$8',
          animation: `${levitating} 13s ease infinite`,
          '@xsMax': {
            top: '-30px',
            left: '-250px',
            width: '90px',
          },
          [`.${darkTheme} &`]: {
            filter: 'invert(1)',
          },
        }}
        width={125}
        src="/providers/idx-logo.png"
        alt="floating logos"
      />

      <StyledImg
        css={{
          position: 'relative',
          cursor: 'pointer',
          top: '0px',
          left: '-400px',
          px: '$8',
          animation: `${levitating} 17s ease infinite`,
          '@xsMax': {
            top: '-85px',
            left: '-400px',
            width: '110px',
          },
          [`.${darkTheme} &`]: {
            filter: 'invert(1)',
          },
        }}
        width={125}
        src="/providers/self-id-logo.png"
        alt="floating logos"
      />

      <StyledImg
        css={{
          position: 'relative',
          cursor: 'pointer',
          top: '25px',
          left: '-400px',
          px: '$8',
          animation: `${levitating} 11s ease infinite`,
          '@xsMax': {
            top: '-75px',
            left: '-375px',
            width: '195px',
          },
          [`.${darkTheme} &`]: {
            filter: 'invert(1)',
          },
        }}
        width={250}
        src="/providers/metamask-logo.png"
        alt="floating logos"
      />
    </StyledContainer>
  );
};

export default FloatingLogos;
