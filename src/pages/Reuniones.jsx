import { useState, useEffect } from 'react';
import { Box, Grid, Typography, Card } from '@mui/material';
import { GrDocumentText } from "react-icons/gr";
import { IoSparklesOutline } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Cards from '../components/Cards'
import ChipsGroup from '../components/ChipsGroup';

import { reunionesMock } from '../mocks';
import '../styles/pages/Reuniones.css'
import Search from '../components/forms/Search';

export default function Reuniones() {
  const [cardItems, setCardItems] = useState([]);
  const [chipItems, setChipItems] = useState([]);
  const [chipItems2, setChipItems2] = useState([]);
  const [openDetail1, setOpenDetail1] = useState(false);
  const [openDetail2, setOpenDetail2] = useState(false);

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
              <Search placeholder='Buscar Proyecto, PEP...'/>
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
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2, mb: 2 }}>
            <ChipsGroup menuItems={chipItems2}/>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button
                variant="contained"
                disableElevation
                sx={{
                  backgroundColor: '#f8f9fc',
                  color: '#2c3e50',
                  textTransform: 'none',
                  fontWeight: 800,
                  borderRadius: 3,
                  padding: '8px 20px',
                  '&:hover': {
                    backgroundColor: '#eef2f6'
                  }
                }}
              >
                Ver acta
              </Button>
                
              
              <Button
                variant="contained"
                disableElevation
                sx={{
                  backgroundColor: '#f8f9fc',
                  color: '#2c3e50',
                  textTransform: 'none',
                  fontWeight: 800,
                  borderRadius: 3,
                  padding: '8px 20px',
                  '&:hover': {
                    backgroundColor: '#eef2f6'
                  }
                }}
              >
                Ver grabación
              </Button>

              <Button
                variant="contained"
                disableElevation
                endIcon={openDetail1 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                onClick={() => setOpenDetail1(!openDetail1)}
                sx={{
                  backgroundColor: '#005bb5',
                  color: '#ffffff',
                  textTransform: 'none',
                  fontWeight: 800,
                  borderRadius: 3,
                  padding: '8px 20px',
                  '&:hover': {
                    backgroundColor: '#004494'
                  }
                }}
              >
                Ver detalle
              </Button>
            </Box>
          </Box>
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
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2, mb: 2 }}>
            <ChipsGroup menuItems={chipItems2}/>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button
                variant="contained"
                disableElevation
                sx={{
                  backgroundColor: '#f8f9fc',
                  color: '#2c3e50',
                  textTransform: 'none',
                  fontWeight: 800,
                  borderRadius: 3,
                  padding: '8px 20px',
                  '&:hover': {
                    backgroundColor: '#eef2f6'
                  }
                }}
              >
                Ver acta
              </Button>
                
              
              <Button
                variant="contained"
                disableElevation
                sx={{
                  backgroundColor: '#f8f9fc',
                  color: '#2c3e50',
                  textTransform: 'none',
                  fontWeight: 800,
                  borderRadius: 3,
                  padding: '8px 20px',
                  '&:hover': {
                    backgroundColor: '#eef2f6'
                  }
                }}
              >
                Ver grabación
              </Button>

              <Button
                variant="contained"
                disableElevation
                endIcon={openDetail2 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                onClick={() => setOpenDetail2(!openDetail2)}
                sx={{
                  backgroundColor: '#005bb5',
                  color: '#ffffff',
                  textTransform: 'none',
                  fontWeight: 800,
                  borderRadius: 3,
                  padding: '8px 20px',
                  '&:hover': {
                    backgroundColor: '#004494'
                  }
                }}
              >
                Ver detalle
              </Button>
            </Box>
          </Box>
          
          {openDetail2 && (
          <Card variant="outlined" className="subcard mt-3">
            <Card variant="outlined">
              <Typography variant="body2" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1 }}>
                <IoSparklesOutline style={{ color: 'var(--text-green)', fontWeight: 'bold' }}/>
                Acta automática e insights de la IA disponibles para esta reunion.
              </Typography>
            </Card>
            <Grid container spacing={4} className="subgrid mt-3">
              <Grid item size={{ xs: 12, md: 6, lg: 4 }}>
                <Typography variant="body1" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <IoSparklesOutline style={{ color: '#2C5994'}}/>
                    Insights IA
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
                <Typography variant="body1" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <FaRegCheckCircle style={{ color: 'var(--background-blue)'}}/>
                    Acciones Derivadas
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
                    Participantes
                </Typography>
                <Typography variant="body2" gutterBottom sx={{color: 'var(--text-grey)'}}>
                    Ana Gracía, Pedro, Sofía
                </Typography>
              </Grid>
              <Grid item size={{ xs: 12, md: 6, lg: 4 }}>
                <Typography variant="body1" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <GrDocumentText style={{ color: '#2C5994'}}/>
                    Highlights IA
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
          )}
        </Card>

      </Box>

    </Box>
  );
}