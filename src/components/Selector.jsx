import Box from '@mui/material/Box';
import { InputLabel, FormControl, NativeSelect } from '@mui/material';
import '../styles/Selector.css'

export default function Selector() {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel 
          variant="standard" 
          htmlFor="uncontrolled-native"
          sx={{ color: "white" }}
        >
          Proyectos
        </InputLabel>

        <NativeSelect
          className="selector-native"
          defaultValue={30}
          inputProps={{
            name: 'project',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>Proyecto F110</option>
          <option value={20}>Proyecto S80</option>
          <option value={30}>Proyecto F100</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}