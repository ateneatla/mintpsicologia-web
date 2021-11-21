// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mintpsicología',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ateneatla', // Usually your GitHub org/user name.
  projectName: 'mintpsicologia-web', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  url: 'https://www.mintpsicologia.es',
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
          blogSidebarTitle: ' ',
          blogSidebarCount: 0
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/doctoralia.css'),
          ],
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
        blogSidebarTitle: ' ',
        blogSidebarCount: 0
      },
    ],
  ],

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: 'Mintpsicología',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/la-psicologa', label: 'la psicóloga', position: 'left'},
          {to: '/los-pacientes', label: 'los pacientes', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Redes sociales',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCtDk1OSzdKDlufwUd894dWA',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/mintpsicologia/',
              },
            ],
          },
          {
            title: ' ',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/MintPsicologia',
              },
              {
                label: 'Research gate',
                href: 'https://www.researchgate.net/profile/Maria-Lopez-Alonso',
              },
             ],
          },
          {
            title: ' ',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ateneatla/mintpsicologia-web',
              },
              {
                label: 'Esta web no usa cookies',
                href: 'https://www.cookieserve.com',
              },
             ],
          },
        ],
        copyright: `<span class="copyleft">©</span> ${new Date().getFullYear()}. All Rights Reversed.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
