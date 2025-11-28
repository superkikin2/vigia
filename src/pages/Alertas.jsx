import { Box, Grid, Typography, Card } from '@mui/material';
import ChipsGroup from '../components/ChipsGroup';
import '../styles/pages/Alertas.css';

export default function Alertas() {

  const chipItems1 = [
    { text: 'Alta', class:"list-items-4  mb-2" },
    { text: 'Riesgos', class:"list-items-5 mx-2 mb-2" },
  ];

  const chipItems2 = [
    { text: 'Alta', class:"list-items-4 mb-2" },
    { text: 'Valor Ganado', class:"list-items-5 mx-2 mb-2" },
  ];

  const chipItems3 = [
    { text: 'Media', class:"list-items-4 mb-2" },
    { text: 'Planificación', class:"list-items-5 mx-2 mb-2" },
  ];

  
  return (
    <Box className="content">
      <Box
        sx={{ 
            flexGrow: 1, 
            width: { xs: "100%", md: "100%", lg: '100%' } 
          }} 
        className="mt-5"
      >
        <Typography variant="h6" gutterbottom fontWeight="bold">
          Monitor de alertas
        </Typography>
        <Typography variant="body2" gutterbottom>
          Listado priorizado de notificaciones y eventos del proyecto.
        </Typography>
      </Box>

      <Box
        sx={{ 
            flexGrow: 1, 
            width: { xs: "100%", md: "100%", lg: '100%' } 
          }} 
        className="mt-4"
      >
        <Card variant="outlined" className="p-3" id="card-alerta-1">
          <ChipsGroup menuItems={chipItems1}/>
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
        <Card variant="outlined" className="p-3" id="card-alerta-2">
          <ChipsGroup menuItems={chipItems2}/>
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
        <Card variant="outlined" className="p-3" id="card-alerta-3">
          <ChipsGroup menuItems={chipItems3}/>
          <Typography variant="body1" gutterbottom>
            Hito M3 retrasado 3d
          </Typography>
          <Typography variant="body2" gutterbottom>
            El hito "Entrega de planos eléctricos" se ha retrasado. Es necesario replanificar as tareas pendientes.
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
        <Typography variant="h6" gutterbottom fontWeight="bold">
          Insights del Proyecto
        </Typography>
        <Typography variant="body2" gutterbottom>
          Resomendaciones estratégicas generadas por IA.
        </Typography>
      </Box>

      <Box
        sx={{ 
            flexGrow: 1, 
            width: { xs: "100%", md: "100%", lg: '100%' } 
          }} 
        className="mt-4"
      >
        <Card variant="outlined" className="card p-3">
          
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
          
        </Card>
      </Box>
    </Box>

  );
}