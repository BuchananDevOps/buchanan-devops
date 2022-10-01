import React from 'react';
import { NextPage } from 'next';
import { debounce } from 'lodash';
import { NextRouter, Router } from 'next/router';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import NProgress from 'nprogress';
import PlausibleProvider from 'next-plausible';
import { AppInitialProps } from 'next/app';
import { NextComponent } from '@lib/types';
import { isProd } from '@utils/index';
import RouterEvents from '@lib/router-events';
import { lightTheme, darkTheme } from '../theme/shared';
import globalStyles from '../styles/globalStyles';
import DefaultLayout from '../layouts/default';
import { useAnalytics } from '@lib/analytics';
import { WagmiConfig, createClient, chain } from 'wagmi';
import { ConnectKitProvider, getDefaultClient } from 'connectkit';

const client = createClient(
  getDefaultClient({
    appName: 'Buchanan DevOps Web3 Portal',
    infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
    chains: [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  })
);

type AppPropsType<
  R extends NextRouter = NextRouter,
  P = {}
> = AppInitialProps & {
  Component: NextComponent<P>;
  router: R;
  __N_SSG?: boolean;
  __N_SSP?: boolean;
};

type AppProps<P = {}> = AppPropsType<Router, P>;

NProgress.configure({ parent: '#app-container' });

const start = debounce(NProgress.start, 100);

RouterEvents.on('routeChangeStart', start);
RouterEvents.on('routeChangeComplete', (url) => {
  console.log(`Changed to URL: ${url}`);
  start.cancel();
  NProgress.done();
});
RouterEvents.on('routeChangeError', () => {
  start.cancel();
  NProgress.done();
});

const Application: NextPage<AppProps<{}>> = ({ Component, pageProps }) => {
  globalStyles();
  useAnalytics();

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <PlausibleProvider domain="buchanandevops.com" enabled={isProd}>
          <WagmiConfig client={client}>
            <ConnectKitProvider
              options={{
                walletConnectName: 'QR Code Authentication',
                hideTooltips: true,
              }}
            >
              <DefaultLayout>
                <Component {...pageProps} />
              </DefaultLayout>
            </ConnectKitProvider>
          </WagmiConfig>
        </PlausibleProvider>
        <style global jsx>{`
          .noselect {
            -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
            -khtml-user-select: none; /* Konqueror HTML */
            -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
          }
        `}</style>
      </NextUIProvider>
    </NextThemesProvider>
  );
};

export default Application;
