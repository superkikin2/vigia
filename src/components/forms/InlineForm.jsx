import { Box, TextField, MenuItem, Button } from '@mui/material';
import { FaCircle } from "react-icons/fa";

export default function InlineForm() {

  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="outlined-basic" label="Buscar Proyecto, PEP..." variant="outlined" className=""/>
      
      <TextField id="select-filled" select label="Categoría" defaultValue="" variant="outlined" className="" >
        <MenuItem value="op1">Opción 1</MenuItem>
        <MenuItem value="op2">Opción 2</MenuItem>
        <MenuItem value="op3">Opción 3</MenuItem>
      </TextField>

      {/* Otro selector */}
      <TextField id="select-standard" select label="Proyecto" defaultValue="" variant="outlined" className="" >
        <MenuItem value="a">Item A</MenuItem>
        <MenuItem value="b">Item B</MenuItem>
        <MenuItem value="c">Item C</MenuItem>
      </TextField>

      <Button variant="contained" size="large" sx={{textTransform: 'none', padding: '12px' }} className="" >
        <FaCircle />&nbsp;&nbsp;Ayuda del asistente
      </Button>
    </Box>
  );
}