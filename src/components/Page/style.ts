import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  button: {
    height: 40
  },
  buttonWrapper: {
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: 8,
    boxShadow: `-128px 0px 60px 100px ${theme.palette.primary.light}`
  },
  balanceWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex'
  }
}));

export default useStyles
