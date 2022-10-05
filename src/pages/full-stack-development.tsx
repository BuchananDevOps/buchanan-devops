import { FullStackHero, DemoCanvas, Process, ServiceProviders } from '@components';
import { NextPage } from 'next';

const FullStackDevelopment: NextPage = () => {
  return (
    <>
      <FullStackHero />
      <ServiceProviders />
      <Process />
    </>
  );
};

export default FullStackDevelopment;
