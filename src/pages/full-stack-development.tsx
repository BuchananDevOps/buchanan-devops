import { FullStackHero, IntroCards, Process } from '@components';
import { NextPage } from 'next';

const FullStackDevelopment: NextPage = () => {
  return (
    <>
      <FullStackHero />
      <Process />
      <IntroCards />
    </>
  );
};

export default FullStackDevelopment;
