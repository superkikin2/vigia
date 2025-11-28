import React from 'react';
import { useState, useEffect } from 'react';

import { Box, Typography, Grid } from '@mui/material';
import { Paper } from '@mui/material';

import DocSearch from '../components/forms/DocSearch';
import { documentacionMock } from '../mocks/documentacionMock';
import { filesData } from '../mocks/documentacionMock';
import File from './File';
import DocumentIcon from '../assets/Document.svg?react';

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
                        icon={<DocumentIcon style={{ width: 40, height: 40, color: file.color }} />} 
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