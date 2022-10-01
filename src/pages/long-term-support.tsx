import { Section } from '@primitives';
import { NextPage } from 'next';
import {
  SupportHero,
  FeaturesGrid,
  SupportContracts,
  LongTermSupportSection,
  SupportBanner,
} from '@components';
import supportContent from '../../content/support';
import { Spacer } from '@nextui-org/react';

const LongTermSupport: NextPage = () => {
  return (
    <>
      <SupportHero />

      <Section>
        <FeaturesGrid features={supportContent.supportFeatures} />
      </Section>
      <Section id="long-term-support">
        <LongTermSupportSection />
      </Section>
      <Section id="support-contracts">
        <SupportContracts />
      </Section>
      <Spacer y={6} css={{ '@xsMax': { mt: '$14' } }} />
      <Section id="support-banner">
        <SupportBanner />
      </Section>
    </>
  );
};

export default LongTermSupport;
