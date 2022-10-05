import { Section } from '@primitives';
import { FeatureGradient, StyledGradientWrapper, StyledTitle } from './styles';
import seoContent from '@content/seo';
import { spin, spin2 } from '@utils/animations';
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
