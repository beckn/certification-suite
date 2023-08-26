// helpers.js
import axios from 'axios';

export const sendPostRequest = async (url, appendage, requestBody) => {

    const test = axios.post(url+'/'+appendage,requestBody,{
      headers: {
      'Content-Type': 'application/json'
    }})
    .then(function (response) {
      console.log(response);
      return test;
  })
   //rather than just localhost:8000/test
   .catch(function (error) {
    console.log(error);
});
};
