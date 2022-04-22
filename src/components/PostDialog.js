import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addPost } from "../api/PostsApi";
import { editButton } from "../api/SectionsApi";

const PostDialog = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  let view = useSelector((state) => state.posts.section);

  const postDialog = useSelector((state) => {
    return state.postDialog;
  });
  React.useEffect(() => {
    if (open) return;
    if (postDialog.state == "ADD" || postDialog.state == "EDIT") setOpen(true);
    // if (postDialog.state == "EDIT") {
    //   value = postDialog.button;
    //   setButton(postDialog.button);
    //   console.log(value);
    // }
  });

  return (
    <Dialog
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
        <TextField
          multiline
          margin="normal"
          id="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          label="Content"
          type="text"
          fullWidth
          variant="standard"
        ></TextField>
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
            onClick={() => {
              dispatch(
                editButton({
                  previous: postDialog.button,
                  next: title,
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
