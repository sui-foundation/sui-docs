const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

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
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsed: false,
          editUrl: "https://github.com/sui-foundation/sui-docs/tree/main/",
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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",
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
            docId: "build/create-smart-contracts/move-toml",
            label: "Build",
          },
          {
            type: "doc",
            docId: "node/setup/install-sui",
            label: "Node",
          },
          {
            type: "doc",
            docId: "reference/sui-json-format",
            label: "Reference",
          },
          {
            type: "doc",
            docId: "contribute/improve-documentation",
            label: "Contribute",
          },
          {
            type: "dropdown",
            docId: "More",
            label: "More",
            items: [
              {
                type: "doc",
                docId: "other/economics/sui-token",
                label: "Economy",
              },
              {
                type: "doc",
                docId: "other/cryptography/keys-and-addresses",
                label: "Cryptography",
              }
            ]
          },
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
        copyright: `Copyright © ${new Date().getFullYear()} Sui`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['rust'],
      },
    }),
};

module.exports = config;
