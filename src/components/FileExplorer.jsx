import React from 'react';
import { useState, useEffect } from 'react';

import { Box, Typography, Grid } from '@mui/material';
import { Paper } from '@mui/material';
import { SvgIcon } from '@mui/material';

import DocSearch from '../components/forms/DocSearch';
import { documentacionMock } from '../mocks/documentacionMock';
import File from './File';

const AbstractIcon = ({ color }) => (
  <SvgIcon sx={{ fontSize: 40, color: color }} viewBox="0 0 24 24">
    <path 
      d="M6,6 C6,6 16,6 16,11 C16,16 11,13 11,19 L9,17 M11,19 L13,17" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </SvgIcon>
);

const filesData = [
  { id: 1, title: "Especificación Técnica SCOMBA v3.1", date: "2024-07-28", size: "2.5 MB", color: "#ff5252" },
  { id: 2, title: "Acta Comité de Riesgos - 25/07/24", date: "2024-07-27", size: "128 KB", color: "#448aff" }, // Azul
  { id: 3, title: "Planning Detallado WP 2.3", date: "2024-07-29", size: "5.1 MB", color: "#00c853" }, // Verde
  { id: 4, title: "Presentación Avances Julio", date: "2024-07-22", size: "10.2 MB", color: "#ffab40" }, // Naranja
  { id: 5, title: "Informe de Pruebas de Propulsión", date: "2024-07-15", size: "1.8 MB", color: "#ff5252" }, // Rojo
  { id: 6, title: "Plano General de Cubiertas", date: "2024-06-30", size: "15.7 MB", color: "#ff5252" }, // Rojo
  { id: 7, title: "Análisis de Valor Ganado - Q2", date: "2024-07-05", size: "850 KB", color: "#00c853" }, // Verde
  { id: 8, title: "Acta Reunión Proveedor Acero", date: "2024-07-28", size: "95 KB", color: "#448aff" }, // Azul
];

export default function FileExplorer() {
    const [searchPlaceholder, setSearchPlaceholder] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Aquí irán las llamadas al API y la carga de datos en los componentes
        setSearchPlaceholder(documentacionMock.searchPlaceholder);
        setCategories(documentacionMock.categories);
    }, []);
    return (

        <Box sx={{ p: 4, }}>
      
            {/* Título de la Sección */}
            <Typography 
                variant="h5" 
                sx={{
                    display: 'flex',
                    fontWeight: 800, 
                    color: '#2c3e50', 
                    mb: 3 
                }}
            >
                Explorador de Archivos
            </Typography>
            <Paper
                sx={{
                p: '16px'
                }}
            >
                <DocSearch
                    className="doc-search-bar"
                    placeholder={searchPlaceholder}
                    categories={categories}
                    onSearch={(value) => console.log('Buscando:', value)}
                    onCategoryChange={(category) => console.log('Categoría:', category)}
                    onViewChange={(view) => console.log('Vista:', view)}
                    onSortChange={() => console.log('Ordenar')}
                />
            </Paper>
            <Grid container spacing={3} sx={{ mt: 2 }}>
                {filesData.map((file) => (
                <Grid item xs={12} sm={6} md={5} lg={3} key={file.id} display="flex" justifyContent="center">
                    <File 
                        icon={<AbstractIcon color={file.color} />} 
                        title={file.title}
                        date={file.date}
                        size={file.size}
                    />
                </Grid>
                ))}
            </Grid>
      </Box>
    )
}