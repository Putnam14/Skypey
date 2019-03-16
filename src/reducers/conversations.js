import { getMessages } from "../static-data";

const conversationsReducer = (state = getMessages(10), action) => state;

export default conversationsReducer;
