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

export default class MainPage extends React.Component {
    drawer_width = 200;
    drawer_buttons = ['AboutMe', 'Blog']
    render() {
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
                    width: this.drawer_width,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: this.drawer_width, boxSizing: 'border-box' }
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {this.drawer_buttons.map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemText primary={text} />
                            </ListItem>))}
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
            </Box>
        </Box>
    }
}