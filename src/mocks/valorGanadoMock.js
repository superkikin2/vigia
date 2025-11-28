export const valorGanadoMock = {
  cardItems1: [
    { id: 1, title: 'CPI', percentage: '0.97', text: '', label: '+0.2% vs.meta' },
    { id: 2, title: 'SPI', percentage: '1.02', text: '', label: '+0.01' },
    { id: 3, title: 'CV (€)', percentage: '-1.5M', text: '', label: 'Desviación' },
    { id: 4, title: 'SV (d)', percentage: '+5d', text: '', label: '+1d' },
    { id: 5, title: 'EAC (€)', percentage: '8.9M', text: '', label: '+0.04M' },
    { id: 6, title: 'ETC (€)', percentage: '5.9M', text: '', label: 'XXXX' },
  ],
  cardItems2: [
    { id: 1, title: 'CPI', percentage: '0.97', text: '', label: '+0.2% vs.meta' },
    { id: 2, title: 'SPI', percentage: '1.02', text: '', label: '+0.01' },
    { id: 3, title: 'BAC', percentage: '40.5M', text: '', label: '' },
    { id: 4, title: 'EV', percentage: '17M', text: '', label: '+1d' },
    { id: 5, title: 'PV', percentage: '8.9M', text: '', label: '+0.04M' },
    { id: 6, title: 'AC', percentage: '5.9M', text: '', label: 'XXXX' },
  ],
  detailTableData1: [
    { nombre: 'F111', bac: '12 M€', ev: '6 M€', pv: '5,8 M€', ac: '6,2 M€', cpi: 0.97, spi: 1.03, cv: -200000, sv: 200000, progress: 50 },
    { nombre: 'F112', bac: '15 M€', ev: '7 M€', pv: '7,5 M€', ac: '7,1 M€', cpi: 0.99, spi: 0.93, cv: -100000, sv: -500000, progress: 47 },
    { nombre: 'F113', bac: '13,5 M€', ev: '4 M€', pv: '4 M€', ac: '3,8 M€', cpi: 1.05, spi: 1.00, cv: 200000, sv: 0, progress: 30 },
  ],
  detailTableCustomRangesData1: {
    CPI: { bad: 0.98, good: 1.02 },
    SPI: { bad: 0.98, good: 1.02 },
    CV: { bad: -50000, good: 50000 },
    SV: { bad: -50000, good: 50000 },
  },
  categoriesData: [
    { categoria: 'Categoría 1', cpi: 1.10, spi: 1.05, cv: '200 mil €', sv: '10d' },
    { categoria: 'Categoría 2', cpi: 0.90, spi: 0.95, cv: '-150 mil €', sv: '-8d' },
    { categoria: 'Categoría 4', cpi: 0.90, spi: 1.05, cv: '-12 mil €', sv: '3d' },
    { categoria: 'Categoría 5', cpi: 0.90, spi: 1.05, cv: '-12 mil €', sv: '3d' },
    { categoria: 'Categoría 6', cpi: 0.90, spi: 1.05, cv: '-12 mil €', sv: '3d' },
    { categoria: 'Categoría 7', cpi: 0.90, spi: 1.05, cv: '-12 mil €', sv: '3d' },
    { categoria: 'Categoría 8', cpi: 0.90, spi: 1.05, cv: '-12 mil €', sv: '3d' },
  ],
  bubbleChartData: [
    { id: 1, x: 1.2, y: 1.3, size: 200, label: 'Proyecto A' },
    { id: 2, x: 0.8, y: 0.9, size: 150, label: 'Proyecto B' },
  ]
};
