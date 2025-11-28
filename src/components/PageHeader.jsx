import { Toolbar, IconButton, Typography } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

export default function PageHeader({ isMobile, handleDrawerToggle, menuItems, location }) {
    return (
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
    )
}