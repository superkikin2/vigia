import { ScatterChart } from '@mui/x-charts/ScatterChart';
import { Box, Typography, useTheme } from '@mui/material';

// Datos de ejemplo para el gráfico de burbujas
const defaultData = [
  { id: 1, x: 0.7, y: 0.85, size: 180, label: 'Proyecto A', color: '#f44336' }, // Crítico
  { id: 2, x: 0.85, y: 0.75, size: 140, label: 'Proyecto B', color: '#ff7043' }, // Crítico (menor)
  { id: 3, x: 0.95, y: 1.25, size: 200, label: 'Proyecto C', color: '#ff9800' }, // Ahorro
  { id: 4, x: 1.15, y: 0.8, size: 160, label: 'Proyecto D', color: '#ef5350' }, // Sobrecoste
  { id: 5, x: 1.1, y: 1.05, size: 220, label: 'Proyecto E', color: '#4caf50' }, // Óptimo
  { id: 6, x: 1.25, y: 1.35, size: 170, label: 'Proyecto F', color: '#66bb6a' }, // Óptimo
  { id: 7, x: 1.4, y: 1.2, size: 130, label: 'Proyecto G', color: '#81c784' }, // Óptimo
];

// Configuración de cuadrantes
const quadrantLabels = {
  topLeft: { title: 'Ahorro', subtitle: 'Bajo coste y retrasado' },
  topRight: { title: 'Óptimo', subtitle: 'Bajo coste y adelantado' },
  bottomLeft: { title: 'Crítico', subtitle: 'Sobrecoste y retrasado' },
  bottomRight: { title: 'Sobrecoste', subtitle: 'Sobrecoste y adelantado' },
};

export default function BubbleChart({
  data = defaultData,
  width = 600,
  height = 450,
  xAxisLabel = 'CPI',
  yAxisLabel = 'SPI',
  xMin = 0.5,
  xMax = 1.6,
  yMin = 0.5,
  yMax = 1.6,
  showQuadrantLabels = true,
  quadrantConfig = quadrantLabels,
}) {
  const theme = useTheme();

  // Función para obtener el color basado en el cuadrante
  const getColorByQuadrant = (x, y) => {
    if (x >= 1 && y >= 1) return '#4caf50'; // Óptimo - verde
    if (x < 1 && y >= 1) return '#ff9800'; // Ahorro - naranja
    if (x >= 1 && y < 1) return '#f16b69ff'; // Sobrecoste - rojo claro
    return '#f41a0bff'; // Crítico - rojo
  };

  // Crear series individuales para cada punto con su color
  const series = data.map((item) => ({
    data: [{ x: item.x, y: item.y, id: item.id }],
    label: item.label,
    valueFormatter: (v) => `CPI: ${v.x}, SPI: ${v.y}`,
    markerSize: Math.sqrt(item.size) * 2,
    color: item.color || getColorByQuadrant(item.x, item.y),
  }));

  return (
    <Box sx={{ position: 'relative', width, height: height + 60 }}>
      {/* Etiquetas de cuadrantes */}
      {showQuadrantLabels && (
        <>
          {/* Top Left - Ahorro */}
          <Box
            sx={{
              position: 'absolute',
              top: 10,
              left: 60,
              textAlign: 'center',
              zIndex: 1,
            }}
          >
            <Typography variant="subtitle1" fontWeight="bold" color="text.primary" style={{fontSize:'20px'}}>
              {quadrantConfig.topLeft.title}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {quadrantConfig.topLeft.subtitle}
            </Typography>
          </Box>

          {/* Top Right - Óptimo */}
          <Box
            sx={{
              position: 'absolute',
              top: 10,
              right: 40,
              textAlign: 'center',
              zIndex: 1,
            }}
          >
            <Typography variant="subtitle1" fontWeight="bold" color="text.primary" style={{fontSize:'20px'}}>
              {quadrantConfig.topRight.title}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {quadrantConfig.topRight.subtitle}
            </Typography>
          </Box>

          {/* Bottom Left - Crítico */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 80,
              left: 60,
              textAlign: 'center',
              zIndex: 1,
            }}
          >
            <Typography variant="subtitle1" fontWeight="bold" color="text.primary" style={{fontSize:'20px'}} >
              {quadrantConfig.bottomLeft.title}
            </Typography>
            <Typography variant="caption" color="text.secondary" >
              {quadrantConfig.bottomLeft.subtitle}
            </Typography>
          </Box>

          {/* Bottom Right - Sobrecoste */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 80,
              right: 40,
              textAlign: 'center',
              zIndex: 1,
            }}
          >
            <Typography variant="subtitle1" fontWeight="bold" color="text.primary" style={{fontSize:'20px'}}>
              {quadrantConfig.bottomRight.title}
            </Typography>
            <Typography variant="caption" color="text.secondary" >
              {quadrantConfig.bottomRight.subtitle}
            </Typography>
          </Box>
        </>
      )}

      {/* Gráfico de dispersión/burbujas */}
      <ScatterChart
        width={width}
        height={height}
        series={series}
        xAxis={[
          {
            min: xMin,
            max: xMax,
          },
        ]}
        yAxis={[
          {
            min: yMin,
            max: yMax,
          },
        ]}
        slotProps={{
          legend: {
            hidden: true,
          },
        }}
        leftAxis={null}
        bottomAxis={null}
        topAxis={null}
        rightAxis={null}
        sx={{
          // Ocultar todos los ejes
          '& .MuiChartsAxis-root': {
            display: 'none',
          },
        }}
      >
        {/* Líneas de referencia para los cuadrantes (CPI=1, SPI=1) */}
        <line
          x1="50%"
          y1="0"
          x2="50%"
          y2="100%"
          stroke={theme.palette.grey[400]}
          strokeWidth={1}
        />
        <line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          stroke={theme.palette.grey[400]}
          strokeWidth={1}
        />
      </ScatterChart>

      {/* Etiqueta del eje Y */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: '45%',
          transformOrigin: 'center center',
        }}
      >
        <Typography variant="caption" color="text.secondary">
          {yAxisLabel}
        </Typography>
      </Box>

      {/* Etiqueta del eje X */}
      <Box
        sx={{
          position: 'absolute',
          left: '52%',
          bottom: '10%',
          transformOrigin: 'center center',
        }}
      >
        <Typography variant="caption" color="text.secondary" >
          {xAxisLabel}
        </Typography>
      </Box>
    </Box>
  );
}