import { createTheme } from '@nextui-org/react';

const fonts = {
  sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  mono: 'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace',
};

export const lightTheme = createTheme({
  type: 'light',
  className: 'nextui-docs-light',
  theme: {
    fonts,
    colors: {
      headerBackground: 'hsla(0,0%,100%,0.8)',
      menuBackground: 'rgba(255, 255, 255, 0.8)',
      headerIconColor: '$accents4',
      codeBackground: '#363449',
      codeComment: '$accents7',
      codeCopyIconColor: '$accents2',
      cardBackground: '$white',
      logoBackground: '$white',
      modalBackground: '$white',
      codeHighlight: 'hsl(243, 16%, 30%)',
      backgroundBlur: 'rgba(255, 255, 255, 0.3)',
      borderBlur: 'rgba(255, 255, 255, 0.05)',
      blockLinkColor: '#FF1CF7',
      blockLinkBackground: '$accents1',
      blockLinkHoverBackground: '#FFD1ED',
      violet: '#7928ca',
      artifactBorder: '#faeeff',
      featureP: '#888888',
      ctabgk: '#ffffff5c',
      iconBgk: 'linear-gradient(-90deg, rgba(50, 134, 241, .15) 0%, rgba(196, 58, 196, .15) 100%)',
      iconColor: 'linear-gradient(116deg, rgba(243, 36, 95, 1) 0%, rgba(196, 60, 130, 1) 100%)',
      rainbow: 'linear-gradient(90deg,#c42d01 0%,#d4542c 10%,#f2f240 20%,#67e217 30%,#00e754 40%,#4dba8b 50%,#00b4dc 60%,#00eef4 70%,#b100f2 80%,#c82f92 90%,#ed2290 95%,#c33126 100%)',
      radialGradient:
        'radial-gradient(circle, #c42d01 0%,#c42d01 10%,#fcf26e 40%,#00e754 60%,#00eef4 70%,#0070f3 100%)',
    },
  },
});

export const darkTheme = createTheme({
  type: 'dark',
  className: 'nextui-docs-dark',
  theme: {
    fonts,
    colors: {
      menuBackground: 'rgba(0,0,0,0.5)',
      headerBackground: 'rgba(0,0,0,0.5)',
      headerIconColor: '$accents8',
      codeBackground: '#111111',
      codeComment: '$accents6',
      codeCopyIconColor: '$accents7',
      codeHighlight: 'hsl(0, 0%, 15%)',
      cardBackground: '$accents0',
      logoBackground: 'rgba(0,0,0,0.1)',
      modalBackground: '#0a0a0a9e',
      backgroundBlur: 'rgba(255, 255, 255, 0.1)',
      borderBlur: 'rgba(255, 255, 255, 0.05)',
      blockLinkColor: '#FFA4E3',
      blockLinkBackground: '$accents1',
      blockLinkHoverBackground: '#55057A',
      violet: '#7928ca',
      artifactBorder: 'rgba(228,202,255,.25)',
      featureP: '#888888',
      ctabgk: '#1111117a',
      iconBgk: 'linear-gradient(-90deg, rgba(50, 134, 241, .15) 0%, rgba(196, 58, 196, .15) 100%)',
      iconColor: 'linear-gradient(116deg, rgba(243, 36, 95, 1) 0%, rgba(196, 60, 130, 1) 100%)',
      rainbow: 'linear-gradient(90deg,#c42d01 0%,#d4542c 10%,#f2f240 20%,#67e217 30%,#00e754 40%,#4dba8b 50%,#00b4dc 60%,#00eef4 70%,#b100f2 80%,#c82f92 90%,#ed2290 95%,#c33126 100%)',
      radialGradient:
        'radial-gradient(circle, #c42d01 0%,#c42d01 10%,#fcf26e 40%,#00e754 60%,#00eef4 70%,#0070f3 100%)',
    },
  },
});
