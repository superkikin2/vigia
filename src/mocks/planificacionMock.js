export const planificacionMock = {
  cardItems: [
    { id: 1, title: 'Actividades en camino crítico', percentage: '32', text: '', label: '+5.2% vs. sem.ant' },
    { id: 2, title: 'CC sin variación en el avance', percentage: '18', text: '3.0M € / 8.5M €', label: '+5.2% vs. sem.ant' },
    { id: 3, title: 'CC sin variación en el avance', percentage: '4', text: '', label: '+5.2% vs. sem.ant' },
    { id: 4, title: 'CC sin avance no finalizados', percentage: '9', text: '', label: '+5.2% vs. sem.ant' }
  ],
  tableRows: [
    { 
      actividad: 'Integración de sonares', 
      subtitulo: 'Producción', 
      planificados: '90d', 
      consumidos: '95d', 
      retraso: '+5d', 
      completado: '98%',
      estado: 'En riesgo'
    },
    { 
      actividad: 'Integración de sonares', 
      subtitulo: 'Producción', 
      planificados: '120d', 
      consumidos: '135d', 
      retraso: '+5d', 
      completado: '98%',
      estado: 'Retrasado > 7d'
    },
    { 
      actividad: 'Integración de sonares', 
      subtitulo: 'Producción', 
      planificados: '30d', 
      consumidos: '28d', 
      retraso: '-2d', 
      completado: '98%',
      estado: 'Camino Crítico'
    }
  ],
  plannerTasks: [
    { id: 1, name: 'Tarea 1', start: 1, end: 3 },
    { id: 2, name: 'Tarea 2', start: 2, end: 5 },
  ],
  plannerColumns: ['S1', 'S2', 'S3', 'S4', 'S5']
};
