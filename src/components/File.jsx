import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import '../styles/File.css';

export default function File({ icon, title, date, size }) {
  return (
    <Card 
      variant="outlined" 
      className="file-card"
    >
      <CardContent className="file-card-content">
        
        <div className="file-icon">
          {icon}
        </div>

        <Typography 
          variant="subtitle1" 
          className="file-title"
        >
          {title}
        </Typography>

        <Typography 
          variant="caption" 
          className="file-metadata"
        >
          {date} · {size}
        </Typography>

      </CardContent>
    </Card>
  );
}