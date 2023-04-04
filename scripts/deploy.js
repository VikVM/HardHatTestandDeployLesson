const { ethers } = require("hardhat");

async function main() {
  const NFTFactory = await ethers.getContractFactory("Note");
  const contract = await NFTFactory.deploy();
  await contract.deployed();
  console.log(`Contract address: ${contract.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
