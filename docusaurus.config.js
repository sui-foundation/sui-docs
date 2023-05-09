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
            type: "dropdown",
            label: "Build",
            items: [
              {
                type: "doc",
                docId: "build/quickstart/about",
                label: "Quickstart",
              },
              {
                type: "doc",
                docId: "build/setup/connect-to-a-network",
                label: "Environment Setup",
              },
              {
                type: "doc",
                docId: "build/create-smart-contracts/smart-contracts",
                label: "Smart Contracts with Move",
              },
              {
                type: "doc",
                docId: "build/program-with-objects/object-basics",
                label: "Program with Objects",
              },
            ]
          },
          {
            type: "dropdown",
            label: "Reference",
            items: [
              {
                type: "doc",
                docId: "reference/sui-framework/sui-framework-reference",
                label: "Sui Framework",
              },
              {
                type: "doc",
                docId: "reference/core-concepts/how-sui-works",
                label: "Core Concepts",
              },
              {
                type: "doc",
                docId: "reference/economics/sui-tokenomics",
                label: "Economics",
              },
              {
                type: "doc",
                docId: "reference/cryptography/keys-and-addresses",
                label: "Cryptography",
              },
              {
                type: "doc",
                docId: "reference/json-rpc/json-rpc-api",
                label: "JSON-RPC",
              },
              {
                type: "doc",
                docId: "reference/sdk/ts-js-sdk",
                label: "SDKs",
              },
              {
                type: "doc",
                docId: "reference/sui-wallet-kit/introduction",
                label: "Sui Wallet Kit",
              },
              {
                type: "doc",
                docId: "reference/deepbook/pools",
                label: "DeepBook",
              },
            ]
          },
          {
            type: "dropdown",
            label: "Contribute",
            items: [
              {
                type: "doc",
                docId: "contribute/improve-documentation",
                label: "Improve Documentation",
              },
              {
                type: "doc",
                docId: "contribute/nodes/full-node",
                label: "Run a node on Sui",
              },
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
