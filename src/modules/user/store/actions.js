import { LOAD_USERS } from "./action-types";
import * as UserService from "../../../services/UserService";
import { successAction } from "../../../utils/helpers";

export const loadUsers = () => {
  return dispatch => {
    return UserService.loadUsers().then(response => {
      localStorage.setItem('items',JSON.stringify(response.data.items));
      return dispatch(successAction(response.data, LOAD_USERS));
    });
  };
};
