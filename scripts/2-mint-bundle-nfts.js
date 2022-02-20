import { readFileSync } from "fs";
import { sdk } from "./helpers.js";

async function main () {
  const bundleModuleAddress = "0xda37114f2B4D9D93a03368CEa3617A839fD381F6";
  const bundleModule = sdk.getBundleModule(bundleModuleAddress)

  console.log('✅ Creating NFT batch ...')

  const created = await bundleModule.createAndMintBatch([
    {
      metadata: {
        name: "Random Car 1",
        description: 'a fancy blue car!',
        image: readFileSync('./assets/car1.jpg'),
        properties: {
          rarity: 'a bit rare',
          fanciness: 7
        }
      },
      supply: 50,
    },
    {
      metadata: {
        name: "Random Car 2",
        description: 'a fancy yellow car!',
        image: readFileSync('./assets/car2.jpg'),
        properties: {
          rarity: 'a bit rare',
          fanciness: 7
        }
      },
      supply: 50,
    },
    {
      metadata: {
        name: "Random Car 3",
        description: 'a fancy white car!',
        image: readFileSync('./assets/car3.jpg'),
        properties: {
          rarity: 'super rare!',
          fanciness: 10
        }
      },
      supply: 10,
    }
  ]);

  console.log("✅NFTs created!");
  console.log(JSON.stringify(created, null, 2))
}

try {
  await main()
} catch (error) {
  console.error("Error minting the NFTs", error);
  process.exit(1)
}