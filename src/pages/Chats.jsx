import { useEffect } from 'react';
import { Box } from '@mui/material';

export default function Chats() {

  useEffect(() => {
    // Aquí irán las llamadas al API y la carga de datos en los componentes
  }, []);

  return (
    <Box className="content">
      <h2>Chats</h2>
      <p>Bienvenido al panel de chats del proyecto.</p>
    </Box>
  );
}