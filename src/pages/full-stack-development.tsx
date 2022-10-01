import { FullStackHero, Pricing, DemoCanvas, Process } from '@components';
import { NextPage } from 'next';

const FullStackDevelopment: NextPage = () => {
  return (
    <>
      <Pricing />
      <FullStackHero />
      <Process />
    </>
  );
};

export default FullStackDevelopment;
