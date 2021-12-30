import { useState } from 'react';
import useStyles from './style';
import ether from '../../services/ether'
import defi from '../../services/defi'

import Button from '../Button';
import Balance from '../Balance';
import Header from '../Header';
import History from '../History';
import Defi from '../Defi';

const Page = () => {
  const classes = useStyles()

  const [balance, setBalance] = useState('')
  const [history, setHistory] = useState([])
  const [projects, setProjects] = useState([])

  return (
    <>
    <Header />
      <div className={classes.root}>
        <div className={classes.buttonWrapper}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              console.log("Loggin in...", ether.setProviders())
            }}
          >
              Log in
          </Button>
          <Button
            variant="contained"
            color="primary"
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
            color="primary"
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
          color="primary"
          onClick={() => {
            console.log("Wallet:", ether.getWallet())
            ether.getBalance().then((balance) => {
              setBalance(JSON.stringify(balance))
            })
          }}
        >
          Get Balance
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            console.log("Wallet:", ether.getWallet())
            ether.getHistory().then((history) => {
              console.log('history', history)
              setHistory(history)
            }).catch(e => console.log(e))
          }}
        >
          Get History
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.buttonWrapper}
          onClick={() => {
            defi.setProjects().then((defiProjects) => {
              console.log('DeFi projects', defiProjects)
              setProjects(defiProjects)
            }).catch(e => console.log(e))
          }}
        >
          Get DeFi
        </Button>
        </div>
        <div className={classes.balanceWrapper}>
          { balance && (
            <Balance balance={balance} />
          )}
          { history.length && (
            <History history={history} />
          )}
          { projects.length && (
            <Defi projects={projects} />
          )}

        </div>
    </div>
  </>
  );
}

export default Page;
