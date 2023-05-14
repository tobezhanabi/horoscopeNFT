// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const horoscopeNFT = await hre.ethers.getContractFactory("horoscopeNFT");
  const horoscope = await horoscopeNFT.deploy();
  await horoscope.deployed();

  console.log(`♉♐ deployed horoscopeNFT to ${horoscope.address}`);
  const myAddress = "0xe6c3A14840419f9F1cC10E114BD47F7161bb66a5";
  console.log("horoscopeNFT deployed to:", horoscope.address);

  let txn = await horoscope.mintNFT(myAddress, "virgo");
  await txn.wait();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
