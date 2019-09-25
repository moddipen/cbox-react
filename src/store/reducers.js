import { combineReducers } from "redux";
import users from "../modules/user/store/reducer";

export default combineReducers({
  users: users
});
