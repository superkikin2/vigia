import { Box, Typography } from '@mui/material';

// Escala de colores por defecto (de rojo a verde)
const defaultColorScale = [
  { threshold: 0, color: '#e57373' },   // Rojo
  { threshold: 0.2, color: '#ef9a9a' }, // Rojo claro
  { threshold: 0.4, color: '#ffab91' }, // Naranja medio
  { threshold: 0.6, color: '#ffe0b2' }, // Naranja claro
  { threshold: 0.8, color: '#fff9c4' }, // Amarillo claro
  { threshold: 1, color: '#d4edda' },   // Verde claro
];

// Datos de ejemplo
const defaultData = [
  { row: 2, col: 2, value: 2 },
  { row: 2, col: 3, value: 1 },
  { row: 1, col: 1, value: 2 },
  { row: 1, col: 2, value: 2 },
  { row: 0, col: 0, value: 4 },
  { row: 0, col: 2, value: 3 },
];

const defaultRowLabels = ['Alta', 'Media', 'Baja'];
const defaultColLabels = ['Menor', 'Moderado', 'Mayor', 'Crítico'];

// Función para interpolar entre dos colores
const interpolateColor = (color1, color2, factor) => {
  const hex = (c) => parseInt(c, 16);
  const r1 = hex(color1.slice(1, 3));
  const g1 = hex(color1.slice(3, 5));
  const b1 = hex(color1.slice(5, 7));
  const r2 = hex(color2.slice(1, 3));
  const g2 = hex(color2.slice(3, 5));
  const b2 = hex(color2.slice(5, 7));

  const r = Math.round(r1 + (r2 - r1) * factor);
  const g = Math.round(g1 + (g2 - g1) * factor);
  const b = Math.round(b1 + (b2 - b1) * factor);

  return `rgb(${r}, ${g}, ${b})`;
};

export default function HeatmapDiagram({
  data = defaultData,
  rowLabels = defaultRowLabels,
  colLabels = defaultColLabels,
  minCellSize = 80,
  yAxisLabel = '',
  xAxisLabel = '',
  colorScale = defaultColorScale,
  minValue = null,
  maxValue = null,
  defaultCellColor = '#f5f5f5',
}) {
  // Calcular min/max automáticamente si no se proporcionan
  const values = data.map((d) => d.value);
  const computedMin = minValue !== null ? minValue : Math.min(...values);
  const computedMax = maxValue !== null ? maxValue : Math.max(...values);

  // Obtener valor en una celda
  const getValueAt = (row, col) => {
    const cell = data.find((d) => d.row === row && d.col === col);
    return cell ? cell.value : null;
  };

  // Obtener color basado en el valor (normalizado entre 0 y 1)
  const getColorByValue = (value) => {
    if (value === null) return defaultCellColor;

    // Normalizar el valor entre 0 y 1
    const range = computedMax - computedMin;
    const normalized = range === 0 ? 0.5 : (value - computedMin) / range;

    // Encontrar los dos colores entre los que interpolar
    let lowerColor = colorScale[0];
    let upperColor = colorScale[colorScale.length - 1];

    for (let i = 0; i < colorScale.length - 1; i++) {
      if (normalized >= colorScale[i].threshold && normalized <= colorScale[i + 1].threshold) {
        lowerColor = colorScale[i];
        upperColor = colorScale[i + 1];
        break;
      }
    }

    // Calcular factor de interpolación
    const range2 = upperColor.threshold - lowerColor.threshold;
    const factor = range2 === 0 ? 0 : (normalized - lowerColor.threshold) / range2;

    return interpolateColor(lowerColor.color, upperColor.color, factor);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', p: { xs: 1, sm: 1.5, md: 2 } }}>
      {/* Contenedor principal */}
      <Box sx={{ display: 'flex', width: '100%' }}>
        {/* Etiquetas del eje Y */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            pr: { xs: 0.5, sm: 1, md: 2 },
            minWidth: { xs: 40, sm: 50, md: 60 },
          }}
        >
          {rowLabels.map((label, index) => (
            <Box
              key={index}
              sx={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              <Typography 
                sx={{ 
                  fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem', lg: '1rem' },
                  fontWeight: 'medium',
                  whiteSpace: 'nowrap',
                }}
                color="text.secondary"
              >
                {label}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Grid del heatmap */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: { xs: 0.25, sm: 0.5 } }}>
          {rowLabels.map((_, rowIndex) => (
            <Box key={rowIndex} sx={{ display: 'flex', flex: 1, gap: { xs: 0.25, sm: 0.5 } }}>
              {colLabels.map((_, colIndex) => {
                const value = getValueAt(rowIndex, colIndex);
                return (
                  <Box
                    key={colIndex}
                    sx={{
                      flex: '1 1 0',
                      minWidth: 0,
                      aspectRatio: '1',
                      backgroundColor: getColorByValue(value),
                      borderRadius: { xs: 1.5, sm: 2, md: 3 },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {value !== null && (
                      <Box
                        sx={{
                          backgroundColor: '#4a5568',
                          borderRadius: 20,
                          px: { xs: 0.75, sm: 1, md: 1.5, lg: 2.5 },
                          py: { xs: 0.2, sm: 0.35, md: 0.5, lg: 0.75 },
                          maxWidth: '70%',
                          textAlign: 'center',
                        }}
                      >
                        <Box
                          component="span"
                          sx={{ 
                            fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.85rem', lg: '1rem' },
                            fontWeight: 'medium',
                            color: '#fff !important',
                          }}
                        >
                          {value}
                        </Box>
                      </Box>
                    )}
                  </Box>
                );
              })}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Etiquetas del eje X */}
      <Box
        sx={{
          display: 'flex',
          mt: { xs: 4, sm: 4, md: 3, lg: 2 },
          ml: { xs: '44px', sm: '56px', md: '70px' },
          height: { xs: 60, sm: 60, md: 50, lg: 'auto' },
        }}
      >
        {colLabels.map((label, index) => (
          <Box
            key={index}
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: { xs: 'flex-start', lg: 'center' },
            }}
          >
            <Typography 
              sx={{ 
                fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.85rem', lg: '1rem' },
                fontWeight: 'medium',
                whiteSpace: 'nowrap',
                writingMode: { xs: 'vertical-rl', sm: 'vertical-rl', md: 'vertical-rl', lg: 'horizontal-tb' },
                textOrientation: { xs: 'mixed', lg: 'mixed' },
              }}
              color="text.secondary"
            >
              {label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}