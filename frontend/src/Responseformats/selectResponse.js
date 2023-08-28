export const selectResponse={


        context: {
          domain: "string",
          core_version: "string",
          action: "string",
          bpp_id: "string",
          bpp_uri: "string",
          country: "string",
          city: "string",
          bap_id: "string",
          bap_uri: "string",
          transaction_id: "string",
          message_id: "string",
          ttl: "string",
          timestamp: "string",
          max_callbacks: "number"
        },
        message: {
          order: {
            provider: {
              id: "string",
              descriptor: {
                name: "string"
              }
            },
            items: [
              {
                id: "string",
                descriptor: {
                  name: "string",
                  code: "string"
                },
                tags: {},
                fulfillment_id: "string",
                payment_id: "string"
              }
            ],
            quote: {
              value: "string",
              currency: "string",
              breakup: [
                {
                  title: "string",
                  price: {
                    value: "string",
                    currency: "string"
                  }
                }
              ],
              ttl: "string"
            },
            fulfillment: {
              id: "string",
              state: {
                descriptor: {
                  name: "string",
                  code: "string"
                }
              },
              start: {
                location: {
                  gps: "string",
                  address: {
                    ward: "string",
                    country: "string",
                    building: "string",
                    state: "string",
                    city: "string",
                    locality: "string",
                    door: "string",
                    area_code: "string",
                    street: "string"
                  }
                }
              },
              end: {
                location: {
                  gps: "string",
                  address: {
                    ward: "string",
                    country: "string",
                    building: "string",
                    state: "string",
                    city: "string",
                    locality: "string",
                    door: "string",
                    area_code: "string",
                    street: "string"
                  }
                }
              },
              agent: {
                name: "string",
                rateable: "boolean",
                rating: "string"
              },
              vehicle: {
                category: "string"
              },
              tracking: "boolean"
            }
          }
        }
      }
  
  