import { FullStackHero, Pricing, DemoCanvas, Process } from '@components';
import { NextPage } from 'next';

const FullStackDevelopment: NextPage = () => {
  return (
    <>
      <FullStackHero />
      <Pricing />
      
      <Process />
    </>
  );
};

export default FullStackDevelopment;
