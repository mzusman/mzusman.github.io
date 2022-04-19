import { combineReducers } from "redux";
import menu from "./MenuReducer";
import auth from "./AuthReducer";
import dialog from "./DialogReducer";

const rootReducer = combineReducers({
  menu,
  auth,
  dialog,
});
export default rootReducer;
