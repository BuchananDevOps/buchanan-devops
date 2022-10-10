import { Container, keyframes, Spacer, styled, Text } from '@nextui-org/react';
import { HeroButton, Section, StyledImg } from '@primitives';
import NextLink from 'next/link';

interface CtaGrowProps {
  description: string;
  href?: string;
}


const StyledCtaSection = styled('div', {
  borderImage: 'linear-gradient(90deg,#c42d01 0%,#d4542c 10%,#f2f240 20%,#67e217 30%,#00e754 40%,#4dba8b 50%,#00b4dc 60%,#00eef4 70%,#b100f2 80%,#c82f92 90%,#ed2290 95%,#c33126 100%)',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderImageSlice: '1',
  display: 'flex',
  color: '$background',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: '0 1.5rem',
  backgroundColor: '$ctabgk',
  transition: 'all 0.2s ease-in-out',
    
  '@md': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '0 2.5rem',
  },
  '@lg': {
    '& .cta-grow-title': {
        fontSize: '48px',
        textAlign: 'left',
        lineHeight: '56px',
        letterSpacing: '-0.05em',
    }
  },
  '@xsMax': {
    '& .cta-grow-title': {
        fontSize: '32px',
        textAlign: 'center',
        lineHeight: '38.4px',
        fontWeight: '700',
        letterSpacing: '-0.04em',
    }
  },
});


const CtaGrow: React.FC<CtaGrowProps> = ({ description, href }) => {
  return (
    <>

      <Section css={{ mt: '-100px' }} className="cta-grow-wrapper">
        <Container>
          <StyledCtaSection css={{ 
            padding: '64px', 
            backgroundImage: 'url(/delamure/gradients/gradients-white.svg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            '@xsMax': { padding: '$11', backgroundSize: '1000px' },  }}>
            <Text css={{ justifyContent: "flex-start" }} h2 className="cta-grow-title">{description}</Text>
            <NextLink href={href} passHref>
              <HeroButton css={{ minWidth: '200px', '@xsMax': { mt: '$10' } }} color="white" className="cta-grow-button">Become a Client</HeroButton>
            </NextLink>
          </StyledCtaSection>
        </Container>
      </Section>{' '}
    </>
  );
};

export default CtaGrow;
