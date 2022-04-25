import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseLine from "@mui/material/CssBaseline";
import { IconButton, Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import * as React from "react";
import AppDrawer from "./components/AppDrawer";
import MainView from "./components/MainView";
import { Outlet } from "react-router-dom";
import ButtonDialog from "./components/ButtonDialog";
import PostDialog from "./components/PostDialog";
import { GitHub, LinkedIn } from "@mui/icons-material";

const App = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseLine />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            mzusman's Blog
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton color="inherit" >
              <GitHub />
            </IconButton>
            <IconButton color="inherit" edge="end">
              <LinkedIn />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <AppDrawer></AppDrawer>
      <Outlet />
      <ButtonDialog />
      <PostDialog />
    </Box>
  );
};

export default App;
