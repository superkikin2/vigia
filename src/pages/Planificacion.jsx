import { useState, useEffect } from 'react';
import { Box, Grid, Typography, Card } from '@mui/material';
import Cards from '../components/Cards'
import BarDiagram from '../components/charts/BarDiagram';
import ChipsGroup from '../components/ChipsGroup';
import BasicTable from '../components/tables/BasicTable';
import AssistantIA from '../components/AssistantIA';
import { planificacionMock } from '../mocks';
import '../styles/pages/Planificacion.css';
import PlannerDiagram from '../components/charts/PlannerDiagram';

export default function Planificacion() {
  const [activeFilter, setActiveFilter] = useState(null);
  const [cardItems, setCardItems] = useState([]);
  const [tableRows, setTableRows] = useState([]);
  const [plannerTasks, setPlannerTasks] = useState([]);
  const [plannerColumns, setPlannerColumns] = useState([]);

  useEffect(() => {
    // Aquí irán las llamadas al API y la carga de datos en los componentes
    setCardItems(planificacionMock.cardItems);
    setTableRows(planificacionMock.tableRows);
    setPlannerTasks(planificacionMock.plannerTasks);
    setPlannerColumns(planificacionMock.plannerColumns);
  }, []);

  const menuItems = [
    { text: 'En riesgo', class: activeFilter === 'En riesgo' ? "list-items-2-active mx-2" : "list-items-2 mx-2" },
    { text: 'Retrasado > 7d', class: activeFilter === 'Retrasado > 7d' ? "list-items-2-active mx-2" : "list-items-2 mx-2" },
    { text: 'Sin Avance', class: activeFilter === 'Sin Avance' ? "list-items-2-active mx-2" : "list-items-2 mx-2" },
    { text: 'Camino Crítico', class: activeFilter === 'Camino Crítico' ? "list-items-2-active mx-2" : "list-items-2 mx-2" },
  ];

  const handleFilterClick = (filterText) => {
    setActiveFilter(activeFilter === filterText ? null : filterText);
  };


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
          <ChipsGroup menuItems={ menuItems } onItemClick={handleFilterClick} />
          <BasicTable
            headTable={["Actividad", "Planificados", "Consumidos", "Retraso", "% Completado"]}
            rows={tableRows}
            filter={activeFilter}
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
            tasks={plannerTasks}
            columns={plannerColumns}
          />
        </Card>
      </Box>
    </Box>
  );
}