import {
  IntroDesignSection,
  IntroHero,
  IntroDevelopSection,
  IntroDeploymentSection,
} from '@components';
import { NextPage } from 'next';

const DevOps: NextPage = () => {
  return (
    <>
      <IntroHero />
      <IntroDesignSection />
      <IntroDevelopSection />
      <IntroDeploymentSection />
    </>
  );
};

export default DevOps;
