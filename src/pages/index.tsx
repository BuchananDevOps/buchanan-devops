import type { NextPage } from 'next';
import {
  Section,
  Community,
  InstallBanner,
  CustomThemesSection,
  ComparationSection,
  CustomizationSection,
  BuiltInStitchesSection,
  LastButNotLeastSection,
  Landing,
  ServiceCards,
} from '@components';
import { Spacer } from '@nextui-org/react';

const Home: NextPage = () => {
  return (
    <>
      <Landing />
      <ServiceCards />
      <CustomThemesSection />
      <CustomizationSection />
      <ComparationSection />
      <BuiltInStitchesSection />
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
