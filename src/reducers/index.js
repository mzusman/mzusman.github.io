import { combineReducers } from "redux";
import menu from "./MenuReducer";
import auth from "./AuthReducer";
import dialog from "./DialogReducer";
import posts from "./PostsReducer";
import postDialog from "./PostDialogReducer";

const rootReducer = combineReducers({
  menu,
  auth,
  dialog,
  posts,
  postDialog,
});
export default rootReducer;
