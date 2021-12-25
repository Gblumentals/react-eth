import { ethers } from 'ethers';

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

  const getBalance = async() => {
    let balance = await provider.getBalance(wallet);
    balance = ethers.utils.formatEther(balance);
    return balance
  }

  const getBlockNumber = async() => {
    return await provider.getBlockNumber()
  }

  const getGasPrice = async() => {
    return await provider.getGasPrice()
  }

  const getTransaction = async(transactionHash: string) => {
    return await provider.getTransaction(transactionHash)
  }

  const getTransactionReceipt = async(transactionHash: string) => {
    return await provider.getTransactionReceipt(transactionHash)
  }

  const eraseProvider = () => {
    provider = null;
    return true;
  }

  return {
    eraseProvider,
    getProvider,
    getWallet,
    getSigner,
    setProvider,
    getBalance,
    getBlockNumber,
    getGasPrice,
    getTransaction,
    getTransactionReceipt
  }
};

export default ether();
