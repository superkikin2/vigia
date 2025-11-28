import { Container, Box, Typography, Paper, InputBase, ButtonGroup, Button} from "@mui/material";
import ChipsGroup from "./ChipsGroup";
import { MdClose } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import '../styles/AssistantIA.css';
import { useState } from "react";


const menuItems = [
    { text: 'Valor Ganado' },
    { text: 'Planificación' },
    { text: 'Riesgos' },
    { text: 'Reuniones' },
];


export default function AssistantIA() {
  const [value, setValue] = useState("");
  
  const handleChange = (e) => {
    const text = e.target.value;
  
    // Contar saltos de línea
    const lineBreaks = (text.match(/\n/g) || []).length;
  
    // Permitir solo hasta 3
    if (lineBreaks > 3) return;
  
    setValue(text);
  };
  return (
    <Container container>

      <Box className="ia-content-1">
        <Typography variant="body1" fontWeight="bold"> Asistente IA</Typography>
        <MdClose/>
      </Box>

      <Box className="ia-content-2" >
        
        <ChipsGroup menuItems={menuItems}/>

        <Typography variant="h4">
          Hola, soy VigIA ¿cómo te puedo ayudar hoy?
        </Typography>

        <Paper elevation={3} className="paper">
          <InputBase
            fullWidth
            value={value}
            onChange={handleChange}
            multiline
            placeholder="Escribe tu mensaje"
            sx={{ fontSize: 16 }}
          />
          
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
    </Container>
  );
}
