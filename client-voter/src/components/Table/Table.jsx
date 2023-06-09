import './table.scss'
import TableMi from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Table = () => {

  const rows = [
    {
      id: 112233,
      product: 'Acer Nitro 5',
      img: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      customer: 'John Smmith',
      date: '1 March',
      amount: 785,
      method: 'Cash on Delivery',
      status: 'Aproved'
    },
    {
      id: 112234,
      product: 'Playstation 5',
      img: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      customer: 'John Smmith',
      date: '1 March',
      amount: 785,
      method: 'Cash on Delivery',
      status: 'Pending'
    }
  ]


  return (
    <TableContainer component={Paper} className='table'>
      <TableMi sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Tracking Id</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell component="th" scope="row" className='tableCell'>
                {row.id}
              </TableCell>
              <TableCell className='tableCell'>
                <div className="cellWrapper">
                  <img src={row.img} alt={row.product} />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className='tableCell'>{row.customer}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className='tableCell'> 
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableMi>
    </TableContainer>
  )
}

export default Table