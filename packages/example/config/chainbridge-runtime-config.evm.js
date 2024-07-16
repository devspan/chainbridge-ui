window.__RUNTIME_CONFIG__ = {
  INDEXER__URL: "http://localhost:8000",
  CHAINBRIDGE: {
    chains: [
      {
        domainId: 0,
        networkId: 799,  // Rupaya testnet chain ID
        name: "Rupaya Testnet",
        decimals: 18,
        bridgeAddress: "0xb19D8fB0c5519280Fe9F1A8F1C521eb663D272b0",  // Replace with actual bridge address
        erc20HandlerAddress: "0xB3af738AB8524cb8828c8b738ACA7f6969118417",  // Replace with actual ERC20 handler address
        rpcUrl: "https://rpc.testnet.rupaya.io",
        startBlock: "1751700",
        type: "Ethereum",
        nativeTokenSymbol: "RUPX",
        tokens: [
          {
            address: "0x3c0FCb54714037e3Ba2cd125c2A3127071A936E2",  // CLD Token Address on Rupaya Testnet
            name: "CLOUD",
            symbol: "CLD",
            imageUri: "CLDIcon",  // Replace with actual image URI if needed
            resourceId: "0x0000000000000000000000003c0fcb54714037e3ba2cd125c2a3127071a936e2",  // Replace with actual resource ID
          },
        ],
      },
      {
        domainId: 1,
        networkId: 97,  // Binance testnet chain ID
        name: "Binance Testnet",
        decimals: 18,
        bridgeAddress: "0x85E7a2b99419e3E12a38D78205d8C42cec8a994c",  // Replace with actual bridge address
        erc20HandlerAddress: "0x235ee4e4EBfc4d97BA5E19F943157a0518C3F40A",  // Replace with actual ERC20 handler address
        rpcUrl: "https://bsc-testnet-rpc.publicnode.com",
        startBlock: 42139685,
        type: "Ethereum",
        nativeTokenSymbol: "BNB",
        tokens: [
          {
            address: "0xb19D8fB0c5519280Fe9F1A8F1C521eb663D272b0",  // Token Address on Binance Testnet
            name: "Bridged Cloud",
            symbol: "BCLD",
            imageUri: "BWRUPXIcon",  // Replace with actual image URI if needed
            resourceId: "0x0000000000000000000000003c0fcb54714037e3ba2cd125c2a3127071a936e2",  // Replace with actual resource ID
          },
        ],
      },
    ],
  },
};
