import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseLine from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { IconButton, Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AddBox, Delete, Edit } from "@mui/icons-material";
import { deleteButton } from "../api/ClientApi";

const AppDrawer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const buttons = useSelector((state) => state.menu);
  const auth = useSelector((state) => state.auth.role);
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
                    {auth == "ADMIN" ? (
                      <Box>
                        <IconButton aria-label="edit" size="small">
                          <Edit
                            onClick={() => {
                              dispatch({
                                type: "EDIT_BUTTON_DIALOGE",
                                data: button.title,
                              });
                            }}
                          />
                        </IconButton>
                        <IconButton aria-label="delete" size="small">
                          <Delete
                            onClick={() => {
                              dispatch(deleteButton({ title: button.title }));
                            }}
                          />
                        </IconButton>
                      </Box>
                    ) : (
                      ""
                    )}
                  </ListItem>
                ))}
            <ListItem>
              {auth == "ADMIN" ? (
                <IconButton aria-label="edit" size="small">
                  <AddBox
                    onClick={() => {
                      dispatch({ type: "ADD_BUTTON_DIALOGE" });
                    }}
                  />
                </IconButton>
              ) : (
                ""
              )}
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
export default AppDrawer;
