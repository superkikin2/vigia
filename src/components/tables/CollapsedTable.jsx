import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

/**
 * Obtiene el color y fondo según el estado
 */
const getEstadoStyles = (estado) => {
  switch (estado) {
    case 'En riesgo':
      return { color: '#d32f2f', bg: '#ffebee' };
    case 'Retrasada':
      return { color: '#f57c00', bg: '#fff3e0' };
    case 'En seguimiento':
      return { color: '#1976d2', bg: '#e3f2fd' };
    case 'Observación':
      return { color: '#fbc02d', bg: '#fffde7' };
    case 'OK':
      return { color: '#388e3c', bg: '#e8f5e9' };
    default:
      return { color: '#666', bg: '#f5f5f5' };
  }
};

/**
 * Obtiene el color del valor CV/SV según si es positivo o negativo
 */
const getValueColor = (value) => {
  if (typeof value === 'string') {
    if (value.includes('-')) return '#d32f2f';
    if (value.startsWith('+') || (!value.includes('-') && parseFloat(value) > 0)) return '#388e3c';
  }
  if (typeof value === 'number') {
    if (value < 0) return '#d32f2f';
    if (value > 0) return '#388e3c';
  }
  return '#333';
};

/**
 * Determina si la fila debe tener fondo rojo claro (CV muy negativo)
 */
const getRowBackground = (cv) => {
  if (typeof cv === 'string') {
    const numValue = parseFloat(cv.replace(/[^\d.-]/g, ''));
    if (numValue <= -60000) return '#ffebee';
  }
  return 'transparent';
};

/**
 * Chip de estado
 */
function EstadoChip({ estado }) {
  const styles = getEstadoStyles(estado);
  
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        backgroundColor: styles.bg,
        color: styles.color,
        borderRadius: '16px',
        px: 2,
        py: 0.5,
        fontWeight: 500,
        fontSize: '13px',
        border: `1px solid ${styles.color}20`,
      }}
    >
      {estado}
    </Box>
  );
}

EstadoChip.propTypes = {
  estado: PropTypes.string.isRequired,
};

/**
 * Componente de fila
 */
function Row({ row }) {
  const [open, setOpen] = React.useState(false);
  const rowBg = getRowBackground(row.cv);

  return (
    <React.Fragment>
      <TableRow 
        sx={{ 
          '& > *': { borderBottom: 'unset' },
          backgroundColor: rowBg,
        }}
      >
        <TableCell sx={{ width: 50 }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
          </IconButton>
        </TableCell>
        <TableCell>
          <Typography sx={{ fontWeight: 500, color: '#333' }}>
            {row.actividad}
          </Typography>
        </TableCell>
        <TableCell 
          align="left"
          sx={{ 
            color: getValueColor(row.cv),
            fontWeight: 600,
            fontSize: '15px',
          }}
        >
          {row.cv}
        </TableCell>
        <TableCell 
          align="left"
          sx={{ 
            color: getValueColor(row.sv),
            fontWeight: 600,
            fontSize: '15px',
          }}
        >
          {row.sv}
        </TableCell>
        <TableCell align="left">
          <EstadoChip estado={row.estado} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: 0 }} colSpan={5}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box
              sx={{
                py: 2,
                px: 3,
                backgroundColor: '#f8f9fa',
              }}
            >
              <Typography 
                variant="subtitle1" 
                sx={{ fontWeight: 700, color: '#333', mb: 2 }}
              >
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600, color: '#666' }}>Date</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: '#666' }}>Customer</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 600, color: '#666' }}>Amount</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 600, color: '#666' }}>Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history?.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    actividad: PropTypes.string.isRequired,
    cv: PropTypes.string.isRequired,
    sv: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
    price: PropTypes.number,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string.isRequired,
        customerId: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
      })
    ),
  }).isRequired,
};

// Datos de ejemplo
const defaultRows = [
  { 
    actividad: 'Diseño Estructural Casco', 
    cv: '-120.000 €', 
    sv: '-15 d', 
    estado: 'En riesgo',
    price: 3.99,
    history: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    ],
  },
  { 
    actividad: 'Integración Sistema Combate', 
    cv: '-60.000 €', 
    sv: '-5 d', 
    estado: 'Retrasada',
    price: 4.99,
    history: [
      { date: '2020-02-10', customerId: '22091800', amount: 2 },
    ],
  },
  { 
    actividad: 'Pruebas de Propulsión', 
    cv: '-25.000 €', 
    sv: '0 d', 
    estado: 'En seguimiento',
    price: 2.50,
    history: [
      { date: '2020-03-15', customerId: '33091900', amount: 5 },
    ],
  },
  { 
    actividad: 'Cableado Eléctrico Puente', 
    cv: '-5000 €', 
    sv: '-1 d', 
    estado: 'Observación',
    price: 1.99,
    history: [
      { date: '2020-04-20', customerId: '44092000', amount: 4 },
    ],
  },
  { 
    actividad: 'Adquisición Sonares', 
    cv: '10.000 €', 
    sv: '2 d', 
    estado: 'OK',
    price: 5.99,
    history: [
      { date: '2020-05-25', customerId: '55092100', amount: 2 },
    ],
  },
];

export default function CollapsedTable({ rows = defaultRows }) {
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: 50 }} />
            <TableCell sx={{ fontWeight: 700, color: 'var(--text-grey)' }}>
              <TableSortLabel>Actividad</TableSortLabel>
            </TableCell>
            <TableCell sx={{ fontWeight: 700, color: 'var(--text-grey)' }}>
              <TableSortLabel>CV</TableSortLabel>
            </TableCell>
            <TableCell sx={{ fontWeight: 700, color: 'var(--text-grey)' }}>
              <TableSortLabel>SV</TableSortLabel>
            </TableCell>
            <TableCell sx={{ fontWeight: 700, color: 'var(--text-grey)' }}>
              Estado
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.actividad} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

CollapsedTable.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      actividad: PropTypes.string.isRequired,
      cv: PropTypes.string.isRequired,
      sv: PropTypes.string.isRequired,
      estado: PropTypes.string.isRequired,
      price: PropTypes.number,
      history: PropTypes.arrayOf(
        PropTypes.shape({
          date: PropTypes.string.isRequired,
          customerId: PropTypes.string.isRequired,
          amount: PropTypes.number.isRequired,
        })
      ),
    })
  ),
};