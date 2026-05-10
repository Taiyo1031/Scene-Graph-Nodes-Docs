import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Scene Graph Nodes',
  tagline: 'Scene-level node graph documentation for Blender',
  favicon: 'img/favicon.svg',
  url: 'https://taiyo1031.github.io',
  baseUrl: '/Scene-Graph-Nodes-Docs/',
  organizationName: 'Taiyo1031',
  projectName: 'Scene-Graph-Nodes-Docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    localeConfigs: {
      en: {label: 'English', htmlLang: 'en-US'},
      ja: {label: '日本語', htmlLang: 'ja-JP'},
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          lastVersion: 'current',
          versions: {
            current: {
              label: '0.1.0',
              path: '/',
              banner: 'none',
              badge: true,
            },
          },
        },
        blog: false,
        pages: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/social-card.svg',
    navbar: {
      title: 'Scene Graph Nodes',
      logo: {alt: 'Scene Graph Nodes logo', src: 'img/logo.svg'},
      items: [
        {type: 'docsVersionDropdown', position: 'right'},
        {type: 'localeDropdown', position: 'right'},
        {href: 'https://github.com/Taiyo1031/Scene-Graph-Nodes', label: 'Add-on', position: 'right'},
        {href: 'https://github.com/Taiyo1031/Scene-Graph-Nodes-Docs', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Introduction', to: '/'},
            {label: 'Node Reference', to: '/nodes/input/object-input'},
            {label: 'Release Checklist', to: '/contributing/release-checklist'},
          ],
        },
        {
          title: 'Project',
          items: [
            {label: 'Add-on Repository', href: 'https://github.com/Taiyo1031/Scene-Graph-Nodes'},
            {label: 'Docs Repository', href: 'https://github.com/Taiyo1031/Scene-Graph-Nodes-Docs'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Taiyo Project. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
