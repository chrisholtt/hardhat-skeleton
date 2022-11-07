require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
require('./tasks/blockNumber');
require('hardhat-gas-reporter')
require('solidity-coverage');

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || "https://eth-goerli";
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY || "0xkey";
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "key";

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    georli: {
      url: GOERLI_RPC_URL,
      accounts: [GOERLI_PRIVATE_KEY],
      chainId: 5
    }
  },
  solidity: "0.8.17",
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COINMARKETCAP_API_KEY
  }
};
