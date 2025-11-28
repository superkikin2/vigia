import { useState, useEffect } from 'react';
import { Box, Grid, Typography, Card, TextField, Divider } from '@mui/material';
import Cards from '../components/Cards'
import ChipsGroup from '../components/ChipsGroup';
import { reunionesMock } from '../mocks';
import { HiSparkles } from "react-icons/hi";
import { GrStatusGood } from "react-icons/gr";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { HiUsers } from "react-icons/hi";
import '../styles/pages/Reuniones.css'

export default function Reuniones() {
  const [cardItems, setCardItems] = useState([]);
  const [chipItems, setChipItems] = useState([]);
  const [chipItems2, setChipItems2] = useState([]);

  useEffect(() => {
    // Aquí irán las llamadas al API y la carga de datos en los componentes
    setCardItems(reunionesMock.cardItems);
    setChipItems(reunionesMock.chipItems);
    setChipItems2(reunionesMock.chipItems2);
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

      <Box
        sx={{ 
            flexGrow: 1, 
            width: { xs: "100%", md: "100%", lg: '100%' } 
          }} 
        className="mt-5"
      >
        <Card variant="outlined" className="card">
          <Grid container spacing={2} className="grid">
            <Grid size={{ xs: 12, md: 6, lg: 7 }}>
              <ChipsGroup menuItems={chipItems}/>
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 5 }}>
              <TextField id="outlined-basic" label="Buscar proyecto, PEP..." variant="outlined" align="center"/>
            </Grid>
          </Grid>
        </Card>
      </Box>
      
      <Box
        sx={{ 
            flexGrow: 1, 
            width: { xs: "100%", md: "100%", lg: '100%' } 
          }} 
        className="mt-5"
      >
        <Card variant="outlined" className="card">
          <Typography variant="body2" gutterBottom>
            Hoy, 09:00 - 09:45
          </Typography>
          <Typography variant="h6" gutterBottom>
            Weekly PMO - Sprint 24
          </Typography>
          <Typography variant="body2" gutterBottom>
            Revisión de avances del sprint, identificación de bloqueos en el WP 2.3 y planificación de las próximas tareas de integración.
          </Typography>
          <ChipsGroup menuItems={chipItems2}/>
        </Card>
      </Box>

      <Box
        sx={{ 
            flexGrow: 1, 
            width: { xs: "100%", md: "100%", lg: '100%' } 
          }} 
        className="mt-5"
      >
        <Card variant="outlined" className="card">
          <Typography variant="body2" gutterBottom>
            Hoy, 09:00 - 09:45
          </Typography>
          <Typography variant="h6" gutterBottom>
            Weekly PMO - Sprint 24
          </Typography>
          <Typography variant="body2" gutterBottom>
            Revisión de avances del sprint, identificación de bloqueos en el WP 2.3 y planificación de las próximas tareas de integración.
          </Typography>
          <ChipsGroup menuItems={chipItems2}/>
          
          <Card variant="outlined" className="subcard mt-3">
            <Card variant="outlined">
              <Typography variant="body2" gutterBottom>
                <HiSparkles />&nbsp;
                Acta automática e insights de la IA disponibles para esta reunion.
              </Typography>
            </Card>
            <Grid container spacing={4} className="subgrid mt-3">
              <Grid item size={{ xs: 12, md: 6, lg: 4 }}>
                <Typography variant="body1" gutterBottom>
                    <HiSparkles style={{ color: "var(--primary-blue-hover-2)" }} />&nbsp;Insights IA
                </Typography>
                <Typography variant="body2" gutterBottom sx={{color: 'var(--text-grey)'}}>
                    · Riesgo R-012(Suministro Acero) vuelve a ser critico.
                </Typography>
                <Typography variant="body2" gutterBottom sx={{color: 'var(--text-grey)'}}>
                    · Se aprueba la compra de nuevo software de simulación.
                </Typography>
                <Typography variant="body2" gutterBottom sx={{color: 'var(--text-grey)'}}>
                    · Laura Vidal asignada ccomo responsable de la integración de Sonares.
                </Typography>
              </Grid>
              <Grid item size={{ xs: 12, md: 6, lg: 4 }}>
                <Typography variant="body1" gutterBottom>
                    <GrStatusGood style={{ color: "var(--primary-blue-hover-2)" }} />&nbsp;Acciones Derivadas
                </Typography>
                <Typography variant="body2" gutterBottom sx={{color: 'var(--text-grey)'}}>
                    · 8 acciones totales creadas.
                </Typography>
                <Typography variant="body2" gutterBottom sx={{color: 'var(--text-grey)'}}>
                    · 3 acciones pendientes para hoy.
                </Typography>
              </Grid>
              <Grid item size={{ xs: 12, md: 6, lg: 4 }}>
                <Typography variant="body1" gutterBottom>
                    <HiUsers style={{ color: "var(--primary-blue-hover-2)" }} />&nbsp;Participantes
                </Typography>
                <Typography variant="body2" gutterBottom sx={{color: 'var(--text-grey)'}}>
                    Ana Gracía, Pedro, Sofía
                </Typography>
              </Grid>
              <Grid item size={{ xs: 12, md: 6, lg: 4 }}>
                <Typography variant="body1" gutterBottom>
                    <HiOutlineDocumentText style={{ color: "var(--primary-blue-hover-2)" }} />&nbsp;Highlights IA (Resumen)
                </Typography>
                <Typography variant="body2" gutterBottom sx={{color: 'var(--text-grey)'}}>
                    · Escalar incidencia de proveedor a Comité de Dirección.
                </Typography>
                <Typography variant="body2" gutterBottom sx={{color: 'var(--text-grey)'}}>
                    · Entregar informe de consumo de combustible antes del viernes.
                </Typography>
                <Typography variant="body2" gutterBottom sx={{color: 'var(--text-grey)'}}>
                    · Mitigación del riesgo R-008 completada con éxito.
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Card>

      </Box>

    </Box>
  );
}