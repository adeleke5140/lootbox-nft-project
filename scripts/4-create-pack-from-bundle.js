import { readFileSync } from "fs";
import { sdk } from "./helpers.js";

async function main () {
  const bundleModuleAddress = "0xda37114f2B4D9D93a03368CEa3617A839fD381F6";
  const bundleModule = sdk.getBundleModule(bundleModuleAddress)

  const packModuleAddress = "0x35431987d83171290291643a27399aD151397772"
  const packModule = sdk.getPackModule(packModuleAddress)

  console.log("Getting all NFTs from bundle...");
  const nftsInBundle = await bundleModule.getAll();

  console.log("NFTs in bundle:");
  console.log(nftsInBundle)

  console.log("Creating a pack containing the NFTs from bundle...")

  const created = await packModule.create({
    assetContract: bundleModuleAddress,
    metadata: {
      name: "Fancy Cars Pack!",
      image: readFileSync("./assets/fancy-cars.jpg"),
    },
    assets: nftsInBundle.map(nft => ({
      tokenId: nft.metadata.id,
      amount: nft.supply
    }))
  })

  console.log("✅Pack Created!");
  console.log(created)
}

try {
  await main()
} catch (err) {
  console.error("Error in creating NFT pack from bundle:", err)
  process.exit(1)
}

