import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LateralMenu from './components/LateralMenu';
import VisionGeneral from './pages/VisionGeneral';
import Alertas from './pages/Alertas';
import Planificacion from './pages/Planificacion';
import ValorGanado from './pages/ValorGanado';
import GestionRiesgos from './pages/GestionRiesgos';
import Reuniones from './pages/Reuniones';
import NormativaIA from './pages/NormativaIA';
import Chats from './pages/Chats';
import Documentacion from './pages/Documentacion'
import './styles/global.css';

function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route element={<LateralMenu />}>
          <Route path="/" element={<VisionGeneral />} />
          <Route path="/alertas" element={<Alertas />} />
          <Route path="/planificacion" element={<Planificacion />} />
          <Route path="/valor-ganado" element={<ValorGanado />} />
          <Route path="/riesgos" element={<GestionRiesgos />} />
          <Route path="/reuniones" element={<Reuniones />} />
          <Route path="/normativa" element={<NormativaIA />} />
          <Route path="/documentacion" element={<Documentacion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
