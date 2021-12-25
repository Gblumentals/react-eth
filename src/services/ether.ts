import { ethers } from 'ethers';
import config from '../config';

const ether = () => {
  let provider: any = null;
  let wallet: any = null;
  let signer: any = null;

  const getProvider = () => provider;
  const getWallet = () => wallet;
  const getSigner = () => signer;

  const setProvider = () => {
    provider = new ethers.providers.JsonRpcProvider(config.provider);
    wallet = new ethers.Wallet(config.privateKey);
    signer = wallet.connect(provider);

    return true;
  };

  const ereaseProvider = () => {
    provider = null;
    return true;
  }

  return {
    ereaseProvider,
    getProvider,
    getWallet,
    getSigner,
    setProvider
  }
};

export default ether();
