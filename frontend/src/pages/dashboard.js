import React, { useState } from 'react';
import '../styles/dashboard.css'; // Import the dashboard-specific CSS
import { useAuth } from '../helpers/AuthContext'; // Import useAuth
import { Button, Modal } from 'react-bootstrap';
import { sendPostRequest } from '../helpers/helper-request'; // Import the updated helper function
import { initRequestBody,selectRequestBody,confirmRequestBody,statusRequestBody} from '../helpers/requestBodies';
import { confirmResponse } from '../Responseformats/confirmResponse';
import { selectResponse } from '../Responseformats/selectResponse';
import { statusResponse } from '../Responseformats/statusResponse'; 
import {initresp} from '../Responseformats/initResponse';
import { validateResponseWithFormat } from '../helpers/format';
import VCQRCode from '../helpers/QR_code'; // Import your VCQRCode component
import axios from 'axios';

const Dashboard = () => {
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const { user, logout } = useAuth();
  const [textInput, setTextInput] = useState('');
  const [isValidUrl, setIsValidUrl] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [verified,setStatusVerified]= useState(false);
  const [requestStatuses, setRequestStatuses] = useState(Array(4).fill('Pending'));
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const [loading, setLoading] = useState(false);
  const [vcIssued, setVCIssued] = useState(false);
  let vcData;
  // Handle input change
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setTextInput(inputValue);

    // Validate input as URL
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    setIsValidUrl(urlPattern.test(inputValue));
  };

  // Handle form submission
  const appendages = ['init', 'select', 'confirm', 'status'];
     vcData={
      orgdomain:field1,
      // organizationId:user.username,
      // city:"std:830",
      uri:textInput,
      coreVersion:"0.9.4"
    }
    const handleIssueVC = async () => {
      try {
        setLoading(true);
        console.log(vcData)
        // Replace 'your-vc-api-endpoint' with the actual API endpoint for issuing VC
        const response = await axios.post('http://localhost:8000/issue-vc',vcData);
        if (response.status === 200) {
          setVCIssued(true);
          setStatusVerified(true);
          alert("VC has been issued. Both QR code and following are the VC",response)
        } else {
          console.log('VC issuance failed');
        }
      } catch (error) {
        console.error('Error issuing VC:', error);
      } finally {
        setLoading(false);
      }
    }

  const handleHttpRequests = async (event) => {
    event.preventDefault()
    const requestBodyMap = {
      init: [initRequestBody,initresp],
      select: [selectRequestBody,selectResponse],
      confirm: [confirmRequestBody,confirmResponse],
      status: [statusRequestBody,statusResponse],
    };

    try {
      const requests = appendages.map(async (appendage) => {
        openModal();

        try {
          // Use the helper function to send a POST request with request body
          const response= await sendPostRequest(textInput, appendage, requestBodyMap[appendage][0]);
          const statusReq= validateResponseWithFormat(response['responses'][0],requestBodyMap[appendage][1]);
          console.log(requestBodyMap[appendage][1]);
          return statusReq; // Return the status code

          // Update status based on success
        }  catch (error) {
          return error; // Return error status or 500
        
        }
      });
      const responses = await Promise.all(requests);
      
      const individualStatuses = responses.map((status1) => (status1 ? 'Success' : 'Failure'));
        
      // Determine overall status based on all responses
      setRequestStatuses(individualStatuses);
      const areAllTrue = (array) => {
        return array.every(element => element === true);
      };      
      setStatusVerified()
      if(areAllTrue)
      alert("You have been Certified")
      else
      alert("You have failed to be certified")

    } catch (error) {
      console.error('HTTP Request Error:', error);
    }
    
  };
    return (
      <>

      <Modal size="lg" dialogClassName="custom-modal" show={showModal} onHide={closeModal}>
        <Modal.Header>
          <Modal.Title>Endpoint Request Statuses</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {requestStatuses.map((status, index) => (
              <li key={index}>{`${appendages[index]}: ${status}`}</li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <button onClick={handleIssueVC} disabled={loading || vcIssued}>
                {loading ? 'Issuing VC...' : vcIssued ? 'VC Issued' : 'Issue VC'}
              </button>
        </Modal.Footer>
      </Modal>

  <div className="dashboard-container">
          {user ? (<>
            <header className="dashboard-header">
              <div className="user-info">Welcome, {user.username}!</div>
              <a className="logout-link" onClick={logout} href="/logout">Logout</a>
            </header><main className="dashboard-content">
              <h1 className="dashboard-heading">Dashboard</h1>
              <form className="dashboard-form">
                <div className="form-group">
                  <label className="form-label">Domain:</label>
                  <select
                    className="form-select"
                    value={field1}
                    onChange={e => setField1(e.target.value)}
                  >
                    <option value="">Select an option</option>
                    <option value="option1">Mobility</option>
                    <option value="option2">Education</option>
                    <option value="option3">Health</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Network:</label>
                  <select
                    className="form-select"
                    value={field2}
                    onChange={e => setField2(e.target.value)}
                  >
                    <option value="">Select an option</option>
                    <option value="option1">ONDC</option>
                    <option value="option2">Kochi Mobility Network</option>
                    <option value="option3">Namma yatri</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">City:</label>
                  <select
                    className="form-select"
                    value={field2}
                    onChange={e => setField2(e.target.value)}
                  >
                    <option value="">Select an option</option>
                    <option value="option1">India</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="textInput">Base API endpoint</label>
                  <input
                    type="text"
                    id="textInput"
                    value={textInput}
                    onChange={handleInputChange}
                    className={!isValidUrl ? 'invalid' : ''} />
                  {!isValidUrl && <p className="error-message">Enter a valid URL</p>}
                </div>
                <button type='submit' disabled={!isValidUrl} onClick={handleHttpRequests}>
                  Submit
                </button>
                {verified && <VCQRCode vcData={vcData} />}

              </form>
            </main>
</>
          ) : (
            <p>Please log in to access the dashboard.</p>
          )}
        </div></>
    );
};

export default Dashboard;