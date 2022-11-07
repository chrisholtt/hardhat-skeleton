const { task } = require('hardhat/config');

task("blockNumber", "prints the current block number").setAction(
    async (taskArgs, hre) => {
        const blockNumber = await hre.ethers.getBlockNumber();
        return `current block number: ${blockNumber}`;
    }
)