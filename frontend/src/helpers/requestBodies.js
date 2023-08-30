const BAP_ID="beckn-test-22";
const BAP_URI="https://d929-2401-4900-1cb8-9ecd-30c7-52a6-949d-b8b6.ngrok-free.app";
const BPP_ID="beckn-test-23";
const BPP_URI="https://63d6-2401-4900-1cb8-9ecd-30c7-52a6-949d-b8b6.ngrok-free.app";

export const cancelRequestBody={
        context: {
            domain: "mobility:ridehailing:0.8.0",
            city: "std:080",
            country: "IND",
            core_version: "0.9.4",
            action: "cancel",
            bap_id: BAP_ID,
            bap_uri: BAP_URI,
            bpp_id: BPP_ID,
            bpp_uri: BPP_URI,
            transaction_id: "7afe44fd-d947-4a0a-81bc-d286784df2c1",
            message_id: "0d3d2c49-050a-4018-ace9-24ede7de512e",
            timestamp: "2023-03-23T04:41:16Z"
        },
        message: {
            order_id: "b4232ad4-19ee-4c67-9223-a5189b13a741",
            cancellation_reason_id: "1"
        }
    
}
export const confirmRequestBody={
    
    context: {
      domain: "mobility:ridehailing:0.8.0",
      city: "std:080",
      country: "IND",
      core_version: "0.9.4",
      action: "confirm",
      bap_id: BAP_ID,
      bap_uri: BAP_URI,
      bpp_id: BPP_ID,
      bpp_uri: BPP_URI,
      transaction_id: "7afe44fd-d947-4a0a-81bc-d286784df2c1",
      message_id: "0d3d2c49-050a-4018-ace9-24ede7de512e",
      timestamp: "2023-03-23T04:41:16Z"
    },
    message: {
      order: {
        id: "7751bd26-3fdc-47ca-9b64-e998dc5abe68",
        provider: {
          id: "e8542642-0f4a-454c-9a9f-f46110c367a3",
          descriptor: {
            name: "Raghavendra J"
          }
        },
        items: [
          {
            id: "5777a0bf-9a08-49aa-a97d-1e5561a9622e",
            descriptor: {
              name: "Auto Ride",
              code: "RIDE"
            },
            tags: {
              "groups/1/descriptor/name": "Daytime Charges",
              "groups/1/display": "true",
              "groups/1/list/1/descriptor/name": "Min Fare upto 2 km",
              "groups/1/list/1/value": "₹ 30 upto 2 km",
              "groups/1/list/2/descriptor/name": "Rate above Min. Fare",
              "groups/1/list/2/value": "₹15 / km",
              "groups/1/list/3/descriptor/name": "Driver Pickup Charges",
              "groups/1/list/3/value": "₹ 10",
              "groups/1/list/4/descriptor/name": "Nominal Fare",
              "groups/1/list/4/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
              "groups/1/list/4/value": "₹ 10",
              "groups/1/list/5/descriptor/name": "Nominal Fare",
              "groups/1/list/5/descriptor/short_desc": "Driver may quote extra to cover for traffic, chance of return trip, etc.",
              "groups/1/list/5/value": "₹ 0 / min",
              "groups/2/descriptor/name": "Waiting Charges",
              "groups/2/display": "true",
              "groups/2/list/1/descriptor/name": "Night Charges",
              "groups/2/list/1/value": "1.5x of daytime charges applicable at night from 10 PM to 5 PM",
              "groups/2/list/2/descriptor/name": "Night Shift Start",
              "groups/2/list/2/value": "22:00:00",
              "groups/2/list/3/descriptor/name": "Night Shift End",
              "groups/2/list/3/value": "05:00:00",
              "groups/3/descriptor/name": "General Information",
              "groups/3/display": "true",
              "groups/3/list/1/descriptor/name": "Distance to nearest driver",
              "groups/3/list/1/value": "661 m",
              "groups/3/list/2/descriptor/name": "Wait time upto",
              "groups/3/list/2/value": "3 min"
            },
            fulfillment_id: "fb5c84d4-1b59-4b9d-96b5-9d79107432c5",
            payment_id: "1"
          }
        ],
        quote: {
          value: "81",
          currency: "INR",
          breakup: [
            {
              title: "Base Fare",
              price: {
                value: "30",
                currency: "INR"
              }
            },
            {
              title: "Per km fare",
              price: {
                value: "56",
                currency: "INR"
              }
            },
            {
              title: "CGST @ 5%",
              price: {
                value: "2.5",
                currency: "INR"
              }
            },
            {
              title: "SGST @ 5%",
              price: {
                value: "2.5",
                currency: "INR"
              }
            }
          ]
        },
        fulfillment: {
          id: "fulf_5cf064d5-4c0a-42d3-b73d-5f19a6f7468e",
          start: {
            location: {
              gps: "13.008935, 77.6444085",
              address: {
                ward: "Uttarahalli Hobli, Ramanjaneyanagar",
                country: "India",
                building: "6th Main Rd",
                state: "Karnataka 560061",
                city: "Bengaluru",
                locality: "Uttarahalli Hobli",
                door: "98A, Sarovarm 2nd cross",
                area_code: "560061",
                street: "Ramanjaneyanagar"
              }
            }
          },
          end: {
            location: {
              gps: "12.9711869, 77.5868122",
              address: {
                ward: "Basavanagudi, Chikkanna Garden, Rangadore Memorial Hospital",
                country: "India",
                building: "Rangadore Memorial Hospital",
                state: "Karnataka",
                city: "Bengaluru",
                locality: "Basavanagudi",
                door: "",
                area_code: "",
                street: "Chikkanna Garden"
              }
            }
          },
          agent: {
            name: "RAGHAVENDRA J",
            rateable: true,
            rating: "5"
          },
          vehicle: {
            category: "AUTO_RICKSHAW"
          },
          customer: {
            person: {
              name: "John Doe",
              phone: "+91-9897867564",
              tags: {
                "groups/1/descriptor/name": "Localization",
                "groups/1/display": "false",
                "groups/1/list/1/descriptor/name": "Language",
                "groups/1/list/1/value": "en"
              }
            }
          }
        },
        payment: {
          id: "7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
          type: "ON-FULFILLMENT",
          params: {
            amount: "81",
            currency: "INR",
            transaction_status: "NOT-PAID"
          }
        }
      }
    }
  
}
export const initRequestBody= {
    context: {
    domain: "mobility:ridehailing:0.8.0",
    city: "std:080",
    country: "IND",
    core_version: "0.9.4",
    action: "init",
    bap_id: BAP_ID,
    bap_uri: BAP_URI,
    bpp_id: BPP_ID,
    bpp_uri: BPP_URI,
    transaction_id: "7afe44fd-d947-4a0a-81bc-d286784df2c1",
    message_id: "0d3d2c49-050a-4018-ace9-24ede7de512e",
    timestamp: "2023-03-23T04:41:16Z"
  },
  message: {
    order: {
      provider: {
        id: "7f7896dd-787e-4a0b-8675-e9e6fe93bb8f"
      },
      items: [
        {
          id: "5777a0bf-9a08-49aa-a97d-1e5561a9622e",
          fulfillment_id: "fulf_5cf064d5-4c0a-42d3-b73d-5f19a6f7468e",
          payment_id: "7f7896dd-787e-4a0b-8675-e9e6fe93bb8f"
        }
      ],
      quote: {
        value: "76",
        currency: "INR",
        breakup: [
          {
            title: "Base Fare",
            price: {
              value: "30",
              currency: "INR"
            }
          },
          {
            title: "Per km fare",
            price: {
              value: "56",
              currency: "INR"
            }
          }
        ]
      },
      fulfillment: {
        id: "fulf_5cf064d5-4c0a-42d3-b73d-5f19a6f7468e",
        start: {
          location: {
            gps: "13.008935, 77.6444085",
            address: {
              ward: "Uttarahalli Hobli, Ramanjaneyanagar",
              country: "India",
              building: "6th Main Rd",
              state: "Karnataka 560061",
              city: "Bengaluru",
              locality: "Uttarahalli Hobli",
              door: "98A, Sarovarm 2nd cross",
              area_code: "560061",
              street: "Ramanjaneyanagar"
            }
          }
        },
        end: {
          location: {
            gps: "12.9711869, 77.5868122",
            address: {
              ward: "Basavanagudi, Chikkanna Garden, Rangadore Memorial Hospital",
              country: "India",
              building: "Rangadore Memorial Hospital",
              state: "Karnataka",
              city: "Bengaluru",
              locality: "Basavanagudi",
              door: "",
              area_code: "",
              street: "Chikkanna Garden"
            }
          }
        },
        agent: {
          name: "RAGHAVENDRA J",
          rateable: true,
          rating: "5"
        },
        vehicle: {
          category: "AUTO_RICKSHAW"
        }
      },
      payment: {
        id: "7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
        type: "ON-FULFILLMENT",
        collected_by: "BPP"
      },
      customer: {
        person: {
          name: "John Doe",
          phone: "+91-9897867564",
          tags: {
            "groups/1/descriptor/name": "Localization",
            "groups/1/display": false,
            "groups/1/list/1/descriptor/name": "Language",
            "groups/1/list/1/value": "en"
          }
        }
      }
    }
  }

}
export const selectRequestBody = {
    context: {
      domain: "mobility:ridehailing:0.8.0",
      city: "std:080",
      country: "IND",
      core_version: "0.9.4",
      action: "select",
      bap_id: "beckn-test-22",
      bap_uri: BAP_URI,
      bpp_id: "beckn-test-23",
      bpp_uri: BPP_URI,
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
  export const supportRequestBody= {
    context: {
      domain: "mobility:ridehailing:0.8.0",
      city: "std:080",
      country: "IND",
      core_version: "0.9.4",
      action: "support",
      bap_id: BAP_ID,
      bap_uri: BAP_URI,
      bpp_id: BPP_ID,
      bpp_uri: BPP_URI,
      transaction_id: "7afe44fd-d947-4a0a-81bc-d286784df2c1",
      message_id: "0d3d2c49-050a-4018-ace9-24ede7de512e",
      timestamp: "2023-03-23T04:41:16Z"
    },
    message: {
      ref_id: "7751bd26-3fdc-47ca-9b64-e998dc5abe68"
    }
}
export const trackRequestBody={
    context: {
      domain: "mobility:ridehailing:0.8.0",
      city: "std:080",
      country: "IND",
      core_version: "0.9.4",
      action: "track",
      bap_id: BAP_ID,
      bap_uri: BAP_URI,
      bpp_id: BPP_ID,
      bpp_uri: BPP_URI,
      transaction_id: "7afe44fd-d947-4a0a-81bc-d286784df2c1",
      message_id: "0d3d2c49-050a-4018-ace9-24ede7de512e",
      timestamp: "2023-03-23T04:41:16Z"
    },
    message: {
      order_id: "22e090fc-b8b1-4437-9126-ff7a71c7845c"
    }
}
export const statusRequestBody={
    context: {
      domain: "mobility:ridehailing:0.8.0",
      city: "std:080",
      country: "IND",
      core_version: "0.9.4",
      action: "status",
      bap_id: BAP_ID,
      bap_uri: BAP_URI,
      bpp_id: BPP_ID,
      bpp_uri: BPP_URI,
      transaction_id: "7afe44fd-d947-4a0a-81bc-d286784df2c1",
      message_id: "0d3d2c49-050a-4018-ace9-24ede7de512e",
      timestamp: "2023-03-23T04:41:16Z"
    },
    message: {
      order_id: "7751bd26-3fdc-47ca-9b64-e998dc5abe68"
    }
}