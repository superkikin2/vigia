import { Box, TextField, MenuItem, Button, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { FaCircle } from "react-icons/fa";

export default function InlineForm() {

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        p: 1,
        backgroundColor: '#fff',
        borderRadius: 2,
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField
        id="search-field"
        placeholder="Buscar Proyecto, PEP...."
        variant="outlined"
        sx={{
          flex: 1,
          minWidth: 250,
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            backgroundColor: '#fff',
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: '#999' }} />
            </InputAdornment>
          ),
        }}
      />
      
      <TextField
        id="select-categoria"
        select
        label="Categoría"
        defaultValue=""
        variant="outlined"
        sx={{
          minWidth: 250,
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
          },
        }}
      >
        <MenuItem value="">Seleccionar</MenuItem>
        <MenuItem value="op1">Opción 1</MenuItem>
        <MenuItem value="op2">Opción 2</MenuItem>
        <MenuItem value="op3">Opción 3</MenuItem>
      </TextField>

      <TextField
        id="select-proyecto"
        select
        label="Proyecto"
        defaultValue=""
        variant="outlined"
        sx={{
          minWidth: 250,
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
          },
        }}
      >
        <MenuItem value="">Seleccionar</MenuItem>
        <MenuItem value="a">Proyecto A</MenuItem>
        <MenuItem value="b">Proyecto B</MenuItem>
        <MenuItem value="c">Proyecto C</MenuItem>
      </TextField>

      <Button
        variant="contained"
        size="large"
        sx={{
          textTransform: 'none',
          borderRadius: 2,
          px: 3,
          py: 1.5,
          backgroundColor: '#1976d2',
          fontWeight: 500,
          whiteSpace: 'nowrap',
          '&:hover': {
            backgroundColor: '#1565c0',
          },
        }}
      >
        <FaCircle style={{ color: '#b0bec5', marginRight: 8 }} />
        Ayuda del Asistente
      </Button>
    </Box>
  );
}