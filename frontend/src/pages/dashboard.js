import React, { useState } from 'react';
import '../styles/dashboard.css'; // Import the dashboard-specific CSS
import { useAuth } from '../helpers/AuthContext'; // Import useAuth
import { Button, Modal, Form } from 'react-bootstrap';
import { sendPostRequest } from '../helpers/helper-request'; // Import the updated helper function
import { initRequestBody,selectRequestBody,confirmRequestBody,trackRequestBody,supportRequestBody,cancelRequestBody,statusRequestBody} from '../helpers/requestBodies';


const Dashboard = () => {
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const { user, logout } = useAuth();
  const [textInput, setTextInput] = useState('');
  const [isValidUrl, setIsValidUrl] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [requestStatuses, setRequestStatuses] = useState(Array(6).fill('Pending'));
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // Handle input change
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setTextInput(inputValue);

    // Validate input as URL
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    setIsValidUrl(urlPattern.test(inputValue));
  };

  // Handle form submission
  const appendages = ['init', 'select', 'confirm', 'track', 'support', 'cancel', 'status'];

  const handleHttpRequests = async (event) => {
    event.preventDefault()
    const requestBodyMap = {
      init: initRequestBody,
      select: selectRequestBody,
      confirm: confirmRequestBody,
      track: trackRequestBody,
      support: supportRequestBody,
      cancel: cancelRequestBody,
      status: statusRequestBody,
    };

    try {
      const requests = appendages.map(async (appendage) => {
  
        try {
          // Use the helper function to send a POST request with request body
          const response= await sendPostRequest(textInput, appendage, requestBodyMap[appendage]);
          return response.status; // Return the status code

          // Update status based on success
        }  catch (error) {
          return error.response; // Return error status or 500
        
        }
      });
      const responses = await Promise.all(requests);
      console.log(responses)
      
      setTimeout(function(){
        const individualStatuses = responses.map((status) => (console.log(status) && status < 500 ? 'Success' : 'Failure'));
        
      // Determine overall status based on all responses
      setRequestStatuses(individualStatuses);
      openModal();

      },10000);
      // openModal();
    } catch (error) {
      console.error('HTTP Request Error:', error);
    }
    
  };

    return (
      <div className="dashboard-container">
        {user  ? (
          <><header className="dashboard-header">
            <div className="user-info">Welcome, {user.username}!</div>
            <a className="logout-link" href="/logout">Logout</a>
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
                    value={field1}
                    onChange={e => setField2(e.target.value)}
                  >
                    <option value="">Select an option</option>
                    <option value="option1">ONDC</option>
                    <option value="option2">Kochi Mobility Network</option>
                    <option value="option3">Namma yatri</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="textInput">Base API endpoint</label>
                  <input
                    type="text"
                    id="textInput"
                    value={textInput}
                    onChange={handleInputChange}
                    className={!isValidUrl ? 'invalid' : ''}
                  />
                  {!isValidUrl && <p className="error-message">Enter a valid URL</p>}
                </div>
                <button type='submit' disabled={!isValidUrl} onClick={handleHttpRequests}>
                  Submit Text
                </button>
              </form>
              <Modal show={showModal} onHide={closeModal} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Request Statuses</Modal.Title>
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
                </Modal.Footer>
              </Modal>              
            </main></>
) : (
          <p>Please log in to access the dashboard.</p>
        )}
      </div>
    );
};

export default Dashboard;