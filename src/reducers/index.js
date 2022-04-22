import { combineReducers } from "redux";
import menu from "./MenuReducer";
import auth from "./AuthReducer";
import dialog from "./DialogReducer";
import posts from "./PostsReducer";

const rootReducer = combineReducers({
  menu,
  auth,
  dialog,
  posts,
});
export default rootReducer;
