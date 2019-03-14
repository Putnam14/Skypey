import user from "./user";
import contacts from "./contacts";
import { combineReducers } from "redux";

const combinedReducers = combineReducers({
  user,
  contacts
});

export default combinedReducers;
