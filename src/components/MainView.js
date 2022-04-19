import { Toolbar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import { useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";

const MainView = () => {
  var params = useParams();
  let view = useSelector((state) =>
    state.menu.filter((a) => a.selected || a.title == params.buttons)
  );
  view = view.length > 0 ? view[0] : [];
  if (view == []) console.log(view);
  console.log(params);

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Typography paragraph>{view.content}</Typography>
    </Box>
  );
};
export default MainView;
