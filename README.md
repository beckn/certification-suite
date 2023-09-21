# Beckn Certification Suite

## About Project
The Beckn certification suite project aims to create a testing and certification tool for various platforms that implement beckn protocol across multiple sectors an various regions. Upon successful certification, the platform issues a Verifiable Credential that can be electronically verified by a network registry with instantaneous registration and subscription of the platform on the network								

## Why Certification Suite
A significant problem for every network is onboarding new platforms and verifying if they can be added to the Network registry.

For each platform on the network, there are certain API specifications the platform has to comply with to work correctly and not create any issues/scams that can ruin the user experience.

To test this, the network needs an application that can test all the API endpoints of the BPP for appropriate responses that adhere to the network’s requirements and then issue a certificate and add them to the registry. 

## Pre Installation Steps

Prerequisities

	1. Node > 14x
	2. MongoDB
	3. npm

## Setup Instructions
Please refer [InstallationGuide](./USERGUIDE.md) for detailed instructions

## Folder Structure

    ├── Models
    │   └── User.js                         -- MongoDB auth Model
    ├── VC.js                               -- API for issuance and Verification
    ├── backend-api.js                      -- API for Registration and Login
    ├── frontend
    │   └── src
    │       ├── App.js
    │       ├── App.test.js
    │       ├── Responseformats             -- Contains the Formats for each response
    │       ├── helpers
    │       │   ├── AuthContext.js          -- Context Wrapper for login
    │       │   ├── QR_code.js              -- QR Code component
    │       │   ├── format.js               -- Validation function
    │       │   ├── helper-request.js       -- API endpoint Request helper Function 
    │       │   ├── openapiValidation.js    -- OpenAPI validation testing(Incomplete)
    │       │   └── requestBodies.js        -- Request Payload for each API
    │       ├── index.js            
    │       ├── mobility.yaml               -- OpenAPI specification for mobility usecase
    │       ├── pages
    │       │   ├── dashboard.js            -- Dashboard Page
    │       │   ├── login.js                -- Login Page
    │       │   └── verifyVC.js             -- Verify Verifiable Credentials Page
    │       └── styles
    │           ├── VerifyVCPage.css
    │           ├── dashboard.css
    │           ├── index.css
    │           └── styles.css


## Images

![](Images\Registration.png)

![](Images\login.png)

![](Images\dashboard.png)

![](Images\VC.png)

![](Images\verifyVC.png)


## Demo Video
 [Video](https://drive.google.com/file/d/1IuyqZ5_I1a2lxeLas-Fk5K_VdCBhbaoc/view?usp=drive_link)
<!-- # certification-suite

This product allows various beckn-enabled applications to be certified and tested -->
