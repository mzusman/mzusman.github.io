import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseLine from "@mui/material/CssBaseline";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import * as React from "react";
import AppDrawer from "./components/AppDrawer";
import MainView from "./components/MainView";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseLine />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            mzusman's Blog
          </Typography>
        </Toolbar>
      </AppBar>
      <AppDrawer></AppDrawer>
      <Outlet />
    </Box>
  );
};

export default App;
