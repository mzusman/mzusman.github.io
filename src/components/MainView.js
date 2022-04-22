import { AddBox } from "@mui/icons-material";
import {
  Card,
  CardContent,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllPostsBySection } from "../api/PostsApi";

const MainView = () => {
  var params = useParams();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.role);

  let view = useSelector((state) =>
    state.menu.filter((a) => a.selected || a.title == params.buttons)
  );
  if (view == []) console.log(view);
  view = view.length > 0 ? view[0] : [];

  const posts = useSelector((state) => state.posts);
  console.log(posts);

  React.useEffect(() => {
    if (posts.section.title != view.title) dispatch(getAllPostsBySection(view));
  });

  console.log(params);
  console.log(view);

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      {auth == "ADMIN" ? (
        <IconButton aria-label="edit" size="small">
          <AddBox
            onClick={() => {
              dispatch({ type: "ADD_POST_DIALOGE" });
            }}
          />
        </IconButton>
      ) : (
        ""
      )}

      {posts.data.map((post) => {
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.content}
            </Typography>
          </CardContent>
        </Card>;
      })}

      <Typography title>{view.content}</Typography>
      <Typography paragraph>{view.content}</Typography>
    </Box>
  );
};
export default MainView;
