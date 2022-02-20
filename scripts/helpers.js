import { ThirdwebSDK } from "@3rdweb/sdk"
import ethers from "ethers"

import dotenv from "dotenv"
dotenv.config();

const walletPrivateKey = process.env.WALLET_PRIVATE_KEY;

if (!walletPrivateKey) {
  console.error("😢Wallet private key missing!")
  process.exit(1)
}

export const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    process.env.WALLET_PRIVATE_KEY,
    ethers.getDefaultProvider("https://winter-icy-sun.matic-testnet.quiknode.pro/f36aa318f8f806e4e15a58ab4a1b6cb9f9e9d9b9/")
  ),
);


const appAddress = "0x8c0D153e5D5Ad1054Cf7bC61e7009C0E0f9D2C5a";

export async function getApp () {
  const app = sdk.getAppModule(appAddress)
  return app;
}