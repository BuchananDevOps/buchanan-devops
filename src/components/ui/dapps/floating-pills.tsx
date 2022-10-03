import { LogoStacked, StyledImg } from '@components';
import { useIsMobile } from '@hooks/use-media-query';
import { Grid, styled, StyledCard, Text } from '@nextui-org/react';
import { darkTheme } from '@theme/shared';
import { levitating } from '@utils/animations';
import { useEffect } from 'react';
import { StyledGradientTitle, StyledTitle } from './styles';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

const StyledContainer = styled('div', {
  dflex: 'center',
  position: 'absolute',
  zIndex: '$max',
  '@xsMax': {
    display: 'none',
  },
});

const FloatingLogos = () => {
  const isMobile = useIsMobile();
  const router = useRouter();
  const handleDappTechnology = () => {
    const dappTechnology = document.getElementById('dapp-technology');
    if (dappTechnology) {
      dappTechnology.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBluePill = () => {
    router.push('/full-stack-development');
  };

  useEffect(() => {
    if (isMobile) {
      const element = document.getElementById('nextui-tooltip');

      if (element) {
        element.remove();
      }
    }
  }, [isMobile]);
  return (
    <StyledContainer>
      <StyledImg
        onClick={handleDappTechnology}
        css={{
          position: 'relative',
          cursor: 'pointer',
          top: '-170px',
          left: '150px',
          px: '$8',
          animation: `${levitating} 12s ease infinite`,
        }}
        width={125}
        src="/content/red-pill-trace.svg"
        alt="floating logos"
      />
      <StyledTitle
        css={{
          textAlign: 'center',
          position: 'relative',
          cursor: 'pointer',
          top: '-170px',
          left: '150px',
          px: '$8',
          animation: `${levitating} 14s ease infinite`,
        }}
      >
        THE <br />
        CHOICE
        <br />
        IS <StyledGradientTitle>YOURS</StyledGradientTitle>
      </StyledTitle>
      <StyledImg
        onClick={handleBluePill}
        css={{
          position: 'relative',
          cursor: 'pointer',
          top: '-170px',
          left: '150px',
          px: '$8',
          animation: `${levitating} 17s ease infinite`,
        }}
        width={125}
        src="/content/blue-pill-trace.svg"
        alt="floating logos"
      />
    </StyledContainer>
  );
};

export default FloatingLogos;
