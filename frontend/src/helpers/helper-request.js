// helpers.js
import axios from 'axios';

export const sendPostRequest = async (url, appendage, requestBody) => {
try{
  const response = await axios.post(url + '/' + appendage, requestBody, {
    headers: {
      'Content-Type': 'application/json'
    }
  });

  console.log(response.data['responses'][0]); // Output the response data
  return response.data; // Return the response data
} catch (error) {
  console.log(error);
  throw error; // Re-throw the error to be caught by the caller
}
};
