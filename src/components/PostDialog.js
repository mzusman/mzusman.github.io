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
import { convertFromRaw, convertToRaw, EditorState } from "draft-js";
import MUIRichTextEditor from "mui-rte";
import * as React from "react";
import { Editor } from "react-draft-wysiwyg";

import { useDispatch, useSelector } from "react-redux";
import SunEditor from "suneditor-react";
import { addPost, editPost } from "../api/PostsApi";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

const PostDialog = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [desp, setDesp] = React.useState("");
  const [dtitle, setDTitle] = React.useState("");
  const [dcontent, setDContent] = React.useState("");
  const [ddesp, setDDesp] = React.useState("");
  let view = useSelector((state) => state.posts.section);
  const myTheme = createTheme({
    // Set up your custom MUI theme here
  });

  const onSaveDesp = (a) => {
    const rteContent = convertToRaw(a.getCurrentContent()); // for rte content with text formating
    setDesp(JSON.stringify(rteContent));
  };

  const onSave = (content) => {
    setContent(content);
    // const rteContent = convertToRaw(content.getCurrentContent()); // for rte content with text formating
    // setContent(JSON.stringify(rteContent));
  };

  const postDialog = useSelector((state) => {
    return state.postDialog;
  });
  console.log(postDialog);
  //   let value = ""
  // console.log(content);
  React.useEffect(() => {
    if (open) return;
    if (postDialog.state == "ADD" || postDialog.state == "EDIT") setOpen(true);
    if (postDialog.state == "EDIT") {
      //   value = postDialog.title;
      setDTitle(postDialog.title);
      setDContent(postDialog.content);
      setDDesp(postDialog.desp);
      setTitle(postDialog.title);
      setContent(postDialog.content);
      setDesp(postDialog.desp);

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
          defaultValue={dtitle}
          onChange={(e) => setTitle(e.target.value)}
          label="Title"
          type="text"
          fullWidth
          variant="standard"
        ></TextField>
        <ThemeProvider theme={myTheme}>
          <MUIRichTextEditor
            variant="standard"
            fullWidth
            label="Description"
            defaultValue={ddesp}
            onChange={(e) => {
              onSaveDesp(e);
            }}
          ></MUIRichTextEditor>
        </ThemeProvider>
        <br></br>
        <SunEditor
          label="Content"
          setOptions={{
            height: "auto",
            buttonList: [
              [
                "undo",
                "redo",
                "font",
                "fontSize",
                "formatBlock",
                "paragraphStyle",
                "blockquote",
                "bold",
                "underline",
                "italic",
                "strike",
                "subscript",
                "superscript",
                "fontColor",
                "hiliteColor",
                "textStyle",
                "removeFormat",
                "outdent",
                "indent",
                "align",
                "horizontalRule",
                "list",
                "lineHeight",
                "table",
                "link",
                "image",
                "video",
                "audio",
                // "math",
                "imageGallery",
                "fullScreen",
                "showBlocks",
                "preview",
                "print",
                "save",
              ],
            ],
          }}
          // value={content}
          defaultValue={dcontent}
          onChange={(e) => onSave(e)}
        ></SunEditor>
        <br></br>
        {/* <ThemeProvider theme={myTheme}> */}
        {/* <MUIRichTextEditor></MUIRichTextEditor> */}
        {/* </ThemeProvider> */}
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
            disabled={
              content == "" ||
              content == postDialog.content ||
              title == postDialog.title ||
              desp == postDialog.desp
            }
            onClick={() => {
              dispatch(
                addPost({
                  title: title,
                  selected: false,
                  content: content,
                  desp: desp,
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
            disabled={
              content == "" ||
              (content == postDialog.content &&
                title == postDialog.title &&
                desp == postDialog.desp)
            }
            onClick={() => {
              dispatch(
                editPost({
                  previous: postDialog.title,
                  next: { title: title, content: content, desp: desp },
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
