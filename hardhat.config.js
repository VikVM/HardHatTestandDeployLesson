require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("hardhat-gas-reporter");

const BNBT_PRIVATE_KEY = process.env.BNBT_PRIVATE_KEY;
const BNBT_RPC_URL = process.env.BNBT_RPC_URL;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    BNBT: {
      url: BNBT_RPC_URL,
      accounts: [BNBT_PRIVATE_KEY],
      chainId: 97,
    },
  },
  gasReporter: {
    enabled: true,
  },
  solidity: "0.8.18",
};
