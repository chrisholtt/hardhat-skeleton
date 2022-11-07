const { expect, assert } = require("chai");
const { ethers, getSigner } = require('hardhat')

describe("SimpleStorage", function () {
  let simpleStorageFactory, simpleStorage
  const sendAmount = ethers.utils.parseEther("1");
  let deployer;


  beforeEach(async function () {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageFactory.deploy();
    deployer = (await ethers.getSigner()).address
  })

  it("Should start with 0", async function () {
    const currentValue = await simpleStorage.retrieve();
    assert.equal(currentValue, 0)
  })

  it("can change number", async function () {
    await simpleStorage.store(5);
    const currentValue = await simpleStorage.retrieve();
    assert.equal(currentValue, 5)
  })

  it("fails if you don't send enough", async function () {
    await expect(simpleStorage.fund()).to.be.revertedWith("Send more ether")
  })

  it("can get sender amount", async function () {
    await simpleStorage.fund({
      value: sendAmount
    })
    const res = await simpleStorage.payees(deployer);
    assert.equal(res.toString(), sendAmount.toString())
  })


})
