// helpers.js
import axios from 'axios';
const selectRequestBody = {
  context: {
    domain: "mobility:ridehailing:0.8.0",
    city: "std:080",
    country: "IND",
    core_version: "0.9.4",
    action: "select",
    bap_id: "beckn-test-22",
    bap_uri: "https://6bfa-2402-e280-214e-38a-ec1c-9dc8-6501-1d13.ngrok-free.app",
    bpp_id: "beckn-test-23",
    bpp_uri: "https://b559-2402-e280-214e-38a-ec1c-9dc8-6501-1d13.ngrok-free.app",
    transaction_id: "7afe44fd-d947-4a0a-81bc-d286784df2c1",
    message_id: "0d3d2c49-050a-4018-ace9-24ede7de512e",
    timestamp: "2023-03-23T04:41:16Z",
  },
  message: {
    order: {
      items: [
        {
          id: "5777a0bf-9a08-49aa-a97d-1e5561a9622e"
        }
      ],
      fulfillment: {
        start: {
          location: {
            gps: "12.910458, 77.543089"
          }
        },
        end: {
          location: {
            gps: "12.9535139, 77.5710434"
          }
        }
      }
    }
  }
};

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
