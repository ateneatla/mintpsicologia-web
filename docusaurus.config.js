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
            title: 'Contenido',
            items: [
              {
                label: 'la psicóloga',
                to: '/la-psicologa',
              },
              {
                label: 'los pacientes',
                to: '/los-pacientes',
              },
            ],
          },
          {
            title: 'Redes sociales',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/mintpsicologia/',
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
