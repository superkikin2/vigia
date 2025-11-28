import { BarChart } from '@mui/x-charts/BarChart';
import { dataset, valueFormatter } from '../../dataset/weather';

const chartSetting = {
  yAxis: [
    {
      width: 20,
      tickLabelStyle: { display: "none" }
    },
  ],
  xAxis: [{ dataKey: 'month' }],
  height: 450,
};


export default function BarsDataset() {
  return (
    <BarChart
      dataset={dataset}
      
      series={[
        { dataKey: 'london', label: 'London', valueFormatter, color: "#1976d2" },
        { dataKey: 'paris', label: 'Paris', valueFormatter, color: "#1976d2" },
        { dataKey: 'newYork', label: 'New York', valueFormatter, color: "#1976d2" },
      ]}
      slotProps={{
        legend: { hidden: true },
      }}
      {...chartSetting}
    />
  );
}