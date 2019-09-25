import { getRequest } from "../utils/AsyncRequest";

export const loadUsers = data => {
  return getRequest("5d889c8a3300002c0ed7da42", data);
};
