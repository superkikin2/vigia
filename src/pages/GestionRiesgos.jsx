import { useState, useEffect } from 'react';
import { Box, Grid, Typography, Card, Chip, Divider } from '@mui/material';
import Cards from '../components/Cards';
import LineDiagram from '../components/charts/LineDiagram';
import HeatmapDiagram from '../components/charts/HeatmapDiagram';
import DetailRiskTable from '../components/tables/DetailRiskTable';
import { gestionRiesgosMock } from '../mocks';

import '../styles/pages/GestionRiesgos.css';

export default function GestionRiesgos() {
  const [cardItems, setCardItems] = useState([]);
  const [riskData, setRiskData] = useState([]);
  const [heatmapData, setHeatmapData] = useState([]);
  const [heatmapRowLabels, setHeatmapRowLabels] = useState([]);
  const [heatmapColLabels, setHeatmapColLabels] = useState([]);
  const [top5Data, setTop5Data] = useState([]);

  useEffect(() => {
    // Aquí irán las llamadas al API y la carga de datos en los componentes
    setCardItems(gestionRiesgosMock.cardItems);
    setRiskData(gestionRiesgosMock.riskData);
    setHeatmapData(gestionRiesgosMock.heatmapData);
    setHeatmapRowLabels(gestionRiesgosMock.heatmapRowLabels);
    setHeatmapColLabels(gestionRiesgosMock.heatmapColLabels);
    setTop5Data(gestionRiesgosMock.top5Data);
  }, []);

  const getNivelStyles = (nivel) => {
    switch (nivel) {
      case 'Alta':
        return {
          backgroundColor: "var(--background-red)",
          color: "var(--text-red)",
          borderColor: "var(--background-red)",
        };
      case 'Media':
      case 'Baja':
      default:
        return {
          backgroundColor: "var(--background-yellow)",
          color: "var(--text-yellow)",
          borderColor: "var(--background-yellow)",
        };
    }
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
    
        <Box className="mt-5" >
          <Grid container spacing={2}>

            <Grid size={{ xs: 12, md: 6, lg: 6 }} >
              <Card variant="outlined" className="card">
                <Typography variant="h5">
                  Factor Riesgo (FdR)
                </Typography>
                <LineDiagram/>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 6, lg: 6 }} >
              <Card variant="outlined" className="card">
                <Typography variant="h5">
                  Nivel de Riesgo del Proyecto (RSP)
                </Typography>
                <LineDiagram/>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 6, lg: 6 }} >
              <Card variant="outlined" className="card">
                <Typography variant="h5">
                  Matriz de calor de Riesgos
                </Typography>
                <HeatmapDiagram 
                  data={heatmapData}
                  rowLabels={heatmapRowLabels}
                  colLabels={heatmapColLabels}
                />
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 6, lg: 6 }} >
              <Card variant="outlined" className="card">
                <Typography variant="h5">
                    Top 5 riesgos por Impacto
                </Typography>

                {top5Data.map((risk, index) => (
                  <div key={risk.id}>
                    <Grid container spacing={2} className="py-3 grid">
                      <Grid size={{ xs: 8, md: 8, lg: 9 }} >
                        <Typography variant="body1">
                            {risk.nombre}
                        </Typography>
                        <Typography variant="caption">
                            Prob: {risk.prob} · Impacto: {risk.impacto}
                        </Typography>
                      </Grid>
                      <Grid size={{ xs: 4, md: 4, lg: 3 }} >
                        <Chip 
                            label={risk.nivel}
                            variant="outlined"
                            sx={{ 
                                ...getNivelStyles(risk.nivel),
                                fontWeight: 'bold', 
                            }}
                          />
                      </Grid>
                    </Grid>
                    {index < top5Data.length - 1 && <Divider/>}
                  </div>
                ))}
              </Card>
            </Grid>
          </Grid>
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
            <Typography variant="body1" gutterBottom fontWeight="bold">
              Registro Detallado de Riesgos
            </Typography>
          <DetailRiskTable 
            rows={riskData}
            onNavigate={(row) => console.log('Navegar a:', row.id)}
          />
          </Card>
        </Box>
    </Box>
  );
}