// To run: 
// npx hardhat run scripts/deploy.js

// To run with specific network:
// npx hardhat run scripts/deploy.js --network <NETWORK NAME>

const { ethers } = require("hardhat");

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log('----deploying----')
  const simpleStorage = await SimpleStorageFactory.deploy();
  // await simpleStorage.deployed();
  console.log(simpleStorage)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
