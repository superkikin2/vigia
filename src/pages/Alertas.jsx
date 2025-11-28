import { Box, Grid, Typography, Card, TextField} from '@mui/material';
import ChipsGroup from '../components/ChipsGroup';
import '../styles/pages/Alertas.css';

export default function Alertas() {

  const chipItems = [
    { text: 'Hoy', class:"list-items-2 mx-2" },
    { text: 'Últimos 7 días', class:"list-items-2 mx-2" },
    { text: 'Últimos 30 días', class:"list-items-2 mx-2" },
    { text: 'No asistidas', class:"list-items-2 mx-2" },
  ];

  
  return (
    <Box className="content">
      <Typography variant="body1" gutterbottom>
        Monitor de alertas
      </Typography>
      <Typography variant="body2" gutterbottom>
        Listado priorizado de notificaciones y eventos del proyecto.
      </Typography>

      <Box
        sx={{ 
            flexGrow: 1, 
            width: { xs: "100%", md: "100%", lg: '100%' } 
          }} 
        className="mt-4"
      >
        <Card variant="outlined" className="card p-3">
          <Typography variant="body1" gutterbottom>
            Nuevo riesgo R-034
          </Typography>
          <Typography variant="body2" gutterbottom>
            Identificado riesgo de suministro en componente clave. Requiere plan de mitigación urgente.
          </Typography>
        </Card>
      </Box>

      <Box
        sx={{ 
            flexGrow: 1, 
            width: { xs: "100%", md: "100%", lg: '100%' } 
          }} 
        className="mt-4"
      >
        <Card variant="outlined" className="card p-3">
          <Typography variant="body1" gutterbottom>
            SPI 0,86 en WBS 1.2
          </Typography>
          <Typography variant="body2" gutterbottom>
            El rendimiento del cronograma en "Estructura" está por debajo de lo esperado. Se recomienda una revisión.
          </Typography>
        </Card>
      </Box>

      <Box
        sx={{ 
            flexGrow: 1, 
            width: { xs: "100%", md: "100%", lg: '100%' } 
          }} 
        className="mt-4"
      >
        <Card variant="outlined" className="card p-3">
          <Typography variant="body1" gutterbottom>
            Hito M3 retrasado 3d
          </Typography>
          <Typography variant="body2" gutterbottom>
            El hito "Entrega de planos eléctricos" se ha retrasado. Es necesario replanificar as tareas pendientes.
          </Typography>
        </Card>
      </Box>

    </Box>
  );
}