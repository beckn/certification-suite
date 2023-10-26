# Certification Suite

The Beckn certification suite project aims to create a testing and certification tool for various platforms that implement beckn protocol across multiple sectors an various regions. Upon successful certification, the platform issues a Verifiable Credential that can be electronically verified by a network registry with instantaneous registration and subscription of the platform on the network

## Why Certification Suite?

A significant problem for every network is onboarding new platforms and verifying if they can be added to the Network registry.
For each platform on the network, there are certain API specifications the platform has to comply with to work correctly and not create any issues/scams that can ruin the user experience.

To test this, the network needs an application that can test all the API endpoints of the BPP for appropriate responses that adhere to the network’s requirements and then issue a certificate and add them to the registry. 

The Certification suite will rigorously test the platform using a Dummy BAP, in this case, to check if the BPP is sending all the relevant responses compliant with network rules. All the BPP endpoints will be fired and tested in different scenarios to test resilience, reliability, responsiveness, etc., to ensure the application performs suitably in the real world.

## Features

- User Registration and Portal
- Validation of API endpoints
- VC issuance Service
- VC Verification Service (Broken)

## Getting Started

To get started with QRBeckn, follow these steps:

1. Clone the repository: `git clone https://github.com/beckn/certification-suite.git`
2. Install the required dependencies.
3. Run the application.


## Setup Instructions

Please Setup [Beckn-Protocol-server](https://github.com/beckn/protocol-server/blob/master/setup.md), [Beckn-Sandbox](https://github.com/beckn/beckn-sandbox/blob/main/USER_GUIDE.md), [Beckn-Sandbox-webhook](https://github.com/beckn/beckn-sandbox-webhook/blob/main/README.md) as prerequisites

If you want to setup through Docker compose, please run `docker compose up`
Please change the `.env` file as per your configuration

### Backend API

- Run `npm i` to install the dependencies for the backend repo
- Run `node backend-api.js` to start backend server
- By default the API will work on port 5000
- Run `node VC.js` to start the VC Server
- Modify the Beckn Protocol server details in `/frontend/src/helpers/requestBodies.js`
- Change the MongoDB connection url in backend-api.js if you do not use docker

### Frontend

- Navigate to folder 'frontend' using `cd frontend` from root folder
- Run `npm start` to launch the frontend

## Usage

Once QRBeckn is up and running, 
- Login/ Register using Name, Email, phone and Password
- Put in your Certification Details and press submit
- If you are certified, press 'VC issue' button
- Open '/verifyvc' and paste your VC json to verify

## Contributing

We welcome contributions to QRBeckn! If you would like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/new-feature`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push your changes to your fork: `git push origin feature/new-feature`.
5. Create a Pull Request (PR) to the main repository.

## License

This project is licensed under the [MIT License](LICENSE).
