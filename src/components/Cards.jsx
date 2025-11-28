import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

/**
 * Determina el color del label según si es positivo o negativo
 */
const getLabelColor = (label) => {
  if (!label) return { color: '#666', bg: '#f5f5f5' };
  if (label.includes('+')) return { color: '#4caf50', bg: '#e8f5e9' };
  if (label.includes('-')) return { color: '#f44336', bg: '#ffebee' };
  return { color: '#666', bg: '#f5f5f5' };
};

export default function Cards({ title, percentage, text, label, sx, origin }) {

  const labelColors = getLabelColor(label);

  const card = (
    <React.Fragment>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          p: 3,
          '&:last-child': { pb: 3 },
        }}
      >
        {/* Título */}
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 600,
            color: '#666',
            mb: 2,
          }}
        >
          {title}
        </Typography>

        {/* Valor principal grande */}
        <Typography
          sx={{
            fontSize: origin === 'visionGeneral' ? '42px' : '28px',
            fontWeight: 700,
            color: '#1a1a1a',
            lineHeight: 1.1,
            mb: 1,
          }}
        >
          {percentage}
        </Typography>

        {/* Texto secundario (ej: ETC 6.2M €) */}
        {text && (
          <Typography
            sx={{
              fontSize: '14px',
              color: '#999',
              mb: 2,
            }}
          >
            {text}
          </Typography>
        )}

        {/* Label con variación (ej: +5.2% vs. sem. ant) */}
        {label && (
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: labelColors.bg,
              borderRadius: '12px',
              px: 1.5,
              py: 0.5,
              mt: 'auto',
              width: 'fit-content',
            }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: '12px',
                fontWeight: 600,
                color: labelColors.color,
              }}
            >
              {label.split(' ')[0]}
            </Typography>
            <Typography
              component="span"
              sx={{
                fontSize: '12px',
                color: '#666',
                ml: 0.5,
              }}
            >
              {label.split(' ').slice(1).join(' ')}
            </Typography>
          </Box>
        )}
      </CardContent>
    </React.Fragment>
  );

  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: '12px',
        border: '1px solid #e0e0e0',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        height: '100%',
        ...sx,
      }}
    >
      {card}
    </Card>
  );
}