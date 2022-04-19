import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseLine from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";

const AppDrawer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const buttons = useSelector((state) => state.menu);
  const drawer_width = 200;

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawer_width,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawer_width,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {buttons == undefined
              ? ""
              : buttons.map((button) => (
                  <ListItem
                    button
                    key={button.title}
                    onClick={() => {
                      dispatch({ type: "SELECT", title: button.title });
                      navigate(`/${button.title}`, { replace: false });
                    }}
                  >
                    <ListItemText primary={button.title} />
                  </ListItem>
                ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
export default AppDrawer;
