import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto'
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
    color: theme.palette.primary.dark
  }
}));

export default useStyles
