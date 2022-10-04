import { NextPage } from 'next';
import { Section } from '@primitives';
import {
  DappHero,
  TheChoice,
  WhyDapps,
  DappPossibilities,
  DappHeroMobile,
} from '@components';
import { useMediaQuery } from '@hooks/use-media-query';

const ProductionApps: NextPage = () => {
  const isMobile = useMediaQuery(960);
  return (
    <>
      {isMobile ? <DappHeroMobile /> : <DappHero />}

      <TheChoice />
      <WhyDapps />
    </>
  );
};
export default ProductionApps;
