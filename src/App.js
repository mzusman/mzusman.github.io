import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseLine from "@mui/material/CssBaseline";
import { Grid, IconButton, Toolbar } from "@mui/material";
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
          <Grid container direction="column" alignItems="center">
            <Grid item xs={11}>
              <Typography
                alignSelf="center"
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                mzusman's Blog
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <IconButton
              href="https://github.com/mzusman"
              target="_blank"
              color="inherit"
            >
              <GitHub />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/mor-zusman-79109798/?originalSubdomain=il"
              target="_blank"
              color="inherit"
              edge="end"
            >
              <LinkedIn />
            </IconButton>
          </Grid>
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
