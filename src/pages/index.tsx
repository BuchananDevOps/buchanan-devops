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
      <Section css={{ '@mdMax': { display: 'none' } }}>
        <DarkModeSection />
      </Section>
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
