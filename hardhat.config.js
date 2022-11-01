require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;

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
};
