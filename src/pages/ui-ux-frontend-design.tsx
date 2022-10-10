import { NextPage } from 'next';
import {
  CtaGrow,
  FrontendHero,
  StuffWeDesign,
  Technology,
  WhatsAWebApp,
} from '@components';
import { Spacer } from '@nextui-org/react';

const FrontendDesign: NextPage = () => {
  return (
    <>
      <FrontendHero />
      <Spacer y={7} />
      <WhatsAWebApp />
      <StuffWeDesign />
      <CtaGrow
        href="/showcase-portfolio"
        description={'Would you like to grow your business?'}
      />
    </>
  );
};

export default FrontendDesign;
