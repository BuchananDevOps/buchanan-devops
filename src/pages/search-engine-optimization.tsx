import {
  SeoHero,
  FeaturesGrid,
  WhySeo,
  SeoMetrics,
  AngledGradientHeading,
} from '@components';
import { Section } from '@primitives';
import { NextPage } from 'next';
import seoContent from '../../content/seo';

const SearchEngineOptimization: NextPage = () => {
  return (
    <>
      <SeoHero />
      <FeaturesGrid features={seoContent.seoFeatures} />
      <WhySeo />
      <AngledGradientHeading />
      <SeoMetrics />
    </>
  );
};

export default SearchEngineOptimization;
