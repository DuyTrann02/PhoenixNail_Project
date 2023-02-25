import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Sửa móng(nhặt da - dũa form)','','50k/bộ'),
  createData('Ngâm chân muối thảo dược + chà gót','', '50k/1 lần'),
  createData('Sơn gel(Bao gồm nhặt da','', '70k/bộ'),
  createData('Sơn gel ombre','', '120k/bộ'),
  createData('Vẽ design thêm','', '10k/ngón'),
  createData('Phá bột cũ từ tiệm khác','', '30k'),
];



export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{height:'30vh',overflowY:'scroll'}}>
      <Table  aria-label="simple table">
        <TableHead>
         
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow 
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      
    </TableContainer>
  );
}
