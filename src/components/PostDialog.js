import {
  Button,
  createTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  ThemeProvider,
} from "@mui/material";
import MUIRichTextEditor from "mui-rte";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addPost, editPost } from "../api/PostsApi";
import { editButton } from "../api/SectionsApi";

const PostDialog = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  let view = useSelector((state) => state.posts.section);
  const myTheme = createTheme({
    // Set up your custom MUI theme here
  });

  const postDialog = useSelector((state) => {
    return state.postDialog;
  });
  console.log(postDialog);
  //   let value = ""
  console.log(content);
  React.useEffect(() => {
    if (open) return;
    if (postDialog.state == "ADD" || postDialog.state == "EDIT") setOpen(true);
    if (postDialog.state == "EDIT") {
      //   value = postDialog.title;
      setTitle(postDialog.title);
      setContent(postDialog.content);
      //   console.log(value);
    }
  });

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={() => {
        dispatch({ type: "NO_ACTIVE" });
        setOpen(false);
      }}
    >
      {postDialog.state == "ADD" ? (
        <DialogTitle>Add Button</DialogTitle>
      ) : (
        <DialogTitle>Edit Button</DialogTitle>
      )}
      <DialogContent>
        <TextField
          autoFocus
          margin="normal"
          id="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          label="Title"
          type="text"
          fullWidth
          variant="standard"
        ></TextField>
        <ThemeProvider theme={myTheme}>
          <MUIRichTextEditor
            //   multiline
            //   margin="normal"
            //   id="Content"
            //   value={content}
            defaultValue={content}
            onSave={(e) => setContent(e)}
            //   label="Content"
            //   type="text"
            //   fullWidth
            //   variant="standard"
          ></MUIRichTextEditor>
        </ThemeProvider>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setOpen(false);
            dispatch({ type: "NO_ACTIVE" });
          }}
        >
          Cancel
        </Button>
        {postDialog.state == "ADD" ? (
          <Button
            disabled={content == ""}
            onClick={() => {
              dispatch(
                addPost({
                  title: title,
                  selected: false,
                  content: content,
                  section: view.title,
                })
              );
              dispatch({ type: "NO_ACTIVE" });
              setOpen(false);
            }}
          >
            Confirm
          </Button>
        ) : (
          <Button
            disabled={content == "" || content == postDialog.content}
            onClick={() => {
              dispatch(
                editPost({
                  previous: postDialog.title,
                  next: { title: title, content: content },
                  section: view.title,
                })
              );
              dispatch({ type: "NO_ACTIVE" });
              setOpen(false);
            }}
          >
            Confirm
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};
export default PostDialog;
