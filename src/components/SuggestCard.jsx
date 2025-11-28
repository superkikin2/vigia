import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Box, 
  Chip, 
  Stack, 
  IconButton 
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import '../styles/SuggestCard.css';

export default function SuggestCard({ 
  icon,
  title = "Especificación Técnica SCOMBA v3.1",
  date = "Ayer",
  version = "3.1",
  size = "2.5 MB",
  reason = "Relevante para el riesgo R-008 que acabas de consultar.",
  tag = "Sugerencia",
  onPreviewClick, // Callbacks opcionales para funcionalidad
  onDownloadClick
}) {
  return (
    <Card 
      variant="outlined" 
      className="suggest-card"
    >
      <CardContent className="suggest-card-content">
        
        {/* Cabecera: Icono dinámico y Tag */}
        <div className="suggest-card-header">
          <div className="suggest-card-icon">
            {icon}
          </div>
          
          <Chip 
            label={tag} 
            size="small"
            className="suggest-card-chip"
          />
        </div>

        {/* Título */}
        <Typography variant="h6" className="suggest-card-title">
          {title}
        </Typography>

        {/* Metadatos */}
        <Typography variant="body2" color="text.secondary" className="suggest-card-metadata">
          {date} · {version} · {size}
        </Typography>

        {/* Caja Razón IA */}
        <div className="suggest-card-reason-box">
          <Typography variant="body2" className="suggest-card-reason-text">
            <span className="suggest-card-reason-label">Razón IA:</span>{' '}
            <span className="suggest-card-reason-content">
              {reason}
            </span>
          </Typography>
        </div>

        {/* Botones */}
        <Stack direction="row" spacing={1.5}>
          <Button 
            variant="contained" 
            disableElevation
            fullWidth
            onClick={onPreviewClick}
            className="suggest-card-button-preview"
          >
            Previsualizar
          </Button>

          <div className="suggest-card-download-container">
            <IconButton 
              onClick={onDownloadClick}
              className="suggest-card-icon-button"
            >
              <DownloadIcon />
            </IconButton>
          </div>
        </Stack>

      </CardContent>
    </Card>
  );
}