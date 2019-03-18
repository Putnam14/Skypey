import {
  SET_ACTIVE_USER_ID,
  SET_TYPING_VALUE,
  SEND_MESSAGE
} from "../constants/action-types";

const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id
});

const setTypingValue = value => ({
  type: SET_TYPING_VALUE,
  payload: value
});

const sendMessage = (message, userId) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
    userId
  }
});

export { setActiveUserId, setTypingValue, sendMessage };
