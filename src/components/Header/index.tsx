import useStyles from './style';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ether from '../../services/ether';

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            ETH REACT
          </Typography>
          <Button
            color="inherit"
            className={classes.loginButton}
            onClick={() => {
              console.log("Loggin in...", ether.setProviders())
            }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
