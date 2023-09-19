# Beckn Certification Suite

## About Project
The Beckn certification suite project aims to create a testing and certification tool for various platforms that implement beckn protocol across multiple sectors an various regions. Upon successful certification, the platform issues a Verifiable Credential that can be electronically verified by a network registry with instantaneous registration and subscription of the platform on the network								

## Setup Instructions


### Backend API

- Run `npm i` to install the dependencies for the backend repo
- Run `node backend-api.js` to start backend server
- Spin up a MongoDB local instance with port 27017 and database name 'my_database'
- By default the API will work on port 5000
- Run `node VC.js` to start the VC Server
- Modify the Beckn Protocol server details in `/frontend/src/helpers/requestBodies.js`

### Frontend

- Navigate to folder 'frontend' using `cd frontend` from root folder
- Run `npm start` to launch the frontend

## Images

![](Images\Registration.png)

![](Images\login.png)

![](Images\dashboard.png)

<!-- # certification-suite

This product allows various beckn-enabled applications to be certified and tested -->
