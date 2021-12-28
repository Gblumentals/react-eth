import useStyles from './style';

import Paper from '@material-ui/core/Paper';

type Props = {
  balance: string
}

const Balance = (props: Props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper elevation={3} classes={{root: classes.paper}}>
        <div className={classes.balanceWrapper}>
          {props.balance}
        </div>
      </Paper>
    </div>
  );
}

export default Balance;
