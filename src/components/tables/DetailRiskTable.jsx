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
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

/**
 * Obtiene el color según el nivel de puntuación
 * @param {'Alta'|'Media'|'Baja'} level - Nivel de puntuación
 * @returns {string} - Color CSS
 */
const getLevelColor = (level) => {
  switch (level) {
    case 'Alta':
      return '#f44336'; // Rojo
    case 'Media':
      return '#ff9800'; // Naranja
    case 'Baja':
      return '#4caf50'; // Verde
    default:
      return '#616161'; // Gris
  }
};

/**
 * Componente para mostrar el indicador de nivel con punto de color
 */
function LevelIndicator({ level }) {
  const color = getLevelColor(level);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Box
        sx={{
          width: 12,
          height: 12,
          borderRadius: '50%',
          backgroundColor: color,
        }}
      />
      <Typography sx={{ fontWeight: 500, color: '#333' }}>
        {level}
      </Typography>
    </Box>
  );
}

LevelIndicator.propTypes = {
  level: PropTypes.oneOf(['Alta', 'Media', 'Baja']).isRequired,
};

/**
 * Componente para el contenido expandible
 */
function ExpandedContent({ details }) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 4,
        py: 2,
        px: 3,
        backgroundColor: '#f8f9fa',
      }}
    >
      {details.map((detail, index) => (
        <Box
          key={index}
          sx={{
            flex: 1,
            minWidth: 0,
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 700,
              color: '#333',
              mb: 1,
            }}
          >
            {detail.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: '#666',
              lineHeight: 1.5,
            }}
          >
            {detail.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

ExpandedContent.propTypes = {
  details: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

/**
 * Componente de fila con desplegable
 */
function RiskRow({ row, onNavigate }) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
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
          <Box>
            <Typography sx={{ fontWeight: 700, color: '#333' }}>
              {row.id}
            </Typography>
            <Typography variant="body2" sx={{ color: '#666' }}>
              {row.nombre}
            </Typography>
          </Box>
        </TableCell>
        <TableCell>
          <LevelIndicator level={row.puntuacionActual} />
        </TableCell>
        <TableCell>
          <Typography sx={{ color: '#333', fontWeight: 500 }}>
            {row.estrategiaMitigacion}
          </Typography>
        </TableCell>
        <TableCell>
          <LevelIndicator level={row.puntuacionObjetivo} />
        </TableCell>
        <TableCell sx={{ width: 50 }}>
          {onNavigate && (
            <IconButton
              aria-label="navigate"
              size="small"
              onClick={() => onNavigate(row)}
              sx={{ color: '#999' }}
            >
              <ArrowForwardIcon />
            </IconButton>
          )}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <ExpandedContent details={row.details || []} />
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

RiskRow.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    puntuacionActual: PropTypes.oneOf(['Alta', 'Media', 'Baja']).isRequired,
    estrategiaMitigacion: PropTypes.string.isRequired,
    puntuacionObjetivo: PropTypes.oneOf(['Alta', 'Media', 'Baja']).isRequired,
    details: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  onNavigate: PropTypes.func,
};

/**
 * Componente principal DetailRiskTable
 */
export default function DetailRiskTable({ rows, onNavigate }) {
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table sx={{ minWidth: 800 }} aria-label="risk detail table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: 50 }} />
            <TableCell sx={{ fontWeight: 700, color: 'var(--text-grey)' }}>
              ID / Nombre del Riesgo
            </TableCell>
            <TableCell sx={{ fontWeight: 700, color: 'var(--text-grey)' }}>
              Puntuación Actual
            </TableCell>
            <TableCell sx={{ fontWeight: 700, color: 'var(--text-grey)' }}>
              Estrategia de Mitigación
            </TableCell>
            <TableCell sx={{ fontWeight: 700, color: 'var(--text-grey)' }}>
              Puntuación Objetivo
            </TableCell>
            <TableCell sx={{ width: 50 }} />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <RiskRow key={row.id} row={row} onNavigate={onNavigate} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

DetailRiskTable.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      nombre: PropTypes.string.isRequired,
      puntuacionActual: PropTypes.oneOf(['Alta', 'Media', 'Baja']).isRequired,
      estrategiaMitigacion: PropTypes.string.isRequired,
      puntuacionObjetivo: PropTypes.oneOf(['Alta', 'Media', 'Baja']).isRequired,
      details: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
  onNavigate: PropTypes.func,
};

DetailRiskTable.defaultProps = {
  onNavigate: null,
};
