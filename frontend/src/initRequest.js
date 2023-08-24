export const initRequestBody= {
          context: {
          domain: "mobility:ridehailing:0.8.0",
          city: "std:080",
          country: "IND",
          core_version: "0.9.4",
          action: "init",
          bap_id: "{{BAP_ID}}",
          bap_uri: "{{BAP_URI}}",
          bpp_id: "{{BPP_ID}}",
          bpp_uri: "{{BPP_URI}}",
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