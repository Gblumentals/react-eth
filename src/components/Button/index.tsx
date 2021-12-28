import useStyles from './style';
import React from 'react';
import { Button as MuiButton } from '@material-ui/core';

const Button = (props: any) => {
  const classes = useStyles();

  return (
    <div className={classes.buttonWrapper}>
      <MuiButton classes={{root: classes.root}}{...props}>
        {props.children}
      </MuiButton>
    </div>
  );
}

export default Button
