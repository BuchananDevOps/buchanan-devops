import { Hero } from '@components';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import landingContent from '../../content/landing';
import {
  FeaturesGrid,
  Section,
  Community,
  InstallBanner,
  CustomThemesSection,
  ComparationSection,
  DarkModeSection,
  CustomizationSection,
  BuiltInStitchesSection,
  LastButNotLeastSection,
} from '@components';
import { Spacer } from '@nextui-org/react';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Section>
        <FeaturesGrid features={landingContent.topFeatures} />
      </Section>
      <CustomThemesSection />
      <CustomizationSection />
      <ComparationSection />
      <BuiltInStitchesSection />

      <DarkModeSection />

      <LastButNotLeastSection />
      {/* Installation banner */}
      <Section css={{ zIndex: '$10' }}>
        <Spacer y={6} css={{ '@xsMax': { mt: '$16' } }} />
        <InstallBanner />
      </Section>
      <Spacer y={6} />
      <Section>
        <Community />
      </Section>
      <Spacer y={4} />
    </>
  );
};

export default Home;
