const fs = require('fs');
const yaml = require('js-yaml');
const Ajv = require('ajv');

// Load the OpenAPI specification from a YAML file
const spec = yaml.load(fs.readFileSync('../mobility.yaml', 'utf8'));

// Specify the endpoint and method you want to validate
const endpointPath = '/on_init';
const httpMethod = 'post';

// Extract the relevant endpoint definition
const endpointDefinition = spec.paths[endpointPath][httpMethod];

// Extract the request schema from the endpoint definition
const requestSchema = endpointDefinition.requestBody.content['application/json'].schema;

// Create an instance of AJV with the request schema
const ajv = new Ajv();
const validate = ajv.compile(requestSchema);

// Simulate a response object (replace this with your actual response object)
const responseObject = {
  context: {
    action: 'on_init',
  },
  message: {
    order: {
      // Fill with data that matches the request schema
    },
  },
};

// Validate the response object against the request schema
const isValid = validate(responseObject);

if (isValid) {
  console.log('Response object is valid according to the request schema.');
} else {
  console.error('Response object is not valid according to the request schema.');
  console.error(validate.errors);
}
