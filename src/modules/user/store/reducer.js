import { LOAD_USERS } from "./action-types";

const initialState = {};

const reducer = (state = initialState, { type, payload = null }) => {
  switch (type) {
    case LOAD_USERS:
      return Object.assign([], payload.items);
    default:
      return state;
  }
};

export default reducer;
