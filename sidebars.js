/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  learnSidebar: [
    {
      type: 'category',
      label: 'Sui Overview',
      link: {
        type: 'doc',
        id: 'learn/sui-overview/sui-overview',
      },
      items: [
        'learn/sui-overview/sui-overview',
        'learn/sui-overview/why-move',
        'learn/sui-overview/how-sui-move-differs',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      link: {
        type: 'doc',
        id: 'learn/core-concepts/how-sui-works',
      },
      items: [
        'learn/core-concepts/how-sui-works',
        'learn/core-concepts/objects',
        'learn/core-concepts/object-and-package-versioning',
        'learn/core-concepts/transactions',
        'learn/core-concepts/sponsored-transactions',
        'learn/core-concepts/single-writer-apps',
        'learn/core-concepts/validators',
        'learn/core-concepts/consensus-engine',
      ],
    },
    {
      type: 'category',
      label: 'Economics',
      link: {
        type: 'doc',
        id: 'learn/economics/sui-tokenomics',
      },
      items: [
        'learn/economics/sui-tokenomics',
        'learn/economics/sui-token',
        'learn/economics/gas-pricing',
        'learn/economics/gas-in-sui',
        'learn/economics/sui-storage-fund',
        'learn/economics/proof-of-stake',
        {
          type: 'link',
          label: 'Sui Whitepaper',
          href: 'https://github.com/MystenLabs/sui/blob/main/doc/paper/tokenomics.pdf/',
        },
      ],
    },
    {
      type: 'category',
      label: 'Cryptography',
      link: {
        type: 'doc',
        id: 'learn/cryptography/cryptography',
      },
      items: [
        'learn/cryptography/cryptography',
        'learn/cryptography/keys-and-addresses',
        'learn/cryptography/signatures',
        'learn/cryptography/multisig',
        'learn/cryptography/offline-signing',
        'learn/cryptography/intent-signing',
        'learn/cryptography/schemes',
        'learn/cryptography/hashing',
        'learn/cryptography/groth16',
        'learn/cryptography/ecvrf',
      ],
    },
  ],
  examplesSidebar: [
    'examples/intro',
    {
      type: 'category',
      label: 'Sui Move Basics',
      link: {
        type: 'doc',
        id: 'examples/movetoml',
      },
      items: [
        'examples/movetoml',
        'examples/init',
        'examples/entry-functions',
        'examples/strings',
        'examples/shared-objects',
        'examples/transferring-objects',
        'examples/custom-transfer',
        'examples/events',
        'examples/otw',
        'examples/publisher',
        'examples/object-display',
      ],
    },
    {
      type: 'category',
      label: 'Patterns',
      link: {
        type: 'doc',
        id: 'examples/capability',
      },
      items: [
        'examples/capability',
        'examples/witness',
        'examples/transferrable-witness',
        'examples/hot-potato',
        'examples/id-pointer',
      ],
    },
    {
      type: 'category',
      label: 'Samples',
      link: {
        type: 'doc',
        id: 'examples/create-an-nft',
      },
      items: [
        'examples/create-an-nft',
        'examples/create-a-coin',
      ],
    },
    'examples/additional-resources',
  ],
  buildSidebar: [
    {
      type: 'category',
      label: 'Quickstart',
      link: {
        type: 'doc',
        id: 'build/quickstart/about',
      },
      items: [
        'build/quickstart/about',
        'build/quickstart/examples',
        'build/quickstart/tutorials',
        ],
    },
    {
      type: 'category',
      label: 'Environment Setup',
      link: {
        type: 'doc',
        id: 'build/setup/connect-to-a-network',
      },
      items: [
        'build/setup/connect-to-a-network',
        'build/setup/faucet',
        'build/setup/local-network',
        'build/setup/gas-changes',
        'build/setup/using-the-api',
        'build/setup/object-display-standard',
        {
          type: 'category',
          label: 'Setup the CLI',
          link: {
            type: 'doc',
            id: 'build/setup/cli/install-sui',
          },
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
      link: {
        type: 'doc',
        id: 'build/create-smart-contracts/smart-contracts',
      },
      items: [
        'build/create-smart-contracts/smart-contracts',
        'build/create-smart-contracts/write-move-packages',
        'build/create-smart-contracts/build-and-test',
        'build/create-smart-contracts/debug-and-publish',
        'build/create-smart-contracts/move-toml',
        'build/create-smart-contracts/move-lock',
        'build/create-smart-contracts/time',
        'build/create-smart-contracts/upgrade-packages',
        'build/create-smart-contracts/custom-upgrade-policies',
        'build/create-smart-contracts/dependency-overrides',
        'build/create-smart-contracts/sui-move-library',
      ],
    },
    {
      type: 'category',
      label: 'Program With Objects',
      link: {
        type: 'doc',
        id: 'build/program-with-objects/object-basics',
      },
      items: [
        'build/program-with-objects/object-basics',
        'build/program-with-objects/using-objects',
        'build/program-with-objects/immutable-objects',
        'build/program-with-objects/object-wrapping',
        'build/program-with-objects/dynamic-fields',
        'build/program-with-objects/collections',
      ],
    },
    'build/programmable-tx-blocks',
  ],
  referenceSidebar: [
    {
      type: 'category',
      label: 'JSON-RPC API',
      link: {
        type: 'doc',
        id: 'reference/json-rpc/json-rpc-api',
      },
      items: [
        'reference/json-rpc/json-rpc-api',
        'reference/json-rpc/json-rpc-format',
      ],
    },
    {
      type: 'category',
      label: 'Sui Framework',
      link: {
        type: 'doc',
        id: 'reference/sui-framework/sui-framework-reference',
      },
      items: [
        'reference/sui-framework/sui-framework-reference',
        'reference/sui-framework/exchange-integration-guide',
        'reference/sui-framework/sui-bridging',
        'reference/sui-framework/sui-security',
        'reference/sui-framework/sui-compared',
        'reference/sui-framework/sui-glossary',
        'reference/sui-framework/research-papers',
      ],
    },
    {
      type: 'category',
      label: 'SDKs',
      link: {
        type: 'doc',
        id: 'reference/sdk/rust-sdk',
      },
      items: [
        'reference/sdk/rust-sdk',
        {
          type: 'link',
          label: 'Typescript/Javascript SDK',
          href: 'https://github.com/MystenLabs/sui/tree/main/sdk/typescript',
        },      
      ],
    },
    {
      type: 'category',
      label: 'Sui Wallet Kit',
      link: {
        type: 'doc',
        id: 'reference/sui-wallet-kit/introduction',
      },
      items: [
        'reference/sui-wallet-kit/introduction',
        'reference/sui-wallet-kit/getting-started',
        {
          type: 'category',
          label: 'API',
          link: {
            type: 'doc',
            id: 'reference/sui-wallet-kit/wallet-kit-provider',
          },
          items: [
            'reference/sui-wallet-kit/wallet-kit-provider',
            'reference/sui-wallet-kit/connect-button',
            'reference/sui-wallet-kit/use-wallet-kit',
          ],
        },
        {
          type: 'category',
          label: 'Advanced',
          link: {
            type: 'doc',
            id: 'reference/sui-wallet-kit/programmatic-connection',
          },
          items: [
            'reference/sui-wallet-kit/programmatic-connection',
            'reference/sui-wallet-kit/wallet-adapters',
            'reference/sui-wallet-kit/wallet-kit-core',
            'reference/sui-wallet-kit/wallet-standard',

          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'DeepBook',
      link: {
        type: 'doc',
        id: 'reference/deepbook/design',
      },
      items: [
        'reference/deepbook/design',
        {
          type: 'category',
          label: 'SDK',
          link: {
            type: 'doc',
            id: 'reference/deepbook/trade-and-swap',
          },
          items: [
            'reference/deepbook/trade-and-swap',
            'reference/deepbook/routing-a-swap',
            'reference/deepbook/query-the-pool',

          ],
        },
      ],
    },
    'reference/event-query-and-subscription',
  ],
  contributeSidebar: [
    {
      type: 'category',
      label: 'Contribute',
      link: {
        type: 'doc',
        id: 'contribute/contribution-process',
      },
      items: [
        'contribute/contribution-process',
        'contribute/contribute-to-sui-repos',
        {
          type: 'link',
          label: 'Submit a SIP',
          href: 'https://sips.sui.io',
        },
        'contribute/localize-sui-docs',
        'contribute/code-of-conduct',
        'contribute/style-guide',
      ],
    },
    {
      type: 'category',
      label: 'Run a Node on Sui',
      link: {
        type: 'doc',
        id: 'contribute/nodes/full-node',
      },
      items: [
        'contribute/nodes/full-node',
        'contribute/nodes/validator',
        'contribute/nodes/database-snapshots',
        'contribute/nodes/observability',
      ],
    },
  ],
};

module.exports = sidebars;
