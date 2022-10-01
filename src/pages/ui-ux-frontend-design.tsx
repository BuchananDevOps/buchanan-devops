import { NextPage } from 'next';
import {
  FrontendHero,
  StuffWeDesign,
  Technology,
  WhatsAWebApp,
} from '@components';

const FrontendDesign: NextPage = () => {
  return (
    <>
      <FrontendHero />
      <WhatsAWebApp />
      <Technology />
      <StuffWeDesign />
    </>
  );
};

export default FrontendDesign;
