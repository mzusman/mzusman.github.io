import { AddBox, Delete, Edit } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  createTheme,
  Divider,
  IconButton,
  Skeleton,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import MUIRichTextEditor from "mui-rte";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import {
  deletePost,
  getAllPostsBySection,
  getAllTitlesPostsBySection,
} from "../api/PostsApi";

const MainView = () => {
  const navigate = useNavigate();
  const myTheme = createTheme({
    // Set up your custom MUI theme here
  });
  var params = useParams();
  console.log(params);
  let view = useSelector((state) =>
    state.menu.filter((a) => a.selected || a.title == params.buttons)
  );
  if (view == []) console.log(view);
  view = view.length > 0 ? view[0] : [];

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.role);
  const posts = useSelector((state) => state.posts);

  const [loading, setLoading] = React.useState(false);

  console.log(posts);

  console.log();
  React.useEffect(() => {
    if (!loading && view.length != 0 && posts.section != view.title) {
      setLoading(true);
      dispatch(getAllTitlesPostsBySection(view));
    }
    if (loading && view.length != 0 && posts.section == view.title)
      setLoading(false);

    if (
      posts != undefined &&
      params.post != undefined &&
      posts.data.filter((a) => a.title == params.post && a.selected != true)
        .length == 1
    )
      dispatch({ type: "SELECT_POST", title: params.post });
  });

  return posts.data.filter((a) => a.selected).length > 0 ? (
    <Outlet />
  ) : (
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
      {loading ?  (<Skeleton
            variant="rectangular"
            height={"80vh"}
            animation="wave"
          ></Skeleton>): posts.data.map((post) => (
        <Box>
          <Card>
            <CardActionArea
              onClick={() => {
                if (!post.selected) {
                  dispatch({ type: "SELECT_POST", title: post.title });
                  navigate(`/${post.section}/${post.title}`, {
                    replace: false,
                  });
                  // setOpen(true);
                } else {
                  dispatch({ type: "SELECT_POST", title: "" });
                  navigate(`/${post.section}`, {
                    replace: false,
                  });
                  // setOpen(false);
                }
              }}
            >
              <CardContent>
                <Box>
                  <Typography variant="h3" component="div">
                    {post.title}
                  </Typography>
                  {/* <Typography variant="body2" color="text.secondary"> */}
                  {!post.selected ? (
                    <ThemeProvider theme={myTheme}>
                      <MUIRichTextEditor
                        defaultValue={post.desp}
                        toolbar={false}
                        readOnly={true}
                        maxLength={10}
                      ></MUIRichTextEditor>
                    </ThemeProvider>
                  ) : (
                    ""
                  )}
                  {/* </Typography> */}
                </Box>
              </CardContent>
            </CardActionArea>

            {auth == "ADMIN" ? (
              <CardActions>
                <IconButton aria-label="delete" size="small">
                  <Delete
                    onClick={() => {
                      dispatch(
                        deletePost({ section: view.title, title: post.title })
                      );
                    }}
                  />
                </IconButton>
              </CardActions>
            ) : (
              ""
            )}
          </Card>
          <Divider variant="middle" />
        </Box>
      ))}
      

    </Box>
  );
};
export default MainView;
