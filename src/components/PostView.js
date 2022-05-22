import { ArrowBack } from "@mui/icons-material";
import { createTheme, IconButton, Toolbar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import SunEditor from "suneditor-react";

const PostView = () => {
  const myTheme = createTheme({
    // Set up your custom MUI theme here
  });
  const navigate = useNavigate();
  var params = useParams();
  let view = useSelector((state) =>
    state.menu.filter((a) => a.selected || a.title == params.post)
  );
  if (view == []) console.log(view);
  view = view.length > 0 ? view[0] : [];

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (posts.section.title != view.title) dispatch(getPostByTitle(view));
  });

  // const post = useSelector((state) =>
    // state.posts.data.filter((a) => a.selected)
  // ];

  // return (
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
    </Box>
  );
};
export default PostView;
