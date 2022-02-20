import ethers from "ethers";
import { sdk } from "./helpers.js";

async function main () {
  const packModuleAddress = "0x35431987d83171290291643a27399aD151397772"
  const packModule = sdk.getPackModule(packModuleAddress)

  console.log("Depositing Link...")

  const amount = ethers.utils.parseEther("2");

  await packModule.depositLink(amount)
  console.log("✅Deposited");

  const balance = await packModule.getLinkBalance()
  console.log(balance)
}

try {
  await main()
} catch (err) {
  console.error("❌Error depositing the LINK", err)
  process.exit(1)
}
