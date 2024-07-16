window.__RUNTIME_CONFIG__ = {
  CHAINBRIDGE: {
    chains: [
      {
        domainId: 0,
        networkId: 97,
        name: "BSC",
        decimals: 18,
        bridgeAddress: "0x85E7a2b99419e3E12a38D78205d8C42cec8a994c",
        erc20HandlerAddress: "0x235ee4e4EBfc4d97BA5E19F943157a0518C3F40A",
        rpcUrl: "https://bsc-testnet-rpc.publicnode.com",
        startBlock: 42139685,
        type: "Ethereum",
        nativeTokenSymbol: "BNB",
        tokens: [
          {
            address: "0xb19D8fB0c5519280Fe9F1A8F1C521eb663D272b0",
            name: "Bridged Cloud",
            symbol: "CLD",
            imageUri: "ETHIcon",
            resourceId:
              "0x0000000000000000000000003c0fcb54714037e3ba2cd125c2a3127071a936e2",
          },
        ],
      },
      {
        domainId: 1,
        networkId: 799,
        name: "Rupaya",
        decimals: 18,
        bridgeAddress: "0xb19D8fB0c5519280Fe9F1A8F1C521eb663D272b0",
        erc20HandlerAddress: "0xB3af738AB8524cb8828c8b738ACA7f6969118417",
        rpcUrl: "https://scan.testnet.rupaya.io",
        type: "Ethereum",
        nativeTokenSymbol: "RUPX",
        tokens: [
          {
            address: "0x3c0FCb54714037e3Ba2cd125c2A3127071A936E2",
            name: "Cloud",
            symbol: "CLD",
            imageUri: "WETHIcon",
            resourceId:
              "0x0000000000000000000000003c0fcb54714037e3ba2cd125c2a3127071a936e2",
          },
        ],
      },
    ],
  },
};
