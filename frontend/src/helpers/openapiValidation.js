const { Enforcer } = require('openapi-enforcer');
const fs = require('fs');
const yaml = require('js-yaml');
// import requestBody from './initRequest.json' assert {type: 'json'};


async function loadOpenAPISpec(openapiYamlFile) {
  try {
    const openapiSpec = yaml.load(fs.readFileSync(openapiYamlFile, 'utf8'));
    return openapiSpec;
  } catch (e) {
    console.error('Error loading OpenAPI spec:', e);
    process.exit(1);
  }
}

async function validateRequest(openapiSpec, requestEndpoint, requestMethod, requestBody) {
  try {
    const enforcer = await Enforcer(openapiSpec);
    console.log("sometb");
    const response = await enforcer.request(requestEndpoint, {
      method: "POST",
      body: requestBody,
    });

    if (response.valid) {
      console.log('Request is valid according to OpenAPI schema.');
    } else {
      console.error('Request is not valid:', response.errors);
    }
  } catch (error) {
    console.error('Error validating request:', error);
  }
}

const openapiFile = '../mobility.yaml'; // Replace with the path to your OpenAPI YAML file
const requestEndpoint = '/init'; // Replace with the endpoint you want to validate
const requestMethod = 'POST'; // HTTP method (GET, POST, PUT, DELETE, etc.)
const requestBody = 
  {
    "context": {
        "domain": "{{ONDC_DOMAIN}}",
        "city": "{{CITY}}",
        "country": "{{COUNTRY}}",
        "core_version": "{{CORE_VERSION}}",
        "action": "init",
        "bap_id": "beckn-test-22",
        "bap_uri": "https://b212-2402-e280-214e-38a-4cf4-8475-41fd-8c1e.ngrok-free.app",
        "bpp_id": "beckn-test-23",
        "bpp_uri": "https://cb07-2402-e280-214e-38a-4cf4-8475-41fd-8c1e.ngrok-free.app",
        "transaction_id": "{{TRANSACTION_ID}}",
        "message_id": "{{MESSAGE_ID}}",
        "timestamp": "2023-03-23T04:41:16Z"
    },
    "message": {
        "order": {
            "provider": {
                "id": "7f7896dd-787e-4a0b-8675-e9e6fe93bb8f"
            },
            "items": [
                {
                    "id": "5777a0bf-9a08-49aa-a97d-1e5561a9622e",
                    "fulfillment_id": "fulf_5cf064d5-4c0a-42d3-b73d-5f19a6f7468e",
                    "payment_id": "7f7896dd-787e-4a0b-8675-e9e6fe93bb8f"
                }
            ],
            "quote": {
                "value": "76",
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
                    }
                ]
            },
            "fulfillment": {
                "id": "fulf_5cf064d5-4c0a-42d3-b73d-5f19a6f7468e",
                "start": {
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
                    "rateable": true,
                    "rating": "5"
                },
                "vehicle": {
                    "category": "AUTO_RICKSHAW"
                }
            },
            "payment": {
                "id": "7f7896dd-787e-4a0b-8675-e9e6fe93bb8f",
                "type": "ON-FULFILLMENT",
                "collected_by": "BPP"
            },
            "customer": {
                "person": {
                    "name": "John Doe",
                    "phone": "+91-9897867564",
                    "tags": {
                        "groups/1/descriptor/name": "Localization",
                        "groups/1/display": false,
                        "groups/1/list/1/descriptor/name": "Language",
                        "groups/1/list/1/value": "en"
                    }
                }
            }
        }
    }
 };

(async () => {
    console.log("Aaaa");
  const openapiSpec = await loadOpenAPISpec(openapiFile);
  console.log("Aaaa");
  await validateRequest(openapiSpec, requestEndpoint, requestMethod, requestBody);
})();
