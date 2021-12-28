import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    padding: 8,
  },
  paper: {
    display: 'flex',
    backgroundColor: theme.palette.primary.light,
    height: 400,
    width: 800
  },
  balanceWrapper: {
    margin: 'auto',
    fontSize: 24,
  }
}));

export default useStyles
