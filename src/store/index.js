import { createStore } from "redux";
import reducer from "../reducers/contactsReducer";

const store = createStore(reducer);

export default store;
