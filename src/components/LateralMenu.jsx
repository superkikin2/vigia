import * as React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { MoveToInbox as InboxIcon, Mail as MailIcon, Menu as MenuIcon, ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ChipsGroup from './ChipsGroup';
import Submenu from './Submenu';
import Selector from './Selector';
import AssistantIA from "./AssistantIA";
import '../styles/LateralMenu.css';
import { useState } from 'react';
import Alertas from '../icons/Alertas.svg';
import VisionGeneral from '../icons/VisionGeneral.svg';
import Planificacion from '../icons/Planificacion.svg';
import ValorGanado from '../icons/ValorGanado.svg';
import Reuniones from '../icons/Reuniones.svg';
import GestiónRiesgos from '../icons/GestionRiesgos.svg';
import Documentacion from '../icons/Documentacion.svg';

const drawerWidth = 340;
const collapsedWidth = 60;


export default function LateralMenu() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleCollapseToggle = () => setCollapsed(!collapsed);

  const menuItems = [
    { text: 'Alertas e Insight', path: '/alertas', icon: Alertas },
    { text: 'Visión General', path: '/', icon: VisionGeneral },
    { text: 'Planificación de proyectos', path: '/planificacion', icon: Planificacion },
    { text: 'Valor Ganado', path: '/valor-ganado', icon: ValorGanado },
    { text: 'Gestión de riesgos', path: '/riesgos', icon: GestiónRiesgos },
    { text: 'Reuniones', path: '/reuniones', icon: Reuniones },
    { text: 'Documentación', path: '/documentacion', icon: Documentacion },
    /*{ text: 'Normativa IA', path: '/normativa' },
    { text: 'Chats', path: '/chats' },*/
  ];

  const drawer = (
    <div className="drawer">
      <Toolbar className={`drawer-toolbar d-flex align-items-center m-2 
                        ${collapsed ? "justify-content-center" : "justify-content-between"}`}>

        {!collapsed && (
          <Box>
            <Typography variant="h5" noWrap className="drawer-title drawer-title-upper">
              Vigía
            </Typography>
          </Box>
        )}

        {!isMobile && (
          <IconButton
            onClick={handleCollapseToggle}
            color="inherit"
            size="small"
            sx={{ ml: collapsed ? 'auto' : 1 }}
          >
            {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        )}
      </Toolbar>

      <Divider />

      <List>
        {!collapsed && (
          <ListItem disablePadding sx={{ display: 'block', my: 3 }}>
            <ListItemButton sx={{ justifyContent: 'flex-start', px: 3, height: 48 }}>
              <Box sx={{ width: '100%' }}>
                <Selector collapsed={collapsed} />
              </Box>
            </ListItemButton>
          </ListItem>
        )}

        {menuItems.map((item, index) => (
          <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              component={Link}
              to={item.path}
              selected={location.pathname === item.path}
              onClick={() => setMobileOpen(false)}
              sx={{
                justifyContent: collapsed ? 'center' : 'initial',
                px: collapsed ? 3 : 0,
              }}
              className="menu-button"
            >
              <ListItemIcon sx={{ mr: collapsed ? 'auto' : 0 }} className="menu-icon">
                {<img src={item.icon}  />}
                {/*index % 2 === 0 ? <InboxIcon /> : <MailIcon />*/}
              </ListItemIcon>
              {!collapsed && <ListItemText primary={item.text} />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${isMobile ? 0 : (collapsed ? collapsedWidth : drawerWidth)}px)` },
          ml: { sm: `${isMobile ? 0 : (collapsed ? collapsedWidth : drawerWidth)}px` },
        }}
        className="appbar"
      >
        <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }} >
          <Submenu />
        </Toolbar>
        <Divider />
        <Toolbar className="toolbar py-3">
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h4" noWrap sx={{ display: 'block', fontWeight: 'bold' }}>
            {menuItems.find(item => item.path === location.pathname)?.text || 'Panel'}
          </Typography>
          <Typography variant="caption" noWrap sx={{ display: 'block' }}>
            Semana 45 · Última actualización hoy, 12:10
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Box
        component="nav"
        sx={{
          width: { sm: collapsed ? collapsedWidth : drawerWidth },
          flexShrink: { sm: 0 },
        }}
      >
        {/* Móvil */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          {drawer}
        </Drawer>

        {/* Escritorio */}
        <Drawer
          variant="permanent"
          open
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              width: collapsed ? collapsedWidth : drawerWidth,
              transition: 'width 0.3s ease',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Contenido principal */}
      <Box
        component="main"
        className="main-content"
        sx={{ ml: 0 }}
        /*sx={{  ml: isMobile ? 0 : (collapsed ? `${collapsedWidth}px` : `${drawerWidth}px`), }}*/
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}