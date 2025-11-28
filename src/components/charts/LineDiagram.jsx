import { LineChart } from '@mui/x-charts/LineChart';

const xLabels = ['Ene', 'Feb', 'Mar', 'Abr'];

export default function LineDiagram() {
  return (
    <LineChart
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      series={[
        {
          label: 'Leyenda 1',
          data: [0.97, 0.85, 0.86, 0.72],
          color: '#1565c0',
          curve: 'natural', // línea suave
        },
        {
          label: 'Leyenda 1',
          data: [0.75, 0.80, 0.79, 0.88],
          color: '#66bb6a',
          curve: 'natural',
        },
      ]}
      height={300}
      margin={{ top: 40, bottom: 50 }}
    />
  );
}