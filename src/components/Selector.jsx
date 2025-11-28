import Box from '@mui/material/Box';
import { InputLabel, FormControl, NativeSelect } from '@mui/material';
import useAppStore from '../store/useAppStore';
import '../styles/Selector.css'

export default function Selector() {
  const { projects, selectedProjectId, setSelectedProject } = useAppStore();

  const handleChange = (event) => {
    setSelectedProject(Number(event.target.value));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel 
          variant="standard" 
          htmlFor="project-selector"
          sx={{ color: "white" }}
        >
          Proyectos
        </InputLabel>

        <NativeSelect
          className="selector-native"
          value={selectedProjectId}
          onChange={handleChange}
          inputProps={{
            name: 'project',
            id: 'project-selector',
          }}
        >
          {projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
}