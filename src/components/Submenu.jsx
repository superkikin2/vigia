import * as React from 'react';
import { Avatar, Box, Typography, Link } from '@mui/material';
import { BsBell } from "react-icons/bs";
import '../styles/Submenu.css';

export default function Submenu() {
    return (
        <Box className="box-avatar">
            <BsBell  color="var(--primary-blue)" />
            <Avatar className="avatar"> 
                <Typography>JD</Typography>
            </Avatar>
             <Link href="#" underline="always">
                Asistente IA
            </Link>

{/*
            <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', lineHeight: 1 }}>
                Juan Díaz
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9, lineHeight: 1.2 }}>
                Jefe de Proyecto
                </Typography>
            </Box> */}
        </Box>
    );
}