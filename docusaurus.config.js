// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mintpsicología',
  baseUrl: '/mintpsicologia-web/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ateneatla', // Usually your GitHub org/user name.
  projectName: 'mintpsicologia-web', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  url: 'https://ateneatla.github.io',
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          path: './la-psicologa',
          routeBasePath: 'la-psicologa',
          editUrl:
            'https://github.com/ateneatla/mintpsicologia-web/edit/main/la-psicologa/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'pacientes',
        routeBasePath: 'los-pacientes',
        path: './los-pacientes',
        editUrl:
        'https://github.com/ateneatla/mintpsicologia-web/edit/main/los-pacientes/',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Mintpsicología',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/la-psicologa', label: 'la psicóloga', position: 'left'},
          {to: '/los-pacientes', label: 'los pacientes', position: 'left'},
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;