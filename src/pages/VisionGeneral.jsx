import { useState, useEffect } from 'react';
import { Container, Box, Grid, Typography, Card, Button } from '@mui/material';
import Cards from '../components/Cards'
import CollapsedTable from '../components/tables/CollapsedTable';
import ChipsGroup from '../components/ChipsGroup';
import VerticalTimeline from '../components/VerticalTimeline';
import AssistantIA from '../components/AssistantIA';
import { visionGeneralMock } from '../mocks';
import '../styles/pages/VisionGeneral.css';

export default function VisionGeneral() {
  const [cardItems, setCardItems] = useState([]);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Aquí irán las llamadas al API y la carga de datos en los componentes
    setCardItems(visionGeneralMock.cardItems);
    setMenuItems(visionGeneralMock.menuItems);
  }, []);

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