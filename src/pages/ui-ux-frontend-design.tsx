import { NextPage } from 'next';
import {
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
    </>
  );
};

export default FrontendDesign;
