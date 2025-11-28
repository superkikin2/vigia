import Cards from '../components/Cards'
import InlineForm from '../components/forms/InlineForm.jsx';
import { Box, Grid, Typography, Card } from '@mui/material';
import BasicTable from '../components/tables/BasicTable';
import BubbleChart from '../components/charts/BubbleChart.jsx';
//import '../styles/pages/ValorGanado.css';
import DetailTable from '../components/tables/DetailTable.jsx';

export default function ValorGanado() {

  const cardItems1 = [
    { id: 1, title: 'CPI', percentage: '0.97', text: '', label: '+0.2% vs.meta' },
    { id: 2, title: 'SPI', percentage: '1.02', text: '', label: '+0.01'  },
    { id: 3, title: 'CV (€)', percentage: '-1.5M', text: '', label: 'Desviación'  },
    { id: 4, title: 'SV (d)', percentage: '+5d', text: '', label: '+1d'  },
    { id: 5, title: 'EAC (€)', percentage: '8.9M', text: '', label: '+0.04M'  },
    { id: 6, title: 'ETC (€)', percentage: '5.9M', text: '', label: 'XXXX'  },
  ];

  const cardItems2 = [
    { id: 1, title: 'CPI', percentage: '0.97', text: '', label: '+0.2% vs.meta' },
    { id: 2, title: 'SPI', percentage: '1.02', text: '', label: '+0.01'  },
    { id: 3, title: 'BAC', percentage: '40.5M', text: '', label: ''  },
    { id: 4, title: 'EV', percentage: '17M', text: '', label: '+1d'  },
    { id: 5, title: 'PV', percentage: '8.9M', text: '', label: '+0.04M'  },
    { id: 6, title: 'AC', percentage: '5.9M', text: '', label: 'XXXX'  },
  ];

  const DetailTableData1 = [
    { nombre: 'F111', bac: '12 M€', ev: '6 M€', pv: '5,8 M€', ac: '6,2 M€', cpi: 0.97, spi: 1.03, cv: -200000, sv: 200000, progress: 50 },
    { nombre: 'F112', bac: '15 M€', ev: '7 M€', pv: '7,5 M€', ac: '7,1 M€', cpi: 0.99, spi: 0.93, cv: -100000, sv: -500000, progress: 47 },
    { nombre: 'F113', bac: '13,5 M€', ev: '4 M€', pv: '4 M€', ac: '3,8 M€', cpi: 1.05, spi: 1.00, cv: 200000, sv: 0, progress: 30 },
  ];

  const DetailTableCustomRangesData1 = {
    CPI: { bad: 0.98, good: 1.02 },  // < 0.98 rojo, > 1.02 verde
    SPI: { bad: 0.98, good: 1.02 },
    CV: { bad: -50000, good: 50000 },
    SV: { bad: -50000, good: 50000 },
  };

  return (
    <Box className="content">

      <Box 
        sx={{ 
          flexGrow: 1, 
          width: { xs: "100%", md: "100%", lg: '75%' } 
        }} >
        <Grid container spacing={2}>
          {cardItems1.map((item) => (
            <Grid key={item.id} size={{ xs: 6, md: 3, lg: 2 }}>
              <Cards 
                sx={{ width: '100%' }} 
                id={item.id}
                title={item.title} 
                percentage={item.percentage}
                label={item.label} 
                origin= "visionGeneral"
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box className="mt-4">
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6, lg: 6 }}>
            <Card variant="outlined" className="card">
              <Typography variant="h5" gutterBottom>
                Estado del proyecto por categoria
              </Typography>
              <BubbleChart 
                data={[
                  { id: 1, x: 1.2, y: 1.3, size: 200, label: 'Proyecto A' },
                  { id: 2, x: 0.8, y: 0.9, size: 150, label: 'Proyecto B' },
                ]}
                width={700}
                height={500}
              />
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 6 }}>
              <BasicTable
                headTable={["Categoría", "CPI", "SPI", "CV", "SV"]}
                contentTable={[
                  ["Categoría 1", 1.10, 1.05, "100 mil €", "10d"],
                  ["Categoría 2", 0.90, 0.95, "-150 mil €", "-8d"],
                  ["Categoría 3", 0.90, 1.05, "-12 mil €", "3d"],
                  ["Categoría 4", 0.90, 1.05, "-12 mil €", "3d"],
                  ["Categoría 5", 0.90, 1.05, "-12 mil €", "3d"],
                  ["Categoría 6", 0.90, 1.05, "-12 mil €", "3d"],
                  ["Categoría 7", 0.90, 1.05, "-12 mil €", "3d"],
                  ["Categoría 8", 0.90, 1.05, "-12 mil €", "3d"],
                ]}
              />
            
          </Grid>
        </Grid>
      </Box>


      <Box 
        sx={{ 
          flexGrow: 1, 
          width: { xs: "100%", md: "100%", lg: '75%' } 
        }} 
        className="mt-5"
      >
        <Typography variant="h5" gutterBottom fontWeight="bold" sx={{textAlign: 'left'}}>
          Avance de GRAFO
        </Typography>
        <Grid container spacing={2}>
          {cardItems2.map((item) => (
            <Grid key={item.id} size={{ xs: 6, md: 3, lg: 2 }}>
              <Cards 
                sx={{ width: '100%' }} 
                id={item.id}
                title={item.title} 
                percentage={item.percentage} 
                label={item.label}
                origin= "visionGeneral"
              />
            </Grid>
          ))}
        </Grid>
      </Box>


      <Box className="mt-4">
        <Card variant="outlined" className="card py-4">
          <InlineForm />
        </Card>
      </Box>


      <Box className="mt-4">
        <Card variant="outlined" className="card">
          <Typography variant="h5" gutterBottom>
            Detalle por proyecto
          </Typography>

          <DetailTable 
            rows={DetailTableData1}
            ranges={DetailTableCustomRangesData1}
            showBAC={true}
            showEV={true}
            showPV={true}
            showAC={true}
            showCPI={true}
            showSPI={true}
            showCV={true}
            showSV={true}
            showProgress={true}
          />
        </Card>
      </Box>


      <Box className="mt-4">
        <Card variant="outlined" className="card py-4">
          <InlineForm />
        </Card>
      </Box>

          
      <Box className="mt-4">
        <Card variant="outlined" className="card">
          <Typography variant="h5" gutterBottom>
            Detalle por PEP
          </Typography>
          <DetailTable 
            rows={DetailTableData1}
            ranges={DetailTableCustomRangesData1}
            showBAC={true}
            showEV={true}
            showPV={true}
            showAC={true}
            showCPI={true}
            showSPI={true}
            showCV={true}
            showSV={true}
            showProgress={true}
          />
        </Card>
      </Box>

    </Box>
  );
}