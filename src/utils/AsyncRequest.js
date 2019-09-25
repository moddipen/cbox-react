import axios from "axios";
import { API_HOST } from "../constants/config";

export const getRequest = api => {
  return new Promise((resolve, reject) => {
    return axios
      .get(API_HOST + api)
      .then(resp => {
        resolve(resp);
      })
      .catch(err => {
        reject(err);
      });
  });
};
