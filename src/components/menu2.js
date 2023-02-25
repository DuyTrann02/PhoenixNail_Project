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


const noiMong = [
  createData('Móng úp','', '150k/bộ'),
  createData('Nối móng đắp gel','', '170k/bộ'),
  createData('Nối móng đắp bột','', '180k-200k/bộ'),
  createData('Fill bột', '','150k/bộ'),
  createData('Đắp bột màu Ombre','', '200-250k/bộ'),
  createData('Design móng ẩn bột hoặc gel','', '10-20k/ngón'),
  createData('Đắp hoa bột','', '30-50k/bông'),
  createData('Đính đá Xhb cao cấp','', '1-3k/viên'),
  createData('Đính đá Swa cao cấp','', '3-10k/viên'),
  createData('Đính đá chân bằng - khối', '','15-70k/viên'),
]

export default function BasicTable2() {
  return (
    <TableContainer component={Paper} sx={{height:'30vh',overflowY:'scroll'}}>
      <Table sx={{  }} aria-label="simple table">
        <TableHead>
           
        </TableHead>
        <TableBody>
          {noiMong.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
