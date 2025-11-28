import { Box } from '@mui/material';
import SuggestIA from '../components/SuggestIA';
import FileExplorer from '../components/FileExplorer';
import '../styles/Documentacion.css';


export default function Documentacion() {
  return (
    <Box className="content" style={{ marginTop: '12rem' }}>
      <SuggestIA />
      <FileExplorer />
    </Box>
  );
}