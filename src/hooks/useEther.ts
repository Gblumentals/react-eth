import { ethers } from "ethers";

const useEther = () => {

  if ((<any>window).ethereum === undefined) {
    new ethers.providers.Web3Provider((<any>window).ethereum)
  }



  const signer = () => {
    console.log("useEther")
  }

  return { signer }
}

export default useEther
