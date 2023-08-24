// helpers.js
import axios from 'axios';

export const sendPostRequest = (url, appendage, requestBody) => {
  return axios.post(`${url}/${appendage}`, requestBody);
};
