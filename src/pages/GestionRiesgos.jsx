import { Box, Grid, Typography, Card, Chip, Divider } from '@mui/material';
import Cards from '../components/Cards';
import LineDiagram from '../components/charts/LineDiagram';
import HeatmapDiagram from '../components/charts/HeatmapDiagram';
import DetailRiskTable from '../components/tables/DetailRiskTable';

import '../styles/pages/GestionRiesgos.css';

// const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
// const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
// const xLabels = [
//   'Page A',
//   'Page B',
//   'Page C',
//   'Page D',
//   'Page E',
//   'Page F',
//   'Page G',
// ];

const cardItems = [
    { id: 1, title: 'Factor de riesgo', percentage: '0,93', text: '', label: '+2.5 pp vs sem. ant.' },
    { id: 2, title: 'Riesgos activos', percentage: '7', text: '3.0M € / 8.5M €', label: '-1.2 pp vs sem. ant.'  },
    { id: 3, title: 'Nuevos este mes', percentage: '4', text: '', label: '+0 vs sem. ant.'  },
    { id: 4, title: 'Cerrados', percentage: '9', text: 'ETC 6,2M €', label: '+0.1M vs sem. ant.'  }
  ];

  
  const riskData = [
    {
      id: 'R-012',
      nombre: 'Retraso Suministro Acero Especial',
      puntuacionActual: 'Alta',
      estrategiaMitigacion: 'Activar proveedor secundario y negociar adelanto de entrega parcial.',
      puntuacionObjetivo: 'Media',
      details: [
        {
          title: 'Descripción',
          text: 'El proveedor principal de acero especial ha notificado posibles retrasos en la entrega del lote para los bloques de proa.',
        },
        {
          title: 'Causa',
          text: 'Crisis de materias primas a nivel global y aumento de la demanda.',
        },
        {
          title: 'Consecuencia',
          text: 'Paralización de la línea de producción del bloque B-101 y B-102, con un impacto estimado de -15 días en el hito M4.',
        },
      ],
    },
    {
      id: 'R-008',
      nombre: 'Incompatibilidad Interfaz SCOMBA',
      puntuacionActual: 'Alta',
      estrategiaMitigacion: 'Desarrollar parche de software y reprogramar pruebas de integración.',
      puntuacionObjetivo: 'Baja',
      details: [
        {
          title: 'Descripción',
          text: 'El proveedor principal de acero especial ha notificado posibles retrasos en la entrega del lote para los bloques de proa.',
        },
        {
          title: 'Causa',
          text: 'Crisis de materias primas a nivel global y aumento de la demanda.',
        },
        {
          title: 'Consecuencia',
          text: 'Paralización de la línea de producción del bloque B-101 y B-102, con un impacto estimado de -15 días en el hito M4.',
        },
      ],
    },
     {
      id: 'R-0S3',
      nombre: 'Lorem Ipsum Dolor Sit Amet',
      puntuacionActual: 'Baja',
      estrategiaMitigacion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      puntuacionObjetivo: 'Media',
      details: [
        {
          title: 'Descripción',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          title: 'Causa',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          title: 'Consecuencia',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
      ],
    },
  ];

const top5 = (
              <Card variant="outlined" className="card">
                <Typography variant="h5">
                    Top 5 riesgos por Impacto
                </Typography>

                <Grid container spacing={2} className="py-3 grid">
                  <Grid size={{ xs: 8, md: 8, lg: 9 }} >
                    <Typography variant="body1">
                        R-008 Integración SCOMBA
                    </Typography>
                  <Typography variant="caption">
                      Prob: 70% · Impacto: Retraso Hito M5
                  </Typography>
                  </Grid>
                  <Grid size={{ xs: 4, md: 4, lg: 3 }} >
                    <Chip 
                        label="Alta"
                        variant="outlined"
                        sx={{ 
                            backgroundColor: "var(--background-red)",
                            color: "var(--text-red)",              
                            borderColor: "var(--background-red)",
                            fontWeight: 'bold', 
                        }}
                      />
                  </Grid>
                </Grid>

                <Divider/>

                <Grid container spacing={2} className="py-3 grid">
                  <Grid size={{ xs: 8, md: 8, lg: 9 }} >
                    <Typography variant="body1">
                        R-008 Integración SCOMBA
                    </Typography>
                    <Typography variant="caption">
                      Prob: 70% · Impacto: Retraso Hito M5
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 4, md: 4, lg: 3 }} >
                    <Chip 
                        label="Media"
                        variant="outlined"
                        sx={{ 
                            backgroundColor: "var(--background-yellow)",
                            color: "var(--text-yellow)",              
                            borderColor: "var(--background-yellow)",
                            fontWeight: 'bold', 
                        }}
                      />
                  </Grid>
                </Grid>

                <Divider/>

                <Grid container spacing={2} className="py-3 grid">
                  <Grid size={{ xs: 8, md: 8, lg: 9 }} >
                    <Typography variant="body1">
                        R-008 Integración SCOMBA
                    </Typography>
                    <Typography variant="caption">
                        Prob: 70% · Impacto: Retraso Hito M5
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 4, md: 4, lg: 3 }} >
                    <Chip 
                        label="Baja"
                        variant="outlined"
                        sx={{ 
                            backgroundColor: "var(--background-yellow)",
                            color: "var(--text-yellow)",              
                            borderColor: "var(--background-yellow)",
                            fontWeight: 'bold', 
                        }}
                      />
                  </Grid>
                </Grid>

                <Divider/>

                <Grid container spacing={2} className="py-3 grid">
                  <Grid size={{ xs: 8, md: 8, lg: 9 }} >
                    <Typography variant="body1">
                        R-008 Integración SCOMBA
                    </Typography>
                    <Typography variant="caption">
                        Prob: 70% · Impacto: Retraso Hito M5
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 4, md: 4, lg: 3 }} >
                    <Chip 
                        label="Baja"
                        variant="outlined"
                        sx={{ 
                            backgroundColor: "var(--background-yellow)",
                            color: "var(--text-yellow)",              
                            borderColor: "var(--background-yellow)",
                            fontWeight: 'bold', 
                        }}
                      />
                  </Grid>
                </Grid>

                <Grid container spacing={2} className="py-3 grid">
                  <Grid size={{ xs: 8, md: 8, lg: 9 }} >
                    <Typography variant="body1">
                        R-008 Integración SCOMBA
                    </Typography>
                  <Typography variant="caption">
                      Prob: 70% · Impacto: Retraso Hito M5
                  </Typography>
                  </Grid>
                  <Grid size={{ xs: 4, md: 4, lg: 3 }} >
                    <Chip 
                        label="Alta"
                        variant="outlined"
                        sx={{ 
                            backgroundColor: "var(--background-red)",
                            color: "var(--text-red)",              
                            borderColor: "var(--background-red)",
                            fontWeight: 'bold', 
                        }}
                      />
                  </Grid>
                </Grid>

              </Card>
);

