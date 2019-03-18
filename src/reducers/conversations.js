import { getMessages } from "../static-data";
import { SEND_MESSAGE } from "../constants/action-types";

const conversationsReducer = (state = getMessages(10), action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const { message, userId } = action.payload;
      const allUserMsgs = state[userId];
      const number = parseInt(Object.keys(allUserMsgs).pop()) + 1;
      return {
        ...state,
        [userId]: {
          ...allUserMsgs,
          [number]: {
            number,
            text: message,
            is_user_msg: true
          }
        }
      };
    default:
      return state;
  }
};

export default conversationsReducer;
