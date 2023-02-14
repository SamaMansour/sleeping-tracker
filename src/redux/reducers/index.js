import { combineReducers } from "redux";
import auth from "./auth";
import entry from "./entry"



export default combineReducers({
  auth,
  entry
});