export default function GestionRiesgos() {
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
                  data={[
                    { row: 0, col: 0, value: 4 },
                    { row: 0, col: 2, value: 3 },
                    { row: 1, col: 1, value: 2 },
                    { row: 1, col: 2, value: 2 },
                    { row: 2, col: 2, value: 2 },
                    { row: 2, col: 3, value: 1 },
                  ]}
                  rowLabels={['Baja', 'Media', 'Alta']}
                  colLabels={['Menor', 'Moderado', 'Mayor', 'Crítico']}
                />
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 6, lg: 6 }} >
              {top5}
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

/*
    <Container maxWidth="md" sx={{ mt: 4 }}>
      

      <Grid container spacing={3}>
        
        
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 2, boxShadow: 1, borderRadius: 2, bgcolor: 'white' }}>
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[{ data: [2, 5.5, 2, 8.5, 1.5, 5] }]}
              height={300}
            />
          </Box>
        </Grid>

        
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 2, boxShadow: 1, borderRadius: 2, bgcolor: 'white' }}>
            <BarChart
              series={[
                { data: pData, label: 'pv', id: 'pvId' },
                { data: uData, label: 'uv', id: 'uvId' },
              ]}
              xAxis={[{ data: xLabels }]}
              yAxis={[{ width: 50 }]}
              height={300}
            />
          </Box>
        </Grid>

      </Grid>
    </Container>*/
    
  );
}