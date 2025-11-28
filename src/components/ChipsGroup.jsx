import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import '../styles/ChipsGroup.css';

//const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

export default function ChipsGroup({menuItems = []}) {
 
  return (
    <Box className="text-start">
      {menuItems.map((item, index) => (
        <Chip
          key={index}
          label={item.text}
          className={item.class}
        />
      ))}
    </Box>
  );
}