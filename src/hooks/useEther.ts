import { ethers } from "ethers";
import * as config from "../config.ts";

const useEther = () => {
  const provider = new ethers.providers.JsonRpcProvider(config.provider);
  const wallet = new ethers.Wallet(config.privatekey);
  const signer = wallet.connect(provider);


  if ((<any>window).ethereum === undefined) {
    new ethers.providers.Web3Provider((<any>window).ethereum)
  }

  const signer = () => {
    console.log("useEther")
  }

  return { signer }
}

export default useEther()
