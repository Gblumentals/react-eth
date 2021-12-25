import './Page.css';
import ether from '../../services/ether'

import Button from '@material-ui/core/Button';

const Page = () => {

  return (
    <div className="Page">
      <Button
        variant="contained"
        onClick={() => {
          console.log("Loggin in...", ether.setProvider())
        }}
      >
          Log in
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          console.log("Provider:", ether.getProvider())
        }}
      >
        Log Provider
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          console.log("Signer:", ether.getSigner())
        }}
      >
        Log Signer
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          console.log("Wallet:", ether.getWallet())
        }}
      >
        Log Wallet
      </Button>
    </div>
  );
}

export default Page;
