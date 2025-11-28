import { useState } from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";

import EditSquareIcon from '@mui/icons-material/EditSquare';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import AddIcon from '@mui/icons-material/Add';

import MicIcon from '@mui/icons-material/Mic';

import { HiSparkles } from "react-icons/hi";

import { Box, Typography, Paper, InputBase, ButtonGroup, Button, IconButton} from "@mui/material";

import ChipsGroup from "./ChipsGroup";

import '../styles/AssistantIA.css';

const menuItems = [
  { text: 'Valor Ganado' },
  { text: 'Planificación' },
  { text: 'Riesgos' },
  { text: 'Reuniones' },
];


export default function AssistantIA({ isOpen, onToggle }) {
  const [value, setValue] = useState("");
  const [isClosing, setIsClosing] = useState(false);
  
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onToggle();
    }, 300); // Duración de la animación
  };
  
  const handleChange = (e) => {
    const text = e.target.value;
  
    // Contar saltos de línea
    const lineBreaks = (text.match(/\n/g) || []).length;
  
    // Permitir solo hasta 3
    if (lineBreaks > 3) return;
  
    setValue(text);
  };
  return (
    <>
      <Link href="#" underline="none" className="ia-link" onClick={handleClose} style={{ cursor: 'pointer' }}>
        <HiSparkles />
        Asistente IA
      </Link>
      { isOpen && (
        <Box className={`ia-panel ${isClosing ? 'ia-panel-closing' : ''}`}>
          <Box className="ia-content-1">
            <Typography className="ia-header-text" variant="body1" fontWeight="bold">
              <HiSparkles /> 
              Asistente IA
            </Typography>
            <Box className="ia-options">
                <Box>
                  <IconButton>
                    <EditSquareIcon />
                  </IconButton>
                  <IconButton className="ia-option-button">
                    <FolderCopyIcon />
                  </IconButton>
                </Box>
                
              <IconButton onClick={handleClose} style={{ cursor: 'pointer' }}>
                <MdClose />
              </IconButton>

            </Box>
          </Box>
          <Box className="ia-content-2">

            <ChipsGroup menuItems={menuItems} />

            <Typography variant="h4" className="black">
              Hola, soy VigIA ¿cómo te puedo ayudar hoy?
            </Typography>

            <Paper elevation={3} className="paper">
              <InputBase
                fullWidth
                value={value}
                onChange={handleChange}
                multiline
                placeholder="Escribe tu mensaje"
                sx={{ fontSize: 16 }} />

              <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                <IconButton>
                  <AddIcon />
                </IconButton>
                <IconButton>
                  <MicIcon />
                </IconButton>
              </Box>
            </Paper>


            <ButtonGroup orientation="vertical" aria-label="Vertical button group" className="buttonGroup">
              <Button variant="outlined" fullWidth>
                Dame los aspectos más relevantes que debo tener en cuenta hoy
              </Button>
              <Button variant="outlined" fullWidth>
                Informame de las reuniones más importantes de hoy
              </Button>
              <Button variant="outlined" fullWidth>
                Dame un resumen del proyecto
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      )}
    </>
  );
}
