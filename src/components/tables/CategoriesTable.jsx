import * as React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

/**
 * Obtiene el color para valores CPI/SPI
 * < 1 = rojo, = 1 = gris, > 1 = verde
 */
const getIndexColor = (value, threshold = 1) => {
  if (value < threshold) return '#d32f2f'; // Rojo
  if (value > threshold) return '#388e3c'; // Verde
  return '#666'; // Gris
};

/**
 * Obtiene el color para CV/SV
 * Negativo = rojo, 0 = gris, Positivo = verde
 */
const getVarianceColor = (value) => {
  if (typeof value === 'string') {
    if (value.startsWith('-')) return '#d32f2f'; // Rojo
    const numMatch = value.match(/[\d.]+/);
    if (numMatch && parseFloat(numMatch[0]) > 0) return '#388e3c'; // Verde
  }
  if (typeof value === 'number') {
    if (value < 0) return '#d32f2f';
    if (value > 0) return '#388e3c';
  }
  return '#666';
};

export default function CategoriesTable({ rows = [], ranges = {} }) {
  const defaultRanges = {
    CPI: 1,
    SPI: 1,
  };
  const mergedRanges = { ...defaultRanges, ...ranges };

  return (
    <TableContainer component={Paper} elevation={0}>
      <Table sx={{ minWidth: 500 }} aria-label="categories table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: '#666', fontWeight: 600, fontSize: '14px' }}>
              Categoría
            </TableCell>
            <TableCell align="center" sx={{ color: '#666', fontWeight: 600, fontSize: '14px' }}>
              CPI
            </TableCell>
            <TableCell align="center" sx={{ color: '#666', fontWeight: 600, fontSize: '14px' }}>
              SPI
            </TableCell>
            <TableCell align="center" sx={{ color: '#666', fontWeight: 600, fontSize: '14px' }}>
              CV
            </TableCell>
            <TableCell align="center" sx={{ color: '#666', fontWeight: 600, fontSize: '14px' }}>
              SV
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow 
              key={index}
              sx={{ 
                '&:last-child td, &:last-child th': { border: 0 },
                '& td': { py: 2.5, borderBottom: '1px solid #f0f0f0' },
              }}
            >
              <TableCell>
                <Typography sx={{ fontWeight: 600, color: '#333', fontSize: '15px' }}>
                  {row.categoria}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography 
                  sx={{ 
                    fontWeight: 600, 
                    fontSize: '15px',
                    color: getIndexColor(row.cpi, mergedRanges.CPI),
                  }}
                >
                  {typeof row.cpi === 'number' ? row.cpi.toFixed(2) : row.cpi}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography 
                  sx={{ 
                    fontWeight: 600, 
                    fontSize: '15px',
                    color: getIndexColor(row.spi, mergedRanges.SPI),
                  }}
                >
                  {typeof row.spi === 'number' ? row.spi.toFixed(2) : row.spi}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography 
                  sx={{ 
                    fontWeight: 600, 
                    fontSize: '15px',
                    color: getVarianceColor(row.cv),
                  }}
                >
                  {row.cv}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography 
                  sx={{ 
                    fontWeight: 600, 
                    fontSize: '15px',
                    color: getVarianceColor(row.sv),
                  }}
                >
                  {row.sv}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

CategoriesTable.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      categoria: PropTypes.string.isRequired,
      cpi: PropTypes.number.isRequired,
      spi: PropTypes.number.isRequired,
      cv: PropTypes.string.isRequired,
      sv: PropTypes.string.isRequired,
    })
  ),
  ranges: PropTypes.shape({
    CPI: PropTypes.number,
    SPI: PropTypes.number,
  }),
};
