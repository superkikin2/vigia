import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import '../styles/ChipsGroup.css';

export default function ChipsGroup({ menuItems = [], onItemClick }) {
 
  const handleClick = (text) => {
    if (onItemClick) {
      onItemClick(text);
    }
  };

  return (
    <Box className="text-start">
      {menuItems.map((item, index) => (
        <Chip
          key={index}
          label={item.text}
          className={item.class}
          onClick={() => handleClick(item.text)}
          sx={{ cursor: onItemClick ? 'pointer' : 'default' }}
        />
      ))}
    </Box>
  );
}