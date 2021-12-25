import React from 'react';
import './Page.css';
import useEther from '../../hooks/useEther'

import Button from '@material-ui/core/Button';


const Page = () => {

  const eth = useEther()

  return (
    <div className="Page">
      <Button variant="contained" onClick={() => { console.log(eth) }} >Log in</Button>
    </div>
  );
}

export default Page;
