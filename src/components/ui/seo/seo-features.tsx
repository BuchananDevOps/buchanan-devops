import { Section } from '@primitives';
import { FeatureGradient, StyledGradientWrapper } from './styles';
import seoContent from '@content/seo';
import { FeaturesGrid } from '@components';

const SeoFeatures: React.FC = () => {
  return (
    <>
      <Section>
        <StyledGradientWrapper>
          <FeatureGradient color="green" />
          <FeatureGradient color="purple" />
          <FeatureGradient color="lightBlue" />
        </StyledGradientWrapper>

        <FeaturesGrid features={seoContent.seoFeatures} />
      </Section>
    </>
  );
};
export default SeoFeatures;
