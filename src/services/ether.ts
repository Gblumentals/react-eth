import { ethers } from 'ethers';
import config from '../config';

const ether = () => {
  let provider: any = null;
  let wallet: any = null;
  let signer: any = null;

  const getProvider = () => provider;
  const getWallet = () => wallet;
  const getSigner = () => signer;

  const setProvider = async() => {
    provider = new ethers.providers.Web3Provider((window as any).ethereum, "any");

    await provider.send("eth_requestAccounts", []);
    signer = await provider.getSigner();
    wallet = await signer.getAddress();
    console.log("Account:", wallet);

    return true;
  }

  async function getBalance() {
    let balance = await provider.getBalance(wallet);
    balance = ethers.utils.formatEther(balance);
    return balance
  }

  const ereaseProvider = () => {
    provider = null;
    return true;
  }

  return {
    ereaseProvider,
    getProvider,
    getWallet,
    getSigner,
    setProvider,
    getBalance
  }
};

export default ether();
