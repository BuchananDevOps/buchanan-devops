import React from 'react';
import { Container } from '@nextui-org/react';
import { Head, Footer } from '@components';
import Navbar from './navbar';

export interface Props {
  tag?: string;
  slug?: string;
}

const DefaultLayout: React.FC<React.PropsWithChildren<Props>> = ({
  children,
}) => {
  return (
    <div id="app-container">
      <Head />
      <Navbar />

      <Container
        alignContent="space-between"
        as="main"
        className="main-container"
        css={{
          position: 'relative',
          pt: '$$notifyBannerHeight', // only when the notify banner is visible
          minHeight: '100vh',
          '@mdMax': {
            overflowX: 'hidden',
          },
        }}
        display="flex"
        id="main-container"
        lg={true}
      >
        {children}
        <Footer />
      </Container>
    </div>
  );
};

export default DefaultLayout;
