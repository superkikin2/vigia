import { Container, Box, Grid, Typography, Card, Button } from '@mui/material';
import Cards from '../components/Cards'
import CollapsedTable from '../components/tables/CollapsedTable';
import ChipsGroup from '../components/ChipsGroup';
import VerticalTimeline from '../components/VerticalTimeline';
import AssistantIA from '../components/AssistantIA';
import '../styles/pages/VisionGeneral.css';

export default function VisionGeneral() {

  const cardItems = [
    { id: 1, title: 'Avance del proyecto', percentage: '60%', text: '', label: '+2.5 pp vs sem. ant.' },
    { id: 2, title: 'Consumo del Presupuesto', percentage: '35%', text: '3.0M € / 8.5M €', label: '-1.2 pp vs sem. ant.'  },
    { id: 3, title: 'Riesgos críticos activos', percentage: '7', text: '', label: '+0 vs sem. ant.'  },
    { id: 4, title: 'Proyección al cierre', percentage: 'EAC 9.2M €', text: 'ETC 6,2M €', label: '+0.1M vs sem. ant.'  }
  ];

  const menuItems = [
    { text: '7 en total', class:"list-items-1 mx-2" },
    { text: '3 participantes', class:"list-items-1 mx-2" },
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

      <Box className="mt-4">
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6, lg: 8 }}>
            <Card variant="outlined" className="card">
              <Typography variant="h5" gutterBottom>
                Top desviaciones críticas
              </Typography>
              <Grid size={{ xs: 12 }} sx={{ display: "grid", gap: 2 }}>
                <CollapsedTable />
              </Grid>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Card variant="outlined" className="card">
              <Typography variant="h5" gutterBottom> 
                Reuniones del proyecto
              </Typography>
              <ChipsGroup menuItems={ menuItems } />
              <VerticalTimeline />
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/*<AssistantIA/> */}
    </Box>
  );
}