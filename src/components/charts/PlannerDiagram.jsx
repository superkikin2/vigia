import { Box, Typography } from '@mui/material';

// Datos de ejemplo para el diagrama de planificación
const defaultTasks = [
  { id: 1, name: 'Integración de sonares', start: 1, end: 3 },
  { id: 2, name: 'Soldadura del casco', start: 2, end: 5 },
  { id: 3, name: 'Prueba de los sistemas eléctricos', start: 4, end: 6 },
  { id: 4, name: 'Prueba de comunicaciones', start: 6, end: 7 },
];

// Columnas de tiempo (semanas, sprints, etc.)
const defaultColumns = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7'];

export default function PlannerDiagram({
  tasks = defaultTasks,
  columns = defaultColumns,
  title = 'PLANIFICACIÓN',
  barColor = '#1565c0',
  headerBgColor = '#00326B',
  headerTextColor = '#ffffff',
  columnBgColor = '#EDF4FC',
  columnTextColor = '#005DB5',
  taskBgColor = '#EAEAEA',
  taskTextColor = '#6C6C6C',
  rowHeight = 70,
}) {
  const totalColumns = columns.length;

  return (
    <Box sx={{ width: '100%', overflow: 'auto' }}>
      {/* Header */}
      <Box sx={{ display: 'flex' }}>
        {/* Título de la columna de tareas */}
        <Box
          sx={{
            minWidth: 280,
            backgroundColor: headerBgColor,
            color: headerTextColor,
            padding: 2,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>
        </Box>

        {/* Columnas de tiempo */}
        <Box
          sx={{
            display: 'flex',
            flex: 1,
            borderLeft: '2px solid #7ba3d4',
            borderRight: '2px solid #7ba3d4',
            borderTop: '2px solid #7ba3d4',
          }}
        >
          {columns.map((col, index) => (
            <Box
              key={index}
              sx={{
                flex: 1,
                minWidth: 80,
                backgroundColor: columnBgColor,
                borderLeft: index > 0 ? '3px solid #7ba3d4' : 'none',
                padding: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="subtitle1" fontWeight="medium" color={columnTextColor}>
                {col}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Filas de tareas */}
      {tasks.map((task, taskIndex) => (
        <Box
          key={task.id}
          sx={{
            display: 'flex',
            minHeight: rowHeight,
          }}
        >
          {/* Nombre de la tarea */}
          <Box
            sx={{
              minWidth: 280,
              padding: 2,
              display: 'flex',
              alignItems: 'center',
              backgroundColor: taskBgColor,
            }}
          >
            <Typography variant="body1" sx={{ color: taskTextColor }}>
              {task.name}
            </Typography>
          </Box>

          {/* Celdas de tiempo con barra */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              position: 'relative',
              borderLeft: '2px solid #7ba3d4',
              borderRight: '2px solid #7ba3d4',
              borderBottom: taskIndex === tasks.length - 1 ? '2px solid #7ba3d4' : 'none',
            }}
          >
            {columns.map((_, colIndex) => (
              <Box
                key={colIndex}
                sx={{
                  flex: 1,
                  minWidth: 80,
                  backgroundColor: columnBgColor,
                  borderLeft: colIndex > 0 ? '3px solid #7ba3d4' : 'none',
                }}
              />
            ))}

            {/* Barra de progreso */}
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                left: `calc(${((task.start - 1) / totalColumns) * 100}% + 10px)`,
                width: `calc(${((task.end - task.start + 1) / totalColumns) * 100}% - 20px)`,
                height: 14,
                backgroundColor: barColor,
                borderRadius: 7,
              }}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
}