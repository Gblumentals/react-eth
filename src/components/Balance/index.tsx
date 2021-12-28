import useStyles from './style';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

type Props = {
  balance: string
}

const Balance = (props: Props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper elevation={3} classes={{root: classes.paper}}>
        <Typography className={classes.balanceWrapper}>
          {props.balance}
        </Typography>
      </Paper>
    </div>
  );
}

export default Balance;
