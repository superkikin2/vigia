import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IoIosInformationCircleOutline } from "react-icons/io";


export default function Cards({id, title, percentage, text, label, sx, origin}) {
  
  const setBorder = (id) => {
    switch(id){
      case 1:
        return { borderColor: '#000000', borderLeftColor: '#000000' };
      case 2: 
        return { borderColor: '#F5B427', borderLeftColor: '#F5B427' };
      case 3: 
        return { borderColor: '#CC3F3F', borderLeftColor: '#CC3F3F' };
      case 4: 
        return { borderColor: '#6BE38C', borderLeftColor: '#6BE38C' };
      default:
        return {};
    }
  }

  const setColor = (id) => {
    switch(id){
      case 1:
        return { color: '#2C5994' };
      case 2: 
        return { color: '#2C5994' };
      case 3: 
        return { color: '#F5B427' };
      case 4: 
        return { color: '#6BE38C' };
      default:
        return {};
    }
  }

  // Estilos base
  const baseStyles = { 
    
    "& p:nth-of-type(1)": {
      fontSize: "14px",
      color: "#828282",
    },
    
    "& p:nth-of-type(3)": {
      fontSize: "12px",
      color: "#828282",
    },
    "& p:nth-of-type(4)": {
      fontSize: "11px",
      color: "#828282",
      backgroundColor: '#E1F0DA',
      width:'70%',
      fontWeight: "bold",
      borderRadius: '10px',
      padding:'5px',
    },
  };

  // Estilos SOLO si viene de visión general
  const visionGeneralStyles = {
    textAlign: "left",
    "& p:nth-of-type(2)": {
      fontSize: "30px",
      fontWeight: "bold",
    },
  };

  // Estilos SOLO si viene de valor ganado
  const valorGanadoStyles = {
    textAlign: "center",
    "& p:nth-of-type(2)": {
      ...setColor(id),
      fontSize: "24px",
    },
  };

  // Combinar dinámicamente
  const styled = {
    ...baseStyles,
    ...(origin === "visionGeneral" ? visionGeneralStyles : {}),
    ...(origin === "valorGanado" ? valorGanadoStyles : {}),
    ...sx
  };
  

  const card = (
    <React.Fragment>
      <CardContent sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Typography gutterBottom fontWeight="bold">
          {title}
        <IoIosInformationCircleOutline/>
        </Typography>
        <Typography >
          {percentage}
        </Typography>
        <Typography variant="body2">
          {text}
        </Typography>
        {label !== '' &&
          <Typography sx={{ marginTop: "auto" }}>
            {label}
          </Typography>
        }
      </CardContent>
    </React.Fragment>
  );
  
  return (
    <Box>
      <Card 
        className={ origin === "visionGeneral" ? "py-3 px-1" : "" }
        variant="outlined" 
        sx={ styled }>
          {card}
      </Card>
    </Box>
  );
}