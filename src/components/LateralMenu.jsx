import { Link, Outlet } from 'react-router-dom';
import { Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from '@mui/icons-material';
import Selector from './Selector';
import '../styles/LateralMenu.css';

export default function LateralMenu({ mobileOpen, collapsed, isMobile, handleDrawerToggle, handleCollapseToggle, menuItems, location, drawerWidth, collapsedWidth }) {

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
              onClick={() => {
                if (isMobile && mobileOpen) {
                  handleDrawerToggle();
                }
              }}
              sx={{
                justifyContent: collapsed ? 'center' : 'initial',
                px: collapsed ? 3 : 0,
              }}
              className="menu-button"
            >
              <ListItemIcon sx={{ mr: collapsed ? 'auto' : 0 }} className="menu-icon">
                <img src={item.icon} alt={item.text} />
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
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}