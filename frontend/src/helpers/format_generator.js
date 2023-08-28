

  const validateResponseWithFormat = (response, format) => {
    const responseKeys = Object.keys(response);
    const formatKeys = Object.keys(format);
  
    if (responseKeys.length !== formatKeys.length || !responseKeys.every((key, index) => key === formatKeys[index])) {
      return false;
    }
  
    for (const field in format) {
      if (format.hasOwnProperty(field)) {
        const expectedType = format[field];
        const fieldValue = response[field];
  
        if (Array.isArray(expectedType)) {
          if (!Array.isArray(fieldValue)) {
            return false;
          }
  
          const arrayItemFormat = expectedType[0];
  
          for (const item of fieldValue) {
            if (!validateField(item, arrayItemFormat)) {
              return false;
            }
          }
        } else if (typeof expectedType === 'object') {
          if (typeof fieldValue !== 'object' || fieldValue === null || Array.isArray(fieldValue)) {
            return false;
          }
  
          if (!validateResponseWithFormat(fieldValue, expectedType)) {
            return false;
          }
        } else {
          if (typeof fieldValue !== expectedType) {
            return false;
          }
        }
      }
    }
  
    return true;
  };
  
//   const format = {
//     field1: 'string',
//     field2: {
//       nestedField1: 'string',
//       nestedField2: 'number',
//     },
//     field3: [
//       {
//         arrayField1: 'string',
//         arrayField2: 'number',
//       },
//     ],
//   };
  

//   // Example Response Object
//   const response = {
//     field1:'string1',
//     field2: {
//         field3: 'value3',
//         field4: 5,
//       },
//       someArray: [
//         {
//           arrayField1: 'value4',
//           arrayField2: 123,
//         }
//       ],
//     };
  
//   // Validate the Response Object
//   const isValid = validateResponseWithFormat(response, format);
  
