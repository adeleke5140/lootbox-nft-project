import { sdk } from "./helpers.js";

async function main () {
  const packModuleAddress = "0x35431987d83171290291643a27399aD151397772";
  const packModule = sdk.getPackModule(packModuleAddress)

  console.log("Opening the pack...");
  const opened = await packModule.open('0')
  console.log("✅Opened the pack!");
  console.log(opened)
}

try {
  await main()
} catch (err) {
  console.error("Error opening the pack", err)
  process.exit(1)
}