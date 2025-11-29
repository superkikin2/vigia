import { HiSparkles } from "react-icons/hi";

import { Box, Stack, Typography } from '@mui/material';

import SuggestCard from '../components/SuggestCard';
import '../styles/SuggestIA.css';
import DocumentIcon from '../assets/Document.svg?react';

export default function SuggestIA() {
    return (
        <div className="suggest-card-container">
            <Box sx={{ bgcolor: '#f4f6f9', p: 2 }}>
            
                <Stack direction="row" alignItems="center" spacing={1.5}>
                
                <HiSparkles 
                    style={{ 
                    color: '#1976d2', 
                    fontSize: 28
                    }} 
                />

                <Typography 
                    variant="h6" 
                    component="h2"
                    sx={{ 
                    fontWeight: 800,
                    color: '#2c3e50',
                    letterSpacing: -0.5,
                    lineHeight: 1
                    }}
                >
                    Sugerencias de la IA
                </Typography>

                </Stack>
            </Box>
            <div className='suggest-card-list'>
            
                <div className="suggest-card-document">
                <SuggestCard 
                    icon={<DocumentIcon style={{ width: 40, height: 40, color: '#ff5252' }} />} 
                />
                </div>

                <div className="suggest-card-document">
                <SuggestCard 
                    title="Contrato de Servicios.pdf"
                    icon={<DocumentIcon style={{ width: 40, height: 40, color: '#ff5252' }} />} 
                    reason="Documento legal pendiente de firma."
                />
                </div>
                
                <div className="suggest-card-document">
                <SuggestCard 
                    title="Contrato de Servicios.pdf"
                    icon={<DocumentIcon style={{ width: 40, height: 40, color: '#ff5252' }} />} 
                    reason="Documento legal pendiente de firma."
                />
                </div>
            
            </div>
        </div>
    )
}