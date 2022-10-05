import {
  SeoHero,
  FeaturesGrid,
  WhySeo,
  SeoMetrics,
  AngledGradientHeading,
  SeoFeatures,
} from '@components';
import { Section } from '@primitives';
import { NextPage } from 'next';

const SearchEngineOptimization: NextPage = () => {
  return (
    <>
      <SeoHero />
      <SeoFeatures />
      <WhySeo />
      <AngledGradientHeading />
      <SeoMetrics />
    </>
  );
};

export default SearchEngineOptimization;
