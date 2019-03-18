import {
  SET_ACTIVE_USER_ID,
  SET_TYPING_VALUE
} from "../constants/action-types";

const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id
});

const setTypingValue = value => ({
  type: SET_TYPING_VALUE,
  payload: value
});

export { setActiveUserId, setTypingValue };
