import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import DocSearch from '../components/forms/DocSearch.jsx';
import { documentacionMock } from '../mocks';

export default function Documentacion() {
  const [searchPlaceholder, setSearchPlaceholder] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Aquí irán las llamadas al API y la carga de datos en los componentes
    setSearchPlaceholder(documentacionMock.searchPlaceholder);
    setCategories(documentacionMock.categories);
  }, []);

  return (
    <Box className="content">
      <h2>Documentacion</h2>
      <p>Bienvenido al panel de Documentacion del proyecto.</p>
      <DocSearch
        placeholder={searchPlaceholder}
        categories={categories}
        onSearch={(value) => console.log('Buscando:', value)}
        onCategoryChange={(category) => console.log('Categoría:', category)}
        onViewChange={(view) => console.log('Vista:', view)}
        onSortChange={() => console.log('Ordenar')}
      />
    </Box>
  );
}