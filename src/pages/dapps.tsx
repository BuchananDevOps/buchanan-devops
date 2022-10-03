import { NextPage } from 'next';
import { Section } from '@primitives';
import { DappHero, TheChoice, WhyDapps, DappPossibilities } from '@components';

const ProductionApps: NextPage = () => {
  return (
    <>
      <DappHero />
      <TheChoice />
      <WhyDapps />
    </>
  );
};
export default ProductionApps;
