import { ArrowBack, Delete, Edit } from "@mui/icons-material";
import {
  createTheme,
  IconButton,
  Skeleton,
  Toolbar,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import SunEditor from "suneditor-react";
import { deletePost, getPostByTitle } from "../api/PostsApi";

const PostView = () => {
  const navigate = useNavigate();
  var params = useParams();
  let view = useSelector((state) =>
    state.menu.filter((a) => a.selected || a.title == params.post)
  );
  if (view == []) console.log(view);
  view = view.length > 0 ? view[0] : [];

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.role);

  const post = useSelector((state) =>
    state.posts.data.filter((a) => a.selected)
  )[0];

  console.log(post);
  React.useEffect(() => {
    if (post.content == undefined) dispatch(getPostByTitle(post));
  });

  return (
    // <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <IconButton aria-label="back" size="small">
        <ArrowBack
          onClick={() => {
            dispatch({ type: "SELECT_POST", title: "" });
            navigate(`/${post.section}`, {
              replace: false,
            });
          }}
        />
      </IconButton>

      <Typography variant="h3" component="div">
        {post.title}
      </Typography>
      {auth == "ADMIN" ? (
        <Box>
          <IconButton aria-label="delete" size="small">
            <Delete
              onClick={() => {
                dispatch(
                  deletePost({ section: view.title, title: post.title })
                );
              }}
            />
          </IconButton>

          <IconButton aria-label="edit" size="small">
            <Edit
              onClick={() => {
                dispatch({
                  type: "EDIT_POST_DIALOGE",
                  title: post.title,
                  content: post.content,
                  desp: post.desp,
                });
              }}

              // onClick={() => {
              // dispatch(editPost({ section: view.title }));
              // }}
            />
          </IconButton>
        </Box>
      ) : (
        ""
      )}

      <Box>
        {post.content != undefined ? (
          <SunEditor
            defaultValue={post.content}
            hideToolbar={true}
            disable={true}
            disableToolbar={true}
            setOptions={{
              mode: "classic",
              height: "auto",
              showPathLabel: false,
              resizingBar: false,
            }}
            readOnly={true}
            maxLength={10}
          />
        ) : (
          <Skeleton
            variant="rectangular"
            height={"80vh"}
            animation="wave"
          ></Skeleton>
        )}
      </Box>
    </Box>
  );
};
export default PostView;
