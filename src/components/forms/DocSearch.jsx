import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, TextField, InputAdornment, IconButton, ToggleButton, ToggleButtonGroup } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import GridViewIcon from '@mui/icons-material/GridView';
import SwapVertIcon from '@mui/icons-material/SwapVert';

export default function DocSearch({
  placeholder = 'Buscar documentos...',
  categories = ['Todos', 'Planos', 'Especificaciones', 'Actas', 'Informes', 'Presentaciones'],
  onSearch,
  onCategoryChange,
  onViewChange,
  onSortChange,
}) {
  const [selectedCategory, setSelectedCategory] = React.useState(categories[0] || 'Todos');
  const [searchValue, setSearchValue] = React.useState('');

  const handleCategoryChange = (event, newCategory) => {
    if (newCategory !== null) {
      setSelectedCategory(newCategory);
      onCategoryChange?.(newCategory);
    }
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    onSearch?.(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {/* Barra de búsqueda con iconos */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <TextField
          fullWidth
          placeholder={placeholder}
          value={searchValue}
          onChange={handleSearchChange}
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              backgroundColor: '#fff',
              '& fieldset': {
                borderColor: '#e0e0e0',
              },
              '&:hover fieldset': {
                borderColor: '#bdbdbd',
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#999' }} />
              </InputAdornment>
            ),
          }}
        />
        
        <IconButton
          onClick={() => onViewChange?.('grid')}
          sx={{
            backgroundColor: '#1976d2',
            color: '#fff',
            borderRadius: 2,
            p: 1.5,
            '&:hover': {
              backgroundColor: '#1565c0',
            },
          }}
        >
          <GridViewIcon />
        </IconButton>

        <IconButton
          onClick={() => onSortChange?.()}
          sx={{
            backgroundColor: '#fff',
            color: '#666',
            borderRadius: 2,
            p: 1.5,
            border: '1px solid #e0e0e0',
            '&:hover': {
              backgroundColor: '#f5f5f5',
            },
          }}
        >
          <SwapVertIcon />
        </IconButton>
      </Box>

      {/* Categorías como ToggleButtons */}
      <ToggleButtonGroup
        value={selectedCategory}
        exclusive
        onChange={handleCategoryChange}
        aria-label="categorías de documentos"
        sx={{
          gap: 1,
          flexWrap: 'wrap',
          '& .MuiToggleButtonGroup-grouped': {
            border: 'none',
            borderRadius: '20px !important',
            px: 2.5,
            py: 0.75,
            textTransform: 'none',
            fontWeight: 500,
            color: '#333',
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: '#f5f5f5',
            },
            '&.Mui-selected': {
              backgroundColor: '#1976d2',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#1565c0',
              },
            },
          },
        }}
      >
        {categories.map((category) => (
          <ToggleButton key={category} value={category}>
            {category}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
}

DocSearch.propTypes = {
  placeholder: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
  onSearch: PropTypes.func,
  onCategoryChange: PropTypes.func,
  onViewChange: PropTypes.func,
  onSortChange: PropTypes.func,
};
