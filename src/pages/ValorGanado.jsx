import { useState, useEffect } from 'react';
import Cards from '../components/Cards'
import InlineForm from '../components/forms/InlineForm.jsx';
import { Box, Grid, Typography, Card } from '@mui/material';
import CategoriesTable from '../components/tables/CategoriesTable.jsx';
import BubbleChart from '../components/charts/BubbleChart.jsx';
import { valorGanadoMock } from '../mocks';
//import '../styles/pages/ValorGanado.css';
import DetailTable from '../components/tables/DetailTable.jsx';

export default function ValorGanado() {
  const [cardItems1, setCardItems1] = useState([]);
  const [cardItems2, setCardItems2] = useState([]);
  const [detailTableData1, setDetailTableData1] = useState([]);
  const [detailTableCustomRangesData1, setDetailTableCustomRangesData1] = useState({});
  const [categoriesData, setCategoriesData] = useState([]);
  const [bubbleChartData, setBubbleChartData] = useState([]);

  useEffect(() => {
    // Aquí irán las llamadas al API y la carga de datos en los componentes
    setCardItems1(valorGanadoMock.cardItems1);
    setCardItems2(valorGanadoMock.cardItems2);
    setDetailTableData1(valorGanadoMock.detailTableData1);
    setDetailTableCustomRangesData1(valorGanadoMock.detailTableCustomRangesData1);
    setCategoriesData(valorGanadoMock.categoriesData);
    setBubbleChartData(valorGanadoMock.bubbleChartData);
  }, []);

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
                data={bubbleChartData}
                width={700}
                height={500}
              />
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 6 }}>
              <CategoriesTable rows={categoriesData} />
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
            rows={detailTableData1}
            ranges={detailTableCustomRangesData1}
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
            rows={detailTableData1}
            ranges={detailTableCustomRangesData1}
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