//   console.log(isValid); // Output: true
const generateFormatFromResponse = (response) => {
    const format = {};
  
    for (const field in response) {
      if (response.hasOwnProperty(field)) {
        const fieldValue = response[field];
  
        if (typeof fieldValue === 'object' && !Array.isArray(fieldValue) && fieldValue !== null) {
          format[field] = generateFormatFromResponse(fieldValue);
        } else if (Array.isArray(fieldValue) && fieldValue.length > 0) {
          const arrayItem = fieldValue[0];
          if (typeof arrayItem === 'object' && !Array.isArray(arrayItem) && arrayItem !== null) {
            format[field] = [generateFormatFromResponse(arrayItem)];
          } else {
            format[field] = [typeof arrayItem];
          }
        } else {
          format[field] = typeof fieldValue;
        }
      }
    }
  
    return format;
  };
  
  const sampleResponse = {
    
        "context": {
            "domain": "mobility:ridehailing:0.8.0",
            "core_version": "0.9.4",
            "action": "confirm",
            "bap_id": "beckn-test-22",
            "bap_uri": "https://6bfa-2402-e280-214e-38a-ec1c-9dc8-6501-1d13.ngrok-free.app",
            "country": "IND",
            "city": "std:080",
            "bpp_id": "beckn-test-23",
            "bpp_uri": "https://b559-2402-e280-214e-38a-ec1c-9dc8-6501-1d13.ngrok-free.app",
            "transaction_id": "7afe44fd-d947-4a0a-81bc-d286784df2c1",
            "message_id": "de519a41-9964-4290-a874-d6aaf27d4325",
            "ttl": "PT10M",
            "timestamp": "2023-08-26T23:05:36.150Z",
            "max_callbacks": 1
        },
        "responses": [
            {
                "context": {
                    "domain": "mobility:ridehailing:0.8.0",
                    "core_version": "0.9.4",
                    "action": "on_confirm",
                    "bpp_id": "beckn-test-23",
                    "bpp_uri": "https://b559-2402-e280-214e-38a-ec1c-9dc8-6501-1d13.ngrok-free.app",
                    "country": "IND",
                    "city": "std:080",
                    "bap_id": "beckn-test-22",
                    "bap_uri": "https://6bfa-2402-e280-214e-38a-ec1c-9dc8-6501-1d13.ngrok-free.app",
                    "transaction_id": "7afe44fd-d947-4a0a-81bc-d286784df2c1",
                    "message_id": "de519a41-9964-4290-a874-d6aaf27d4325",
                    "ttl": "PT10M",
                    "timestamp": "2023-08-26T23:05:41.202Z",
                    "max_callbacks": 1
                },
                "message": {
                    "order": {
                        "id": "7751bd26-3fdc-47ca-9b64-e998dc5abe68",
                        "provider": {
                            "id": "e8542642-0f4a-454c-9a9f-f46110c367a3",
                            "descriptor": {
                                "name": "Raghavendra J"
                            }
                        },
                        "items": [
                            {
                                "id": "5777a0bf-9a08-49aa-a97d-1e5561a9622e",
                                "descriptor": {
                                    "name": "Auto Ride",
                                    "code": "RIDE"
                                },
                                "tags": {
                                    
                                },
                                "fulfillment_id": "fb5c84d4-1b59-4b9d-96b5-9d79107432c5",
                                "payment_id": "1"
                            }
                        ],
                        "quote": {
                            "value": "81",
                            "currency": "INR",
                            "breakup": [
                                {
                                    "title": "Base Fare",
                                    "price": {
                                        "value": "30",
                                        "currency": "INR"
                                    }
                                },
                                {
                                    "title": "Per km fare",
                                    "price": {
                                        "value": "56",
                                        "currency": "INR"
                                    }
                                },
                                {
                                    "title": "CGST @ 5%",
                                    "price": {
                                        "value": "2.5",
                                        "currency": "INR"
                                    }
                                },
                                {
                                    "title": "SGST @ 5%",
                                    "price": {
                                        "value": "2.5",
                                        "currency": "INR"
                                    }
                                }
                            ]
                        },
                        "fulfillment": {
                            "id": "fulf_5cf064d5-4c0a-42d3-b73d-5f19a6f7468e",
                            "state": {
                                "descriptor": {
                                    "code": "DRIVER_EN_ROUTE",
                                    "name": "Driver is on the way"
                                }
                            },
                            "start": {
                                "authorization": {
                                    "type": "OTP",
                                    "token": "234234"
                                },
                                "location": {
                                    "gps": "13.008935, 77.6444085",
                                    "address": {
                                        "ward": "Uttarahalli Hobli, Ramanjaneyanagar",
                                        "country": "India",
                                        "building": "6th Main Rd",
                                        "state": "Karnataka 560061",
                                        "city": "Bengaluru",
                                        "locality": "Uttarahalli Hobli",
                                        "door": "98A, Sarovarm 2nd cross",
                                        "area_code": "560061",
                                        "street": "Ramanjaneyanagar"
                                    }
                                }
                            },
                            "end": {
                                "location": {
                                    "gps": "12.9711869, 77.5868122",
                                    "address": {
                                        "ward": "Basavanagudi, Chikkanna Garden, Rangadore Memorial Hospital",
                                        "country": "India",
                                        "building": "Rangadore Memorial Hospital",
                                        "state": "Karnataka",
                                        "city": "Bengaluru",
                                        "locality": "Basavanagudi",
                                        "door": "",
                                        "area_code": "",
                                        "street": "Chikkanna Garden"
                                    }
                                }
                            },
                            "agent": {
                                "name": "RAGHAVENDRA J",
                                "phone": "+91-98978675645",
                                "rateable": true,
                                "rating": "5"
                            },
                            "vehicle": {
                                "category": "AUTO_RICKSHAW",
                                "registration": "KA01JG1231"
                            },
                            "customer": {
                                "person": {
                                    "name": "John Doe",
                                    "phone": "+91-9897867564",
                                    "tags": {
                                    }
                                }
                            },
                            "tracking": false
                        },
                        "payment": {
                            "id": "7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                            "type": "ON-FULFILLMENT",
                            "params": {
                                "amount": "81",
                                "currency": "INR",
                                "transaction_status": "NOT-PAID"
                            }
                        }
                    }
                }
            }
        ]
    };
 
  // Generate Format Object
  const generatedFormat = generateFormatFromResponse(sampleResponse);
  console.log(JSON.stringify(generatedFormat, null, 2));

  