import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseLine from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import * as React from 'react';
import { useSelector } from 'react-redux';

const MainPage = () => {
    const drawer_width = 200;
    const buttons = useSelector((state) => state.title)

    return <Box sx={{ display: 'flex' }}>
        <CssBaseLine />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    mzusman
                </Typography>
            </Toolbar>
        </AppBar>
        <Drawer
            variant="permanent"
            sx={{
                width: drawer_width,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawer_width, boxSizing: 'border-box' }
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {buttons == undefined ? '' : buttons.map((button) => (
                        <ListItem button key={button.title}>
                            <ListItemText primary={button.title} />
                        </ListItem>))}
                </List>
            </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
        </Box>
    </Box>
}

export default MainPage;