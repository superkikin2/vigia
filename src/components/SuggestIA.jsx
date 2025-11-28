import { SvgIcon } from '@mui/material';
import { HiSparkles } from "react-icons/hi";

import { Box, Stack, Typography } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';

import SuggestCard from '../components/SuggestCard';
import '../styles/SuggestIA.css';

const RedAbstractIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M5,5 C5,5 15,5 15,10 C15,15 10,12 10,18 L8,16 M10,18 L12,16" 
          fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </SvgIcon>
);

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
                    icon={<RedAbstractIcon fontSize="inherit" />} 
                />
                </div>

                <div className="suggest-card-document">
                <SuggestCard 
                    title="Contrato de Servicios.pdf"
                    icon={<DescriptionIcon fontSize="inherit" />} 
                    reason="Documento legal pendiente de firma."
                />
                </div>
                
                <div className="suggest-card-document">
                <SuggestCard 
                    title="Contrato de Servicios.pdf"
                    icon={<DescriptionIcon fontSize="inherit" />} 
                    reason="Documento legal pendiente de firma."
                />
                </div>
            
            </div>
        </div>
    )
}