import React, { useState } from 'react';
import './Page.css';
import Window from '../Window'

import Button from '@material-ui/core/Button';

type Props = {
  text: string
}


const Page = (props: Props) => {
  const [isWindowOpen, setIsWindowOpen] = useState<boolean>(false)

  return (
    <div className="Page">
      Page {props.text}
      <Button variant="contained" onClick={() => { setIsWindowOpen(true) }} >Open</Button>

      { isWindowOpen && (
        <Window text={props.text} cb={() => { setIsWindowOpen(false) }}/>
      )}
    </div>
  );
}

export default Page;
