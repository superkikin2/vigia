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
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

/**
 * Obtiene el color y fondo para el chip de retraso
 */
const getRetrasoStyles = (retraso) => {
  if (typeof retraso === 'string') {
    if (retraso.startsWith('-')) {
      return { color: '#388e3c', bg: '#e8f5e9' }; // Verde - adelantado
    }
    if (retraso.startsWith('+')) {
      return { color: '#f57c00', bg: '#fff3e0' }; // Naranja - retrasado
    }
  }
  return { color: '#666', bg: '#f5f5f5' };
};

/**
 * Chip de retraso con color
 */
function RetrasoChip({ value }) {
  const styles = getRetrasoStyles(value);
  
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: styles.bg,
        color: styles.color,
        borderRadius: '12px',
        px: 1.5,
        py: 0.5,
        fontWeight: 600,
        fontSize: '13px',
      }}
    >
      {value}
    </Box>
  );
}

RetrasoChip.propTypes = {
  value: PropTypes.string.isRequired,
};

/**
 * Barra de progreso con etiquetas en los extremos
 */
function ProgressBar({ value }) {
  const numValue = typeof value === 'string' ? parseInt(value.replace('%', ''), 10) : value;
  
  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: 1 }}>
      <Typography variant="caption" sx={{ color: '#999', minWidth: 20 }}>0%</Typography>
      <LinearProgress
        variant="determinate"
        value={numValue}
        sx={{
          flex: 1,
          height: 6,
          borderRadius: 3,
          backgroundColor: '#e0e0e0',
          '& .MuiLinearProgress-bar': {
            borderRadius: 3,
            backgroundColor: '#1a237e',
          },
        }}
      />
      <Typography variant="caption" sx={{ color: '#999', minWidth: 30 }}>100%</Typography>
    </Box>
  );
}

ProgressBar.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default function BasicTable({ 
  headTable = [], 
  rows = [],
  filter = null, // Filtro activo: 'En riesgo', 'Retrasado > 7d', 'Sin Avance', 'Camino Crítico', null = todos
}) {
  // Filtrar filas según el estado
  const filteredRows = React.useMemo(() => {
    if (!filter) return rows;
    return rows.filter(row => row.estado === filter);
  }, [rows, filter]);

  return (
    <TableContainer component={Paper} elevation={0}>
      <Table sx={{ minWidth: 650 }} aria-label="planning table">

        {/* ---------- CABECERA ---------- */}
        <TableHead>
          <TableRow>
            {headTable.map((head, index) => (
              <TableCell 
                key={index}
                align={index === 0 ? 'left' : 'center'}
                sx={{ 
                  color: '#666',
                  fontWeight: 600,
                  fontSize: '13px',
                  borderBottom: '1px solid #e0e0e0',
                }}
              >
                {head}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        {/* ---------- CONTENIDO ---------- */}
        <TableBody>
          {filteredRows.map((row, i) => (
            <React.Fragment key={i}>
              {/* Fila de datos */}
              <TableRow sx={{ '& td': { borderBottom: 'none', pb: 0 } }}>
                <TableCell>
                  <Box>
                    <Typography sx={{ fontWeight: 600, color: '#333' }}>
                      {row.actividad}
                    </Typography>
                    {row.subtitulo && (
                      <Typography variant="body2" sx={{ color: '#999' }}>
                        {row.subtitulo}
                      </Typography>
                    )}
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Typography sx={{ fontWeight: 500, color: '#333' }}>
                    {row.planificados}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography sx={{ fontWeight: 500, color: '#333' }}>
                    {row.consumidos}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <RetrasoChip value={row.retraso} />
                </TableCell>
                <TableCell align="center">
                  <Typography sx={{ fontWeight: 600, color: '#333' }}>
                    {row.completado}
                  </Typography>
                </TableCell>
              </TableRow>
              {/* Fila de barra de progreso */}
              <TableRow sx={{ '& td': { pt: 0.5 } }}>
                <TableCell colSpan={headTable.length} sx={{ borderBottom: '1px solid #e0e0e0' }}>
                  <ProgressBar value={row.completado || 0} />
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
}

BasicTable.propTypes = {
  headTable: PropTypes.arrayOf(PropTypes.string),
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      actividad: PropTypes.string.isRequired,
      subtitulo: PropTypes.string,
      planificados: PropTypes.string.isRequired,
      consumidos: PropTypes.string.isRequired,
      retraso: PropTypes.string.isRequired,
      completado: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      estado: PropTypes.string, // 'En riesgo', 'Retrasado > 7d', 'Sin Avance', 'Camino Crítico'
    })
  ),
  filter: PropTypes.string,
};

BasicTable.propTypes = {
  headTable: PropTypes.arrayOf(PropTypes.string),
  contentTable: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      actividad: PropTypes.string.isRequired,
      subtitulo: PropTypes.string,
      planificados: PropTypes.string.isRequired,
      consumidos: PropTypes.string.isRequired,
      retraso: PropTypes.string.isRequired,
      completado: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ),
};