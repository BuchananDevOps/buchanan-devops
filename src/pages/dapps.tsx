import { NextPage } from 'next';
import { Section } from '@primitives';
import { DappHero, TheChoice, WhyDapps } from '@components';

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
