import { ethers } from 'ethers';

const ether = () => {
  let web3Provider: any = null;
  let etherscanProvider: any = null;
  let wallet: any = null;
  let signer: any = null;


  const getWallet = () => wallet;
  const getSigner = () => signer;

  const setProviders = async() => {
    web3Provider = new ethers.providers.Web3Provider((window as any).ethereum, "any");

    await web3Provider.send("eth_requestAccounts", []);
    signer = await web3Provider.getSigner();
    wallet = await signer.getAddress();
    console.log("Account:", wallet);

    etherscanProvider = new ethers.providers.EtherscanProvider();


    return true;
  }

  const getBalance = async() => {
    let balance = await web3Provider.getBalance(wallet);
    balance = ethers.utils.formatEther(balance);
    return balance
  }

  const getBlockNumber = async() => {
    return await web3Provider.getBlockNumber()
  }

  const getGasPrice = async() => {
    return await web3Provider.getGasPrice()
  }

  const getTransaction = async(transactionHash: string) => {
    return await web3Provider.getTransaction(transactionHash)
  }

  const getTransactionReceipt = async(transactionHash: string) => {
    return await web3Provider.getTransactionReceipt(transactionHash)
  }

  const getHistory = async() => {
    return await etherscanProvider.getHistory(wallet);
  }

  return {
    getWallet,
    getSigner,
    setProviders,
    getBalance,
    getBlockNumber,
    getGasPrice,
    getTransaction,
    getTransactionReceipt,
    getHistory
  }
};

export default ether();
