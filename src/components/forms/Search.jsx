import React from 'react';
import { OutlinedInput, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Search({ 
  placeholder = "Buscar Proyecto, PEP....",
  onChange 
}) {
  return (
    <OutlinedInput
      fullWidth
      placeholder={placeholder}
      onChange={onChange}
      endAdornment={
        <InputAdornment position="end">
          <SearchIcon sx={{ color: '#999', fontSize: 28 }} />
        </InputAdornment>
      }
      sx={{
        backgroundColor: '#fff',
        borderRadius: 3,
        
        '& input': {
          color: '#6b7280',
          paddingLeft: 2,  
          fontSize: '0.95rem'
        },

        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: '#eef2f6',
          borderWidth: 1.5,
        },
        
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: '#d1d5db',
        },
        
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#90caf9',
          borderWidth: 1.5,
        }
      }}
    />
  );
}