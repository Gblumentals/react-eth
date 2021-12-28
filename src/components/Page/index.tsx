import { useState } from 'react';
import useStyles from './style';
import ether from '../../services/ether'

import Button from '../Button';
import Header from '../Header';

const Page = () => {
  const classes = useStyles()

  return (
    <>
    <Header />
      <div className={classes.root}>
        <div className={classes.buttonWrapper}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => {
              console.log("Loggin in...", ether.setProviders())
            }}
          >
              Log in
          </Button>
          <Button
            variant="contained"
            color="primary"
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
            color="primary"
            className={classes.button}
            onClick={() => {
              ether.getBlockNumber().then((blockNumber) => {
                console.log("Current Block Number:", blockNumber)
              })
            }}
          >
            Log Current Block
          </Button>
        </div>
    </div>
  </>
  );
}

export default Page;
