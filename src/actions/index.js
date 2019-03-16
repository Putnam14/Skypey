import { SET_ACTIVE_USER_ID } from "../constants/action-types";

const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id
});

export { setActiveUserId };
