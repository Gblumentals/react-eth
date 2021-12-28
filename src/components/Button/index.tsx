import useStyles from './style';
import React from 'react';
import { Button as MuiButton } from '@material-ui/core';

const Button = (props: any) => {
  const classes = useStyles();

  return (
    <MuiButton classes={{root: classes.root}}{...props}>
      {props.children}
    </MuiButton>
  );
}

export default Button
