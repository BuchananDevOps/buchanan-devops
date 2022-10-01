export const devRoutes = [
  {
    label: 'DevOps',
    pages: [
      { title: 'Introduction', slug: 'devops/introduction' },
      { title: 'UI/UX', slug: 'devops/interface' },
      { title: 'Development', slug: 'devops/development' },
      { title: 'Production', slug: 'devops/production' },
      { title: 'Search Engine Optimization', slug: 'devops/seo' },
      { title: 'Supreme Support', slug: 'devops/support' },
    ],
  },

  {
    label: 'Getting Started',
    pages: [
      { title: 'Installation', slug: 'docs/installation' },
      { title: 'Styling', slug: 'docs/styling' },
      { title: 'Variants', slug: 'docs/variants' },
      { title: 'Responsive styles', slug: 'docs/responsive-styles' },
      { title: 'Overriding styles', slug: 'docs/overriding-styles' },
      { title: 'Composing components', slug: 'docs/composing-components' },
      { title: 'Framework agnostic API', slug: 'docs/framework-agnostic' },
    ],
  },

  {
    label: 'Configuration',
    pages: [
      { title: 'Theme tokens', slug: 'docs/tokens' },
      { title: 'Custom theming', slug: 'docs/theming' },
      { title: 'Breakpoints', slug: 'docs/breakpoints' },
      { title: 'Utils', slug: 'docs/utils' },
      { title: 'Server-side rendering', slug: 'docs/server-side-rendering' },
    ],
  },
];

export const allDocsRoutes = devRoutes.reduce((acc, curr) => {
  acc = [...acc, ...curr.pages];
  return acc;
}, []);
