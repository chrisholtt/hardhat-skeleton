// To run: 
// npx hardhat run scripts/deploy.js

// To run with specific network:
// npx hardhat run scripts/deploy.js --network <NETWORK NAME>

// The task folder was created by myself to create hh tasks
// You need to also require the tasks in the hardhat config
// You can then get a list off the tasks by running npx hardhat

const { ethers, network } = require("hardhat");

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log('----deploying----')
  const simpleStorage = await SimpleStorageFactory.deploy();
  // await simpleStorage.deployed();
  console.log(simpleStorage)

  console.log(network.config);

  let txRes = await simpleStorage.store(10);
  // Waiting 1 block 
  await txRes.wait(1);
  const updatedNumber = await simpleStorage.retrieve()
  console.log(updatedNumber);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
