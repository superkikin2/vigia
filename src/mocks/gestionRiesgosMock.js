export const gestionRiesgosMock = {
  cardItems: [
    { id: 1, title: 'Factor de riesgo', percentage: '0,93', text: '', label: '+2.5 pp vs sem. ant.' },
    { id: 2, title: 'Riesgos activos', percentage: '7', text: '3.0M € / 8.5M €', label: '-1.2 pp vs sem. ant.' },
    { id: 3, title: 'Nuevos este mes', percentage: '4', text: '', label: '+0 vs sem. ant.' },
    { id: 4, title: 'Cerrados', percentage: '9', text: 'ETC 6,2M €', label: '+0.1M vs sem. ant.' }
  ],
  riskData: [
    {
      id: 'R-012',
      nombre: 'Retraso Suministro Acero Especial',
      puntuacionActual: 'Alta',
      estrategiaMitigacion: 'Activar proveedor secundario y negociar adelanto de entrega parcial.',
      puntuacionObjetivo: 'Media',
      details: [
        { title: 'Descripción', text: 'El proveedor principal de acero especial ha notificado posibles retrasos en la entrega del lote para los bloques de proa.' },
        { title: 'Causa', text: 'Crisis de materias primas a nivel global y aumento de la demanda.' },
        { title: 'Consecuencia', text: 'Paralización de la línea de producción del bloque B-101 y B-102, con un impacto estimado de -15 días en el hito M4.' },
      ],
    },
    {
      id: 'R-008',
      nombre: 'Incompatibilidad Interfaz SCOMBA',
      puntuacionActual: 'Alta',
      estrategiaMitigacion: 'Desarrollar parche de software y reprogramar pruebas de integración.',
      puntuacionObjetivo: 'Baja',
      details: [
        { title: 'Descripción', text: 'El proveedor principal de acero especial ha notificado posibles retrasos en la entrega del lote para los bloques de proa.' },
        { title: 'Causa', text: 'Crisis de materias primas a nivel global y aumento de la demanda.' },
        { title: 'Consecuencia', text: 'Paralización de la línea de producción del bloque B-101 y B-102, con un impacto estimado de -15 días en el hito M4.' },
      ],
    },
    {
      id: 'R-0S3',
      nombre: 'Lorem Ipsum Dolor Sit Amet',
      puntuacionActual: 'Baja',
      estrategiaMitigacion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      puntuacionObjetivo: 'Media',
      details: [
        { title: 'Descripción', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { title: 'Causa', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { title: 'Consecuencia', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      ],
    },
  ],
  heatmapData: [
    { row: 0, col: 0, value: 4 },
    { row: 0, col: 2, value: 3 },
    { row: 1, col: 1, value: 2 },
    { row: 1, col: 2, value: 2 },
    { row: 2, col: 2, value: 2 },
    { row: 2, col: 3, value: 1 },
  ],
  heatmapRowLabels: ['Baja', 'Media', 'Alta'],
  heatmapColLabels: ['Menor', 'Moderado', 'Mayor', 'Crítico'],
  top5Data: [
    { id: 1, nombre: 'R-008 Integración SCOMBA', prob: '70%', impacto: 'Retraso Hito M5', nivel: 'Alta' },
    { id: 2, nombre: 'R-008 Integración SCOMBA', prob: '70%', impacto: 'Retraso Hito M5', nivel: 'Media' },
    { id: 3, nombre: 'R-008 Integración SCOMBA', prob: '70%', impacto: 'Retraso Hito M5', nivel: 'Baja' },
    { id: 4, nombre: 'R-008 Integración SCOMBA', prob: '70%', impacto: 'Retraso Hito M5', nivel: 'Baja' },
    { id: 5, nombre: 'R-008 Integración SCOMBA', prob: '70%', impacto: 'Retraso Hito M5', nivel: 'Alta' },
  ]
};
