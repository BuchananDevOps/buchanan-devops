import type { VFC } from 'react';
import { SEO } from '@components';
import Script from 'next/script';
import { useTheme } from '@nextui-org/react';
import { renderSnippet, gtagUrl } from '@lib/analytics';

if (global.document) {
  const info = [`Let's make the web fun again 🚀`];

  for (const message of info) {
    // eslint-disable-next-line no-console
    console.log(message);
  }
}

const Head: VFC = () => {
  const { theme, isDark } = useTheme();
  return (
    <SEO>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
        key="viewport"
      />
      <meta
        content={
          isDark ? theme?.colors?.black?.value : theme?.colors?.white?.value
        }
        name="msapplication-TileColor"
      />
      <meta
        content={
          isDark ? theme?.colors?.black?.value : theme?.colors?.white?.value
        }
        name="theme-color"
      />
      <link href="/favicon.ico" rel="icon" />
      <link href="/manifest.json" rel="manifest" key="manifest" />
      <link
        href="/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link
        color={
          isDark ? theme?.colors?.black?.value : theme?.colors?.white?.value
        }
        href="/safari-pinned-tab.svg"
        rel="mask-icon"
      />
      <script async src={gtagUrl} />

      <script dangerouslySetInnerHTML={{ __html: renderSnippet() }} />
    </SEO>
  );
};

export default Head;
