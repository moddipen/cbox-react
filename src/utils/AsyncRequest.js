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

export const postRequest = (api, data = {}, header = {}) => {
  return new Promise((resolve, reject) => {
    return axios
      .post(API_HOST + api, data, header)
      .then(resp => {
        resolve(resp);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const putRequest = (api, data = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .put(API_HOST + api, data)
      .then(resp => {
        resolve(resp);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const deleteRequest = api => {
  return new Promise((resolve, reject) => {
    axios
      .delete(API_HOST + api)
      .then(resp => {
        resolve(resp);
      })
      .catch(err => {
        reject(err);
      });
  });
};
