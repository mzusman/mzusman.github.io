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
import { addButton, editButton } from "../api/ClientApi";

const ButtonDialog = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [button, setButton] = React.useState("");
  let value = "";
  const dialog = useSelector((state) => {
    return state.dialog;
  });
  React.useEffect(() => {
    if (open) return;
    if (dialog.state == "ADD" || dialog.state == "EDIT") setOpen(true);
    if (dialog.state == "EDIT") {
      value = dialog.button;
      setButton(dialog.button);
      console.log(value);
    }
  });

  return (
    <Dialog
      open={open}
      onClose={() => {
        dispatch({ type: "NO_ACTIVE" });
        setOpen(false);
      }}
    >
      {dialog.state == "ADD" ? (
        <DialogTitle>Add Button</DialogTitle>
      ) : (
        <DialogTitle>Edit Button</DialogTitle>
      )}
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          value={button}
          onChange={(e) => setButton(e.target.value)}
          label="section name"
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
        {dialog.state == "ADD" ? (
          <Button
            onClick={() => {
              dispatch(
                addButton({ title: button, selected: false, content: "" })
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
                  previous: dialog.button,
                  next: button,
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
export default ButtonDialog;
