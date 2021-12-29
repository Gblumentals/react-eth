import useStyles from './style';


import { DataGrid } from '@material-ui/data-grid';
import Paper from '@material-ui/core/Paper';


const columns = [
  { field: 'id', headerName: 'Nonce', width: 90 },
  { field: 'name', headerName: 'Name', width: 90 },
  {
    field: 'category',
    headerName: 'Category',
    width: 150,
  },
  {
    field: 'chain',
    headerName: 'Chain',
    width: 150,
  },
  {
    field: 'value',
    headerName: 'TVL (USD)',
    width: 150,
    valueGetter: (params: any) => {
      return params.value.total.USD.value
    }
  }
];


type Props = {
  projects: Object[]
}

const Defi = (props: Props) => {
  const classes = useStyles()

  return (
    <Paper elevation={3} classes={{root: classes.paper}}>
      <DataGrid
      rows={props.projects}
      columns={columns}
      pageSize={10}
      checkboxSelection
      disableSelectionOnClick
      />
    </Paper>
  );
}

export default Defi;
