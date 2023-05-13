const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Sui Documentation",
  tagline:
    "Sui is a next-generation smart contract platform with high throughput, low latency, and an asset-oriented programming model powered by Move",
  favicon: "img/favicon.ico",
  url: "https://sui-docs-sui-foundation.vercel.app",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
/*  i18n: {
    defaultLocale: "en",
    locales: [
      "en",
      "el",
      "fr",
      "ko",
      "tr",
      "vi",
      "zh-CN",
      "zh-TW",
    ],
  },*/

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/sui-foundation/sui-docs/tree/main/",
          lastVersion: "current",
          versions: {
            current: {
              label: "Latest",
              path: "/",
            },
          },
          onlyIncludeVersions: [
            "current",
            "1.0.0",
          ],
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleTagManager: {
          containerId: 'GTM-TTZ5J8V',
        },
      }),
    ],
  ],
  
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/og.jpg",
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: "Sui Documentation",
        logo: {
          alt: "Sui Docs Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "learn/about-sui/about-sui",
            label: "Learn",
          },
          {
            type: "doc",
            docId: "build/quickstart/about",
            label: "Build",
          },
          {
            type: "doc",
            docId: "reference/move-by-example/intro",
            label: "Reference",
          },
          {
            type: "doc",
            docId: "contribute/contribution-process",
            label: "Contribute",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
            dropdownActiveClassDisabled: true,
          },
/*          {
            type: "localeDropdown",
            position: "right",
          },*/
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Documentation",
            items: [
              {
                label: "Learn",
                href: "https://docs.sui.io/learn",
              },
              {
                label: "Build",
                href: "https://docs.sui.io/build",
              },
              {
                label: "Contribute",
                href: "https://docs.sui.io/contribute",
              },
              {
                label: "Reference",
                href: "https://docs.sui.io/reference",
              },
            ],
          },
          {
            title: "Resources",
            items: [
              {
                label: "Developer Portal",
                href: "https://sui.io/developers",
              },
              {
                label: "Developer Grants",
                href: "https://sui.io/developer-grants",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Forums",
                href: "https://forums.sui.io/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/SuiNetwork",
              },
              {
                label: "GitHub",
                href: "https://github.com/MystenLabs/sui",
              },
              {
              label: "Telegram",
              href: "https://t.me/+mODLY50r0BEyM2Ux",
              },
              {
                label: "Discord",
                href: "https://discord.gg/sui",
              },

            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Sui Foundation | Documentation distributed under <a href="https://github.com/sui-foundation/sui-docs/blob/main/LICENSE">CC BY 4.0</a>`
      },
      
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['rust'],
      },
    }),
};

module.exports = config;
