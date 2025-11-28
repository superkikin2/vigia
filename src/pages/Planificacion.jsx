import { Box, Grid, Typography, Card } from '@mui/material';
import Cards from '../components/Cards'
import BarDiagram from '../components/charts/BarDiagram';
import ChipsGroup from '../components/ChipsGroup';
import BasicTable from '../components/tables/BasicTable';
import AssistantIA from '../components/AssistantIA';
import '../styles/pages/Planificacion.css';
import PlannerDiagram from '../components/charts/PlannerDiagram';

export default function Planificacion() {

  const cardItems = [
    { id: 1, title: 'Actividades en camino crítico', percentage: '32', text: '', label: '+5.2% vs. sem.ant' },
    { id: 2, title: 'CC sin variación en el avance', percentage: '18', text: '3.0M € / 8.5M €', label: '+5.2% vs. sem.ant'  },
    { id: 3, title: 'CC sin variación en el avance', percentage: '4', text: '', label: '+5.2% vs. sem.ant'  },
    { id: 4, title: 'CC sin avance no finalizados', percentage: '9', text: '', label: '+5.2% vs. sem.ant'  }
  ];

  const menuItems = [
    { text: 'En riesgo', class:"list-items-2 mx-2" },
    { text: 'Retrasado > 7d', class:"list-items-2 mx-2" },
    { text: 'Sin Avance', class:"list-items-2 mx-2" },
    { text: 'Camino Crítico', class:"list-items-2 mx-2" },
  ];


  return (

    <Box className="content">
      <Box 
        sx={{ 
          flexGrow: 1, 
          width: { xs: "100%", md: "100%", lg: '75%' } 
        }} >
        <Grid container spacing={2}>
          {cardItems.map((item) => (
            <Grid key={item.id} size={{ xs: 12, md: 3, lg: 3 }} >
              <Cards 
                sx={{ width: '100%' }} 
                id={item.id}
                text={item.text} 
                title={item.title} 
                percentage={item.percentage} 
                label={item.label}
                origin="visionGeneral"
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        sx={{ 
            flexGrow: 1, 
            width: { xs: "100%", md: "100%", lg: '100%' } 
          }} 
        id="content-1"
        className="mt-5"
      >
        <Card variant="outlined" className="card">
          <Typography variant="h5" gutterBottom>
            Fragata 1735
          </Typography>
          <Typography variant="body2" gutterBottom>
            Casos particulares de actividades en camino crítico
          </Typography>
          <BarDiagram/>
        </Card>
      </Box>

      <Box
        sx={{ 
            flexGrow: 1, 
            width: { xs: "100%", md: "100%", lg: '100%' } 
          }} 
        id="content-2"
        className="mt-5"
      >
        <Card variant="outlined" className="card">
          <Typography variant="h5" gutterBottom>
            Estado de las actividades
          </Typography>
          <ChipsGroup menuItems={ menuItems } />
          <BasicTable
            headTable={["Actividad", "Planificados", "Consumidos", "Retraso", "%Completado"]}
            contentTable={[
              ["Integración de sonares", "90d", "95d", "+5d", "98%"],
              ["Integración de sonares", "120d", "135d", "+5d", "98%"],
              ["Integración de sonares", "30d", "28d", "-2d", "98%"]
            ]}
          />
        </Card>
      </Box>

      <Box
        sx={{ 
            flexGrow: 1, 
            width: { xs: "100%", md: "100%", lg: '100%' } 
          }}
        id="content-3"
        className="mt-5" 
      >
        <Card variant="outlined" className="card">
          <Typography variant="h5" gutterBottom>
            Estado de las actividades
          </Typography>
          <PlannerDiagram 
            tasks={[
              { id: 1, name: 'Tarea 1', start: 1, end: 3 },
              { id: 2, name: 'Tarea 2', start: 2, end: 5 },
            ]}
            columns={['S1', 'S2', 'S3', 'S4', 'S5']}
          />
        </Card>
      </Box>
    </Box>
  );
}