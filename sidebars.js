/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  learnSidebar: [
    {
      type: 'category',
      label: 'Sui',
      items: [
        'learn/about-sui/about-sui',
        'learn/about-sui/why-move',
        'learn/about-sui/how-sui-move-differs',
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: false,
      items: [
        {
          type: 'link',
          label: 'Sui Core Concepts',
          href: '/objects',
        },
        {
          type: 'link',
          label: 'Connect to Sui',
          href: '/connect-to-a-network',
        },
        {
          type: 'link',
          label: 'Move Quickstart',
          href: '/about-sui-move',
        },
        {
          type: 'link',
          label: 'Tic Tac Toe in Move',
          href: '/tutorials',
        },
        {
          type: 'link',
          label: 'Running a Node on Sui',
          href: '/full-node',
        },
        {
          type: 'link',
          label: 'Sui Economics',
          href: '/sui-token',
        },
      ],
    },
  ],
  buildSidebar: [
    {
      type: 'category',
      label: 'Quickstart',
      items: [
        'build/quickstart/about',
        'build/quickstart/examples',
        'build/quickstart/tutorials',
        ],
    },
    {
      type: 'category',
      label: 'Environment setup',
      items: [
        'build/setup/connect-to-a-network',
        'build/setup/faucet',
        'build/setup/local-network',
        'build/setup/gas-changes',
        'build/setup/object-display-standard',
        {
          type: 'category',
          label: 'Setup the CLI',
          items: [
            'build/setup/cli/install-sui',
            'build/setup/cli/client-cli',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Smart Contracts with Move',
      items: [
        'build/create-smart-contracts/write-move-packages',
        'build/create-smart-contracts/build-and-test',
        'build/create-smart-contracts/debug-and-publish',
        'build/create-smart-contracts/move-toml',
        'build/create-smart-contracts/move-lock',
        'build/create-smart-contracts/time',
        'build/create-smart-contracts/upgrade-packages',
        'build/create-smart-contracts/custom-upgrade-policies',
        'build/create-smart-contracts/sui-move-library',
        'build/create-smart-contracts/the-move-book',      
      ],
    },
    {
      type: 'category',
      label: 'Program With Objects',
      items: [
        'build/program-with-objects/object-basics',
        'build/program-with-objects/using-objects',
        'build/program-with-objects/immutable-objects',
        'build/program-with-objects/object-wrapping',
        'build/program-with-objects/dynamic-fields',
        'build/program-with-objects/collections',
      ],
    }
  ],
  referenceSidebar: [
    {
      type: 'category',
      label: 'Sui Framework',
      items: [
        'reference/sui-framework/sui-framework-reference',
        'reference/sui-framework/exchange-integration-guide',
        'reference/sui-framework/sui-security',
        'reference/sui-framework/sui-compared',
        'reference/sui-framework/sui-glossary',
      ],
    },
    {
      type: 'category',
      label: 'Core concepts',
      items: [
        'reference/core-concepts/objects',
        'reference/core-concepts/object-and-package-versioning',
        'reference/core-concepts/transactions',
        'reference/core-concepts/sponsored-transactions',
        'reference/core-concepts/single-writer-apps',
        'reference/core-concepts/validators',
        'reference/core-concepts/consensus-engine',
        'reference/core-concepts/event-query-and-subscription',
        'reference/core-concepts/programmable-tx-blocks',
      ],
    },
    {
      type: 'category',
      label: 'Economics',
      items: [
        'reference/economics/sui-token',
        'reference/economics/gas-pricing',
        'reference/economics/gas-in-sui',
        'reference/economics/sui-storage-fund',
        'reference/economics/proof-of-stake',
        'reference/economics/tokenomics-whitepaper',
      ],
    },
    {
      type: 'category',
      label: 'Cryptography',
      items: [
        'reference/cryptography/keys-and-addresses',
        'reference/cryptography/intent-signing',
        'reference/cryptography/offline-signing',
        'reference/cryptography/multisig',
      ],
    },
    {
      type: 'category',
      label: 'JSON-RPC',
      items: [
        'reference/json-rpc/sui-json-format',
        'reference/json-rpc/sui-json-rpc',
        'reference/json-rpc/json-rpc-api',
      ],
    },
    {
      type: 'category',
      label: 'SDKs',
      items: [
        'reference/sdk/rust-sdk',
        'reference/sdk/ts-js-sdk',
      ],
    },
  ],
  contributeSidebar: [
    {
      type: 'category',
      label: 'Contribute',
      items: [
        'contribute/improve-documentation',
        'contribute/contribute-to-sui-repos',
        'contribute/submit-a-sip',
        'contribute/localize-sui-docs',
        'contribute/code-of-conduct',
        'contribute/contribution-process',
      ],
    },
    {
      type: 'category',
      label: 'Run a node on Sui',
      items: [
        'contribute/nodes/full-node',
        'contribute/nodes/validator',
        'contribute/nodes/database-snapshots',
        'contribute/nodes/logging',
      ],
    },
  ],
};

module.exports = sidebars;
