import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";

// reducer composition
export default combineReducers({
  auth,
  message,
});