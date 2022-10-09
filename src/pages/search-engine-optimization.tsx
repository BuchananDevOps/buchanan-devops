import {
  SeoHero,
  FeaturesGrid,
  WhySeo,
  SeoMetrics,
  AngledGradientHeading,
  SeoSummary,
  SeoPartners,
  SeoRightLeft
} from '@components';
import { Section } from '@primitives';
import { NextPage } from 'next';

const SearchEngineOptimization: NextPage = () => {
  return (
    <>
      <SeoHero />
      <SeoSummary />
      <SeoPartners />
      <SeoRightLeft />
      <WhySeo />
      <AngledGradientHeading />
      <SeoMetrics />
    </>
  );
};

export default SearchEngineOptimization;


