import * as React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

/**
 * Determina el color basado en el valor y los rangos de referencia
 * @param {number} value - Valor a evaluar
 * @param {Object} range - Rangos de referencia { bad, neutral, good }
 * @param {boolean} invertScale - Si true, valores menores son mejores (para CV, SV)
 * @returns {string} - Color CSS
 */
const getValueColor = (value, range, invertScale = false) => {
  const { bad, good } = range;

  if (invertScale) {
    // Para CV y SV: valores negativos son malos, positivos son buenos
    if (value < bad) return '#f44336'; // Rojo
    if (value > good) return '#4caf50'; // Verde
    return '#616161'; // Gris oscuro
  } else {
    // Para CPI y SPI: valores < 1 son malos, > 1 son buenos
    if (value < bad) return '#f44336'; // Rojo
    if (value > good) return '#4caf50'; // Verde
    return '#616161'; // Gris oscuro
  }
};

/**
 * Formatea el valor para mostrar
 * @param {number|string} value - Valor a formatear
 * @param {string} suffix - Sufijo a añadir
 * @returns {string}
 */
const formatValue = (value, suffix = '') => {
  if (typeof value === 'number') {
    return `${value.toLocaleString('es-ES')}${suffix}`;
  }
  return value;
};

/**
 * Componente para mostrar el progreso con porcentaje
 */
function ProgressWithLabel({ value }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 120 }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress
          variant="determinate"
          value={Math.min(value, 100)}
          sx={{
            height: 12,
            borderRadius: 6,
            backgroundColor: '#e0e0e0',
            '& .MuiLinearProgress-bar': {
              borderRadius: 6,
              backgroundColor: '#1976d2',
            },
          }}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
          {`${value}%`}
        </Typography>
      </Box>
    </Box>
  );
}

ProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

/**
 * Celda con color dinámico
 */
function ColoredCell({ value, range, invertScale, suffix }) {
  const numericValue = typeof value === 'string' ? parseFloat(value.replace(/[^\d.-]/g, '')) : value;
  const color = getValueColor(numericValue, range, invertScale);

  return (
    <TableCell
      align="right"
      sx={{ color, fontWeight: 600 }}
    >
      {formatValue(value, suffix)}
    </TableCell>
  );
}

ColoredCell.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  range: PropTypes.shape({
    bad: PropTypes.number.isRequired,
    good: PropTypes.number.isRequired,
  }).isRequired,
  invertScale: PropTypes.bool,
  suffix: PropTypes.string,
};

ColoredCell.defaultProps = {
  invertScale: false,
  suffix: '',
};

/**
 * Componente principal DetailTable
 */
export default function DetailTable({
  rows,
  ranges,
  showBAC,
  showEV,
  showPV,
  showAC,
  showCPI,
  showSPI,
  showCV,
  showSV,
  showProgress,
}) {
  // Rangos por defecto
  const defaultRanges = {
    CPI: { bad: 1, good: 1 },      // < 1 rojo, = 1 gris, > 1 verde
    SPI: { bad: 1, good: 1 },      // < 1 rojo, = 1 gris, > 1 verde
    CV: { bad: 0, good: 0 },       // < 0 rojo, = 0 gris, > 0 verde
    SV: { bad: 0, good: 0 },       // < 0 rojo, = 0 gris, > 0 verde
  };

  const mergedRanges = { ...defaultRanges, ...ranges };

  return (
    <TableContainer component={Paper} elevation={0}>
      <Table sx={{ minWidth: 650 }} aria-label="detail table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 600, color: '#666' }}>Nombre</TableCell>
            {showBAC && <TableCell align="right" sx={{ fontWeight: 600, color: '#666' }}>BAC</TableCell>}
            {showEV && <TableCell align="right" sx={{ fontWeight: 600, color: '#666' }}>EV</TableCell>}
            {showPV && <TableCell align="right" sx={{ fontWeight: 600, color: '#666' }}>PV</TableCell>}
            {showAC && <TableCell align="right" sx={{ fontWeight: 600, color: '#666' }}>AC</TableCell>}
            {showCPI && <TableCell align="right" sx={{ fontWeight: 600, color: '#666' }}>CPI</TableCell>}
            {showSPI && <TableCell align="right" sx={{ fontWeight: 600, color: '#666' }}>SPI</TableCell>}
            {showCV && <TableCell align="right" sx={{ fontWeight: 600, color: '#666' }}>CV</TableCell>}
            {showSV && <TableCell align="right" sx={{ fontWeight: 600, color: '#666' }}>SV</TableCell>}
            {showProgress && <TableCell align="center" sx={{ fontWeight: 600, color: '#666' }}>% Avance</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.nombre}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: 600 }}>
                {row.nombre}
              </TableCell>
              {showBAC && <TableCell align="right" sx={{ fontWeight: 500 }}>{row.bac}</TableCell>}
              {showEV && <TableCell align="right" sx={{ fontWeight: 500 }}>{row.ev}</TableCell>}
              {showPV && <TableCell align="right" sx={{ fontWeight: 500 }}>{row.pv}</TableCell>}
              {showAC && <TableCell align="right" sx={{ fontWeight: 500 }}>{row.ac}</TableCell>}
              {showCPI && (
                <ColoredCell
                  value={row.cpi}
                  range={mergedRanges.CPI}
                  invertScale={false}
                />
              )}
              {showSPI && (
                <ColoredCell
                  value={row.spi}
                  range={mergedRanges.SPI}
                  invertScale={false}
                />
              )}
              {showCV && (
                <ColoredCell
                  value={row.cv}
                  range={mergedRanges.CV}
                  invertScale={true}
                />
              )}
              {showSV && (
                <ColoredCell
                  value={row.sv}
                  range={mergedRanges.SV}
                  invertScale={true}
                />
              )}
              {showProgress && (
                <TableCell align="center">
                  <ProgressWithLabel value={row.progress} />
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

DetailTable.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      bac: PropTypes.string,
      ev: PropTypes.string,
      pv: PropTypes.string,
      ac: PropTypes.string,
      cpi: PropTypes.number,
      spi: PropTypes.number,
      cv: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      sv: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      progress: PropTypes.number,
    })
  ).isRequired,
  ranges: PropTypes.shape({
    CPI: PropTypes.shape({
      bad: PropTypes.number,
      good: PropTypes.number,
    }),
    SPI: PropTypes.shape({
      bad: PropTypes.number,
      good: PropTypes.number,
    }),
    CV: PropTypes.shape({
      bad: PropTypes.number,
      good: PropTypes.number,
    }),
    SV: PropTypes.shape({
      bad: PropTypes.number,
      good: PropTypes.number,
    }),
  }),
  showBAC: PropTypes.bool,
  showEV: PropTypes.bool,
  showPV: PropTypes.bool,
  showAC: PropTypes.bool,
  showCPI: PropTypes.bool,
  showSPI: PropTypes.bool,
  showCV: PropTypes.bool,
  showSV: PropTypes.bool,
  showProgress: PropTypes.bool,
};

DetailTable.defaultProps = {
  ranges: {},
  showBAC: true,
  showEV: true,
  showPV: true,
  showAC: true,
  showCPI: true,
  showSPI: true,
  showCV: true,
  showSV: true,
  showProgress: true,
};
