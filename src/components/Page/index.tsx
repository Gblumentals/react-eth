import { useState } from 'react';
import useStyles from './style';
import ether from '../../services/ether'

import Button from '@material-ui/core/Button';
import Balance from '../Balance';

const Page = () => {
  const classes = useStyles()
  const [balance, setBalance] = useState('')

  return (
    <div className={classes.root}>
      <div className={classes.balanceWrapper}>
        <Balance balance={balance} />
      </div>
      <div className={classes.buttonWrapper}>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => {
            console.log("Loggin in...", ether.setProviders())
          }}

        >
            Log in
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => {
            ether.getGasPrice().then((price) => {
              console.log("Gas:", price)
            })
          }}
        >
          Log Gas Price
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => {
            ether.getBlockNumber().then((blockNumber) => {
              console.log("Current Block Number:", blockNumber)
            })
          }}
        >
          Log Current Block
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => {
            console.log("Wallet:", ether.getWallet())
            ether.getBalance().then((balance) => {
              setBalance(balance)
            })
          }}
        >
          Get Balance
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => {
            console.log("Wallet:", ether.getWallet())
            ether.getHistory().then((history) => {
              console.log('history', history)
              setBalance(history)
            }).catch(e => console.log(e))
          }}
        >
          Get History
        </Button>
      </div>
  </div>
  );
}

export default Page;
