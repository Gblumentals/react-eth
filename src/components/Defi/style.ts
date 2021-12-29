import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto'
  },
  paper: {
    display: 'flex',
    // backgroundColor: theme.palette.primary.light,
    height: 'calc( 100vh - 200px )',
    width: 'calc( 100vw - 100px )'
  },
  balanceWrapper: {
    margin: 'auto',
    fontSize: 24,
    color: theme.palette.primary.dark
  }
}));

export default useStyles
