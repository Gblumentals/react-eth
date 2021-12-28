import useStyles from './style';


import { DataGrid } from '@material-ui/data-grid';
import Paper from '@material-ui/core/Paper';


const columns = [
  { field: 'id', headerName: 'Nonce', width: 90 },
  { field: 'nonce', headerName: 'Nonce', width: 90 },
  {
    field: 'hash',
    headerName: 'Hash',
    width: 150,
  },
  {
    field: 'block',
    headerName: 'Block',
    width: 150,
  },
  {
    field: 'from',
    headerName: 'From',
    width: 150,
  },
  {
    field: 'to',
    headerName: 'To',
    width: 150,
  },
  {
    field: 'value',
    headerName: 'Value',
    width: 150,
  }
];


type Props = {
  history: Object[]
}

const History = (props: Props) => {
  const classes = useStyles()

  const rows = props.history.map((h, i) => {
    return {...h, id:i}
  })

  return (
    <Paper elevation={3} classes={{root: classes.paper}}>
      <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      checkboxSelection
      disableSelectionOnClick
      />
    </Paper>
  );
}

export default History;
