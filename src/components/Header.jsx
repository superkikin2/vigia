import { AppBar, Toolbar, Divider, Box } from '@mui/material';
import { BsBell } from "react-icons/bs";

import AssistantIA from './AssistantIA';
import User from './User';
import PageHeader from './PageHeader';
import '../styles/Header.css';

export default function Header({ isMobile, collapsed, drawerWidth, collapsedWidth, handleDrawerToggle, menuItems, location, assistantOpen, handleAssistantToggle }) {
    console.log(menuItems[0])
    return (
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${isMobile ? 0 : (collapsed ? collapsedWidth : drawerWidth)}px)` },
                ml: { sm: `${isMobile ? 0 : (collapsed ? collapsedWidth : drawerWidth)}px` },
            }}
            className="appbar"
        >
            <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }} >
                <Box className="box-avatar">
                    <BsBell color="var(--primary-blue)" />
                    <User />
                    <AssistantIA 
                        isOpen={assistantOpen}
                        onToggle={handleAssistantToggle}
                    />
                </Box>
            </Toolbar>
            <Divider />
            <PageHeader
                isMobile={isMobile}
                handleDrawerToggle={handleDrawerToggle}
                menuItems={menuItems}
                location={location}
            />
        </AppBar>
    )
}