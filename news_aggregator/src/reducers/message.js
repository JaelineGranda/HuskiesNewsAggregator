import { SET_MESSAGE, CLEAR_MESSAGE } from "../actions/types";

const initialState = {};

// updates message state when message action is dispatched in app
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_MESSAGE:
      return { message: payload };

    case CLEAR_MESSAGE:
      return { message: "" };

    default:
      return state;
  }
}