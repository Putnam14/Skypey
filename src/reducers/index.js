import user from "./user";
import contacts from "./contacts";
import activeUserId from "./activeUserId";
import conversations from "./conversations";
import typing from "./typing";
import { combineReducers } from "redux";

// This is representative of the state
// Data comes from the reducers
// e.g. the user property will get state data from the user reducer
const combinedReducers = combineReducers({
  user,
  contacts,
  activeUserId,
  conversations,
  typing
});

export default combinedReducers;
