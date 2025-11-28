import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from "./Header";
import LateralMenu from "./LateralMenu";
import Alertas from '../icons/Alertas.svg';
import VisionGeneral from '../icons/VisionGeneral.svg';
import Planificacion from '../icons/Planificacion.svg';
import ValorGanado from '../icons/ValorGanado.svg';
import Reuniones from '../icons/Reuniones.svg';
import GestiónRiesgos from '../icons/GestionRiesgos.svg';
import Documentacion from '../icons/Documentacion.svg';

const drawerWidth = 340;
const collapsedWidth = 60;

const menuItems = [
  { text: 'Alertas e Insight', path: '/alertas', icon: Alertas },
  { text: 'Visión General', path: '/', icon: VisionGeneral },
  { text: 'Planificación de proyectos', path: '/planificacion', icon: Planificacion },
  { text: 'Valor Ganado', path: '/valor-ganado', icon: ValorGanado },
  { text: 'Gestión de riesgos', path: '/riesgos', icon: GestiónRiesgos },
  { text: 'Reuniones', path: '/reuniones', icon: Reuniones },
  { text: 'Documentación', path: '/documentacion', icon: Documentacion },
];

export default function Layout() {
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const [assistantOpen, setAssistantOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleDrawerToggle = () => {
        const newMobileOpen = !mobileOpen;
        setMobileOpen(newMobileOpen);
        if (newMobileOpen && assistantOpen) {
            setAssistantOpen(false); // Cierra assistant si drawer se abre
        }
    };
    
    const handleAssistantToggle = () => {
        const newAssistantOpen = !assistantOpen;
        setAssistantOpen(newAssistantOpen);
        if (newAssistantOpen) {
            if (mobileOpen) {
                setMobileOpen(false); // Close drawer when assistant opens
            }
            if (!collapsed) {
                setCollapsed(true); // Collapse lateral menu when assistant opens
            }
        }
    };
    
    const handleCollapseToggle = () => {
        const newCollapsed = !collapsed;
        setCollapsed(newCollapsed);

        if (!newCollapsed && assistantOpen) {
            setAssistantOpen(false); // Oculta Assistant IA al expandir menu lateral
        }
    };

    return (
        <>
            <Header
                isMobile={isMobile}
                collapsed={collapsed}
                drawerWidth={drawerWidth}
                collapsedWidth={collapsedWidth}
                handleDrawerToggle={handleDrawerToggle}
                menuItems={menuItems}
                location={location}
                assistantOpen={assistantOpen}
                handleAssistantToggle={handleAssistantToggle}
            />
            <LateralMenu
                mobileOpen={mobileOpen}
                collapsed={collapsed}
                isMobile={isMobile}
                handleDrawerToggle={handleDrawerToggle}
                handleCollapseToggle={handleCollapseToggle}
                menuItems={menuItems}
                location={location}
                drawerWidth={drawerWidth}
                collapsedWidth={collapsedWidth}
            />
        </>
    )
}