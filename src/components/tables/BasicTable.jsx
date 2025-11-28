import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable({ headTable = [], contentTable = [] }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="dynamic table">

        {/* ---------- CABECERA DINÁMICA ---------- */}
        <TableHead>
          <TableRow>
            {headTable.map((head, index) => (
              <TableCell 
                key={index}
                align={index === 0 ? "left" : "center"}
                sx= {{color:'var(--text-grey)', fontWeight:'bold'}}
              >
                {head}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        {/* ---------- CONTENIDO DINÁMICO ---------- */}
        <TableBody>
          {contentTable.map((row, i) => (
            <TableRow key={i}>
              {row.map((cell, j) => (
                <TableCell 
                  key={j}
                  align={j === 0 ? "left" : "center"}
                  sx={{ fontWeight: "bold"  }}
                >
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
}