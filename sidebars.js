/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  learnSidebar: [
    {
      type: 'category',
      label: 'Sui',
      items: [
        'learn/sui-overview/sui-overview',
        'learn/sui-overview/why-move',
        'learn/sui-overview/how-sui-move-differs',
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
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
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'learn/core-concepts/how-sui-works',
        'learn/core-concepts/objects',
        'learn/core-concepts/object-and-package-versioning',
        'learn/core-concepts/transactions',
        'learn/core-concepts/sponsored-transactions',
        'learn/core-concepts/single-writer-apps',
        'learn/core-concepts/validators',
        'learn/core-concepts/consensus-engine',
        'learn/core-concepts/event-query-and-subscription',
        'learn/core-concepts/programmable-tx-blocks',
      ],
    },
    {
      type: 'category',
      label: 'Economics',
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
      items: [
        'build/quickstart/about',
        'build/quickstart/examples',
        'build/quickstart/tutorials',
        ],
    },
    {
      type: 'category',
      label: 'Environment Setup',
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
        {
          type: 'link',
          label: 'Move Book',
          href: 'https://move-language.github.io/move/',
        },
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
        'reference/sui-framework/sui-bridging',
        'reference/sui-framework/sui-security',
        'reference/sui-framework/sui-compared',
        'reference/sui-framework/sui-glossary',
        'reference/sui-framework/research-papers',
      ],
    },
    {
      type: 'category',
      label: 'JSON-RPC',
      items: [
        'reference/json-rpc/json-rpc-api',
        'reference/json-rpc/sui-json-format',
        'reference/json-rpc/sui-json-rpc',
      ],
    },
    {
      type: 'category',
      label: 'SDKs',
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
      items: [
        'reference/sui-wallet-kit/introduction',
        'reference/sui-wallet-kit/getting-started',
        {
          type: 'category',
          label: 'API',
          items: [
            'reference/sui-wallet-kit/wallet-kit-provider',
            'reference/sui-wallet-kit/connect-button',
            'reference/sui-wallet-kit/use-wallet-kit',
          ],
        },
        {
          type: 'category',
          label: 'Advanced',
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
      items: [
        'reference/deepbook/design',
        {
          type: 'category',
          label: 'DeepBook SDK',
          items: [
            'reference/deepbook/trade-and-swap',
            'reference/deepbook/routing-a-swap',
            'reference/deepbook/query-the-pool',

          ],
        },
      ],
    },
  ],
  contributeSidebar: [
    {
      type: 'category',
      label: 'Contribute',
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
