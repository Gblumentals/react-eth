import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  button: {
    height: 40
  },
  buttonWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    height: 80,
    marginTop: 'auto'
  },
  balanceWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex'
  }
}));

export default useStyles
